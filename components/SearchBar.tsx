import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
      <input
        type="text"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5"
        placeholder="Enter a keyword"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        className="bg-btn text-white flex items-center justify-center py-3 rounded-md md:px-6 w-full md:w-1/6"
        type="submit"
      >
        <span>
          <FiSearch className="mr-4" />
        </span>
        Search
      </button>
    </form>
  );
}
