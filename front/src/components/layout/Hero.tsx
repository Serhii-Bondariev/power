import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Power banks and electronic components" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex items-center">
        <div className="text-center md:text-left md:max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Потужні рішення</span>
            <span className="block text-blue-400">для ваших пристроїв</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Павербанки, акумулятори формату 21700, запчастини та комплектуючі
            для FPV дронів. А також послуги 3D друку на замовлення.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <Link to="/products/powerbanks" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
              Перейти до товарів
            </Link>
            <Link to="/#contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
              Зв'язатися з нами
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;