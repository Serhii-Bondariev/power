import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}
const ProductCard = ({
  id,
  name,
  price,
  description,
  image,
  category
}: ProductCardProps) => {
  const {
    isInWishlist,
    addToWishlist,
    removeFromWishlist
  } = useWishlist();
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(id);
    }
  };
  return <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${category}/${id}`}>
        <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden bg-gray-200">
          <img src={image} alt={name} className="w-full h-64 object-cover object-center" />
          <button onClick={handleWishlistClick} className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none">
            <HeartIcon className={`h-5 w-5 ${isInWishlist(id) ? "text-red-600 fill-current" : "text-gray-400"}`} />
          </button>
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">
          <Link to={`/products/${category}/${id}`}>{name}</Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-lg font-medium text-gray-900">{price}</p>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700" onClick={() => console.log("Add to cart:", id)}>
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Купити
          </button>
        </div>
      </div>
    </div>;
};
export default ProductCard;