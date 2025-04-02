import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import {
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
  BatteryChargingIcon,
  UserIcon,
} from 'lucide-react';
import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <BatteryChargingIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              PowerTech
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#products"
              className="text-#3f3f3f-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Товари
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              3D Друк
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Про нас
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Контакти
            </a>
          </nav>
          <div className="flex items-center">
            <button className="p-2 text-gray-700 hover:text-blue-600">
              <ShoppingCartIcon className="h-6 w-6" />
            </button>
            {user ? (
              <Link
                to="/profile"
                className="ml-4 p-2 text-gray-700 hover:text-blue-600"
              >
                <UserIcon className="h-6 w-6" />
              </Link>
            ) : (
              <Link
                to="/login"
                className="ml-4 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Увійти
              </Link>
            )}
            <button
              className="ml-4 md:hidden p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#products"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Товари
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            >
              3D Друк
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Про нас
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Контакти
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
