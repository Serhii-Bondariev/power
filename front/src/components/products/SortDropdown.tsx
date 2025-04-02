import React from "react";
interface SortOption {
  value: string;
  label: string;
}
interface SortDropdownProps {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
}
const SortDropdown = ({
  options,
  value,
  onChange
}: SortDropdownProps) => {
  return <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Сортувати за:
      </label>
      <select id="sort" value={value} onChange={e => onChange(e.target.value)} className="border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
        {options.map(option => <option key={option.value} value={option.value}>
            {option.label}
          </option>)}
      </select>
    </div>;
};
export default SortDropdown;