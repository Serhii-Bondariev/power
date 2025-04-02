
interface FilterOption {
  id: string;
  label: string;
  count: number;
}
interface FilterSection {
  title: string;
  options: FilterOption[];
}
interface FilterSidebarProps {
  filters: FilterSection[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (section: string, value: string) => void;
}
const FilterSidebar = ({
  filters,
  selectedFilters,
  onFilterChange
}: FilterSidebarProps) => {
  return <div className="w-64 bg-white p-4 border-r border-gray-200">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Фільтри</h2>
      {filters.map(section => <div key={section.title} className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            {section.title}
          </h3>
          <div className="space-y-2">
            {section.options.map(option => <div key={option.id} className="flex items-center">
                <input id={option.id} name={option.id} type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked={selectedFilters[section.title]?.includes(option.id)} onChange={() => onFilterChange(section.title, option.id)} />
                <label htmlFor={option.id} className="ml-2 text-sm text-gray-600">
                  {option.label} ({option.count})
                </label>
              </div>)}
          </div>
        </div>)}
    </div>;
};
export default FilterSidebar;