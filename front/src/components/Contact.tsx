import React, { useState } from "react";
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Here would be the logic to submit the form data to the backend
    console.log("Form submitted:", formData);
    alert("Дякуємо за повідомлення! Ми зв'яжемося з вами найближчим часом.");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Зв'язатися з нами
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Маєте питання? Напишіть нам або зв'яжіться через Telegram
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">Напишіть нам</h3>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Ім'я
                </label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Повідомлення
                </label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Надіслати
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">
                Наші контакти
              </h3>
              <div className="mt-6 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>вул. Технічна, 15</p>
                    <p>Київ, 03056</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+380 (50) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>info@powertech.ua</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-blue-700 p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-medium text-white">
                Напишіть нам у Telegram
              </h3>
              <p className="mt-2 text-blue-200">
                Швидка відповідь через нашого Telegram бота
              </p>
              <div className="mt-6">
                <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50">
                  <SendIcon className="h-5 w-5 mr-2" />
                  Відкрити Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;