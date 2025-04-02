import React from "react";
import { PackageIcon, PencilRulerIcon } from "lucide-react";
const services = [{
  name: "3D Друк на замовлення",
  description: "Виготовлення деталей, корпусів та інших виробів на 3D принтері за вашими кресленнями або моделями",
  icon: <div className="h-12 w-12 text-blue-600" />
}, {
  name: "Готові 3D вироби",
  description: "Широкий асортимент готових виробів, надрукованих на 3D принтері - від корпусів до декоративних елементів",
  icon: <PackageIcon className="h-12 w-12 text-blue-600" />
}, {
  name: "3D моделювання",
  description: "Створення 3D моделей для подальшого друку на основі ваших ескізів та ідей",
  icon: <PencilRulerIcon className="h-12 w-12 text-blue-600" />
}];
const Services = () => {
  return <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Послуги 3D друку
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Виготовлення деталей та виробів на сучасному обладнанні
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map(service => <div key={service.name} className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-100">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {service.description}
                </p>
              </div>)}
          </div>
        </div>
        <div className="mt-12 bg-blue-700 rounded-lg overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Потрібен 3D друк?
              </h3>
              <p className="mt-3 max-w-3xl text-lg text-blue-200">
                Зв'яжіться з нами, щоб обговорити ваш проект та отримати
                безкоштовну консультацію
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                Зв'язатися з нами
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;