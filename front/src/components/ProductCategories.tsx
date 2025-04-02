import React from "react";
import { Link } from "react-router-dom";
import { BatteryIcon, BatteryChargingIcon, RadioIcon, CpuIcon } from "lucide-react";
const categories = [{
  name: "Павербанки",
  description: "Портативні зарядні пристрої різної ємності",
  icon: <BatteryChargingIcon className="h-8 w-8 text-blue-600" />,
  href: "/products/powerbanks"
}, {
  name: "Акумулятори 21700",
  description: "Високоякісні акумулятори формату 21700",
  icon: <BatteryIcon className="h-8 w-8 text-blue-600" />,
  href: "/products/batteries"
}, {
  name: "Запчастини",
  description: "Запасні частини для павербанків та електроніки",
  icon: <CpuIcon className="h-8 w-8 text-blue-600" />,
  href: "/products/spare-parts"
}, {
  name: "Радіодеталі",
  description: "Компоненти для електронних пристроїв",
  icon: <RadioIcon className="h-8 w-8 text-blue-600" />,
  href: "/products/components"
}, {
  name: "Збірки для FPV дронів",
  description: "Акумуляторні збірки для FPV дронів",
  icon: <div className="h-8 w-8 text-blue-600" />,
  href: "/products/fpv-drones"
}, {
  name: "3D друковані вироби",
  description: "Готові вироби, надруковані на 3D принтері",
  icon: <div className="h-8 w-8 text-blue-600" />,
  href: "/products/3d-prints"
}];
const ProductCategories = () => {
  return <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Категорії товарів
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Широкий вибір електронних компонентів та аксесуарів
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(category => <div key={category.name} className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div>{category.icon}</div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  <Link to={category.href}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {category.description}
                </p>
              </div>
              <div className="bg-gray-50 p-6 mt-auto">
                <Link to={category.href} className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Переглянути товари<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProductCategories;