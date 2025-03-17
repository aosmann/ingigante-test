import React from 'react';

interface SelectBoxProps {
  propertyType: { typeName: string }[];
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ propertyType, handleCategoryChange }) => {
  return (
    <select
      className="w-full block bg-white border border-btn p-2.5 rounded-md text-sm appearance-none md:pr-20"
      onChange={handleCategoryChange}
    >
      <option value="">Property Type</option>
      {propertyType.map((types, index) => (
        <option key={index} value={types.typeName}>
          {types.typeName}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
