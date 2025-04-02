import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/products/ProductCard';
import FilterSidebar from '../../components/products/FilterSidebar';
import SortDropdown from '../../components/products/SortDropdown';
import {
  products,
  categoryNames,
  categoryFilters,
  Product,
} from '../../data/products';
const sortOptions = [
  {
    value: 'price-asc',
    label: 'Ціна: від низької до високої',
  },
  {
    value: 'price-desc',
    label: 'Ціна: від високої до низької',
  },
  {
    value: 'name-asc',
    label: 'Назва: А-Я',
  },
  {
    value: 'name-desc',
    label: 'Назва: Я-А',
  },
];
const CategoryPage = () => {
  const { category } = useParams<{
    category: string;
  }>();
  const [sortValue, setSortValue] = useState('price-asc');
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const categoryProducts = products[category as keyof typeof products] || [];
  const categoryFilter =
    categoryFilters[category as keyof typeof categoryFilters] || {};
  const filters = useMemo(() => {
    return Object.entries(categoryFilter).map(([title, options]) => ({
      title,
      options,
    }));
  }, [category]);
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...categoryProducts];
    Object.entries(selectedFilters).forEach(([filterType, selectedValues]) => {
      if (selectedValues.length > 0) {
        filtered = filtered.filter(product => {
          if (filterType === 'capacity' && product.capacity) {
            return selectedValues.some(value =>
              product.capacity?.includes(value)
            );
          }
          if (filterType === 'brand') {
            return selectedValues.includes(product.brand.toLowerCase());
          }
          if (filterType === 'features') {
            return selectedValues.some(value =>
              product.features.some(feature =>
                feature.toLowerCase().includes(value.toLowerCase())
              )
            );
          }
          return true;
        });
      }
    });
    return filtered.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
      switch (sortValue) {
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [categoryProducts, selectedFilters, sortValue]);
  const handleFilterChange = (section: string, value: string) => {
    setSelectedFilters(prev => {
      const current = prev[section] || [];
      return {
        ...prev,
        [section]: current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value],
      };
    });
  };
  if (!category || !categoryProducts) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Категорію не знайдено</p>
      </div>
    );
  }
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {categoryNames[category]}
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  {filteredAndSortedProducts.length} товарів
                </p>
              </div>
              <SortDropdown
                options={sortOptions}
                value={sortValue}
                onChange={setSortValue}
              />
            </div>
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Товари не знайдено</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;
