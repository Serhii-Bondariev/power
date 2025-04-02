import React from "react";
import { Link } from "react-router-dom";
const products = [{
  id: 1,
  name: "Потужний павербанк 20000 mAh",
  price: "1299 грн",
  description: "Компактний та потужний павербанк з підтримкою швидкої зарядки",
  imageSrc: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  imageAlt: "Павербанк 20000 mAh"
}, {
  id: 2,
  name: "Акумулятор Samsung 21700 4800mAh",
  price: "299 грн",
  description: "Високоякісний акумулятор формату 21700 з високою ємністю",
  imageSrc: "https://images.unsplash.com/photo-1612528906705-d341b4581836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  imageAlt: "Акумулятор 21700"
}, {
  id: 3,
  name: "Збірка для FPV дрона 4S 1500mAh",
  price: "1599 грн",
  description: "Готова акумуляторна збірка для FPV дронів з високою потужністю",
  imageSrc: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  imageAlt: "Збірка для FPV дрона"
}, {
  id: 4,
  name: "Корпус для павербанка (3D друк)",
  price: "399 грн",
  description: "Надрукований на 3D принтері корпус для саморобного павербанка",
  imageSrc: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  imageAlt: "3D друкований корпус"
}];
const FeaturedProducts = () => {
  return <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Популярні товари
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Найпопулярніші товари нашого магазину
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(product => <div key={product.id} className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden bg-gray-200">
                <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-64 object-cover object-center" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                    Купити
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <Link to="/products/powerbanks" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Переглянути всі товари
          </Link>
        </div>
      </div>
    </section>;
};
export default FeaturedProducts;