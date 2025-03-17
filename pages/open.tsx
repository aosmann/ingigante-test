// pages/open.tsx

import { useEffect, useState } from "react";
import { getProperties } from "../lib/api";

// Define property type (adjust as per your actual schema from Sanity)
interface Property {
  _id: string;
  title: string;
  sellPrice: number;
  bedrooms: number;
  bathrooms: number;
  // Add more fields if needed (e.g., location, propertyType)
}

export default function OpenPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [minBedrooms, setMinBedrooms] = useState<number | null>(null);
  const [minBathrooms, setMinBathrooms] = useState<number | null>(null);
  const [sortByPrice, setSortByPrice] = useState<boolean | null>(null);
  const [sortDescending, setSortDescending] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data: Property[] = await getProperties({
          category,
          minBedrooms,
          minBathrooms,
          sortByPrice,
          sortDescending,
        });
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [category, minBedrooms, minBathrooms, sortByPrice, sortDescending]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value || null);
  };

  const handleBedroomsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setMinBedrooms(isNaN(value) ? null : value);
  };

  const handleBathroomsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setMinBathrooms(isNaN(value) ? null : value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === "sellPrice") {
      setSortByPrice(true);
      setSortDescending(false);
    } else if (value === "sellPrice-desc") {
      setSortByPrice(true);
      setSortDescending(true);
    } else {
      setSortByPrice(null);
      setSortDescending(null);
    }
  };

  return (
    <div>
      <h1>Properties</h1>
      <div style={{ marginBottom: "2rem" }}>
        <label>
          Category:
          <select value={category || ""} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="category3-id">Category 3</option>
          </select>
        </label>
        <label>
          Minimum Bedrooms:
          <input
            type="number"
            value={minBedrooms ?? ""}
            onChange={handleBedroomsChange}
          />
        </label>
        <label>
          Minimum Bathrooms:
          <input
            type="number"
            value={minBathrooms ?? ""}
            onChange={handleBathroomsChange}
          />
        </label>
        <label>
          Sort by:
          <select
            value={
              sortByPrice
                ? sortDescending
                  ? "sellPrice-desc"
                  : "sellPrice"
                : "none"
            }
            onChange={handleSortChange}
          >
            <option value="none">None</option>
            <option value="sellPrice">Price (low to high)</option>
            <option value="sellPrice-desc">Price (high to low)</option>
          </select>
        </label>
      </div>

      <ul>
        {properties.map((property) => (
          <li key={property._id}>
            <h2>{property.title}</h2>
            <div>Price: ${property.sellPrice}</div>
            <div>{property.bedrooms} Bedrooms</div>
            <div>{property.bathrooms} Bathrooms</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
