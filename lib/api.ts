// lib/api.ts
import { client } from "./sanity.client";


export interface Property {
  _id: string;
  title: string;
  sellPrice: number;
  bedrooms: number;
  bathrooms: number;
  _createdAt?: string;
  _updatedAt?: string;
  slug: {
    current: string;
  };
  mainImage: any; // or a better type if you want, e.g. SanityImageSource
  location: {
    locationName: string;
  };
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


export interface GetPropertiesRentParams {
  category?: string | null;
  sortByPrice?: string | null;
  sortDescending?: boolean | null;
  searchQuery?: string;
  priceMin?: number | null;
  priceMax?: number | null;
  location?: string | null;
  feature?: string | null;
  priceCategory?: string | null;
  _createdAt?: string;
  _updatedAt?: string;
}

export async function getPropertiesRent(params: GetPropertiesRentParams): Promise<Property[]> {
  const {
    category,
    sortByPrice,
    sortDescending,
    searchQuery,
    priceMin,
    priceMax,
    location,
    feature,
    priceCategory,
  } = params;

  let query = `*[_type == "propertiesRent"`;
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
  if (feature) {
    query += ` && features[]->featureName match $feature`;
    queryParams.feature = feature;
  }
  if (priceCategory) {
    query += ` && priceCategory == $priceCategory`;
    queryParams.priceCategory = priceCategory;
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

  const response: Property[] = await client.fetch(query, queryParams);
  return response;
}