// lib/api.ts
import { client } from "./sanity.client";

export interface Property {
  _id: string;
  title: string;
  sellPrice: number;
  bedrooms: number;
  bathrooms: number;
  // Add more fields as needed
}

interface GetPropertiesParams {
  category?: string | null;
  minBedrooms?: number | null;
  minBathrooms?: number | null;
  sortByPrice?: boolean | null;
  sortDescending?: boolean | null;
  searchQuery?: string;
  priceMin?: number | null;
  priceMax?: number | null;
  location?: string | null;
}

export async function getProperties(params: GetPropertiesParams): Promise<Property[]> {
  const {
    category = null,
    minBedrooms = null,
    minBathrooms = null,
    sortByPrice = null,
    sortDescending = null,
    searchQuery = "",
    priceMin = null,
    priceMax = null,
    location = null,
  } = params;

  let query = `*[_type == "properties"`;
  let queryParams: Record<string, any> = {};

  if (searchQuery) {
    query += ` && title match $searchTerm`;
    queryParams.searchTerm = searchQuery;
  }
  if (category) {
    query += ` && propertyType->typeName == $categoryID`;
    queryParams.categoryID = category;
  }
  if (priceMin) {
    query += ` && sellPrice >= $priceMin`;
    queryParams.priceMin = priceMin;
  }
  if (priceMax) {
    query += ` && sellPrice <= $priceMax`;
    queryParams.priceMax = priceMax;
  }
  if (location) {
    query += ` && location->locationName == $location`;
    queryParams.location = location;
  }
  if (minBedrooms !== null) {
    query += ` && bedrooms >= $minBedrooms`;
    queryParams.minBedrooms = minBedrooms;
  }
  if (minBathrooms !== null) {
    query += ` && bathrooms >= $minBathrooms`;
    queryParams.minBathrooms = minBathrooms;
  }

  query += `]`;

  if (sortByPrice) {
    query += ` | order(sellPrice ${sortDescending ? "desc" : "asc"})`;
  }

  query += ` {
    ...,
    location->,
    propertyType->
  }`;

  const response = await client.fetch(query, queryParams);
  return response;
}

export async function getPropertiesRent(params: {
  category?: string;
  sortByPrice?: string;
  sortDescending?: boolean;
  searchQuery?: string;
  priceMin?: number;
  priceMax?: number;
  location?: string;
  feature?: string;
  priceCategory?: string;
}) {
  const filters = [];

  if (params.category) filters.push(`propertyType->typeName match "${params.category}"`);
  if (params.location) filters.push(`location->locationName match "${params.location}"`);
  if (params.feature) filters.push(`features[]->featureName match "${params.feature}"`);
  if (params.priceCategory) filters.push(`category == "${params.priceCategory}"`);
  if (params.priceMin) filters.push(`price >= ${params.priceMin}`);
  if (params.priceMax) filters.push(`price <= ${params.priceMax}`);
  if (params.searchQuery)
    filters.push(`title match "*${params.searchQuery}*"`);

  const whereClause = filters.length > 0 ? `&& ${filters.join(" && ")}` : "";

  const query = `*[_type == "propertiesRent" ${whereClause}]{
    _id,
    title,
    slug,
    price,
    category,
    location->,
    propertyType->,
    rooms,
    bathrooms,
    area_total,
    beachfront,
    mainImage
  }`;

  const results = await client.fetch(query);
  return results;
}