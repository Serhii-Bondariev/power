import React from "react";
import { StarIcon } from "lucide-react";
const testimonials = [{
  id: 1,
  content: "Дуже якісні павербанки. Користуюсь вже більше року, тримає заряд відмінно. Рекомендую!",
  author: "Олександр К.",
  role: "Фотограф",
  rating: 5
}, {
  id: 2,
  content: "Замовляв акумулятори для свого FPV дрона. Все працює чудово, літальний час збільшився.",
  author: "Віталій М.",
  role: "FPV пілот",
  rating: 5
}, {
  id: 3,
  content: "Замовив 3D друк корпусу для саморобного гаджета. Якість відмінна, все підійшло ідеально.",
  author: "Ігор В.",
  role: "Інженер-електронік",
  rating: 4
}];
const Testimonials = () => {
  return <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Відгуки наших клієнтів
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Що про нас говорять
          </p>
        </div>
        <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`} />)}
              </div>
              <p className="mt-4 text-lg text-gray-700">
                {testimonial.content}
              </p>
              <div className="mt-6">
                <p className="font-medium text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;