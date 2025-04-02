import React from "react";
import { CheckCircleIcon } from "lucide-react";
const features = ["Працюємо з 2018 року", "Понад 10,000 задоволених клієнтів", "Тільки якісні компоненти та матеріали", "Гарантія на всі товари", "Швидка доставка по всій Україні", "Професійна консультація"];
const About = () => {
  return <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Про нашу компанію
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Ми спеціалізуємося на продажу високоякісних електронних
              компонентів, павербанків, акумуляторів та надаємо послуги 3D
              друку. Наша мета - забезпечити клієнтів надійними рішеннями для
              їхніх технічних потреб.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Завдяки багаторічному досвіду та співпраці з перевіреними
              постачальниками, ми гарантуємо якість кожного товару в нашому
              асортименті.
            </p>
            <div className="mt-8">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map(feature => <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>)}
              </ul>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-5 aspect-h-4">
              <img className="rounded-lg shadow-lg object-cover object-center" src="https://images.unsplash.com/photo-1581092921461-eab10380ed66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Наша команда за роботою" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;