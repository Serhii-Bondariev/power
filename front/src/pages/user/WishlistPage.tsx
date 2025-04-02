import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon, ShoppingBagIcon } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/products";
const WishlistPage = () => {
  const {
    wishlist,
    removeFromWishlist
  } = useWishlist();
  const {
    addToCart
  } = useCart();
  // Знаходимо всі товари, які є в списку обраних
  const wishlistItems = Object.values(products).flat().filter(product => wishlist.includes(product.id));
  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
  };
  const handleAddToCart = (productId: string) => {
    addToCart(productId);
  };
  if (wishlistItems.length === 0) {
    return <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBagIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-2 text-lg font-medium text-gray-900">
              Список обраного порожній
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Перейдіть до каталогу, щоб додати товари
            </p>
            <div className="mt-6">
              <Link to="/products/powerbanks" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                Перейти до каталогу
              </Link>
            </div>
          </div>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Обрані товари</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map(product => <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Link to={`/products/${product.category}/${product.id}`}>
                <div className="aspect-w-4 aspect-h-3">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover object-center" />
                </div>
              </Link>
              <div className="p-6">
                <Link to={`/products/${product.category}/${product.id}`} className="text-lg font-medium text-gray-900 hover:text-blue-600">
                  {product.name}
                </Link>
                <p className="mt-2 text-sm text-gray-500">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                  <div className="flex space-x-2">
                    <button onClick={() => handleAddToCart(product.id)} className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                      <ShoppingCartIcon className="h-5 w-5 mr-1" />В кошик
                    </button>
                    <button onClick={() => handleRemoveFromWishlist(product.id)} className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-red-600 bg-red-100 hover:bg-red-200">
                      <HeartIcon className="h-5 w-5 fill-current" />
                    </button>
                  </div>
                </div>
                {!product.inStock && <p className="mt-2 text-sm text-red-600">Немає в наявності</p>}
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default WishlistPage;