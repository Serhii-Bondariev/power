import { useParams, Link } from "react-router-dom";
import { HeartIcon, ShoppingCartIcon, CheckIcon, AlertTriangleIcon } from "lucide-react";
import { products } from "../../data/products";
import { useWishlist } from "../../context/WishlistContext";
const ProductDetail = () => {
  const {
    category,
    productId
  } = useParams<{
    category: string;
    productId: string;
  }>();
  const {
    isInWishlist,
    addToWishlist,
    removeFromWishlist
  } = useWishlist();
  // Find the product
  const product = Object.values(products).flat().find(p => p.id === productId);
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Товар не знайдено</p>
      </div>;
  }
  // Find related products
  const relatedProducts = products[category as keyof typeof products]?.filter(p => p.id !== productId).slice(0, 4);
  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };
  return <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="lg:max-w-lg lg:self-start">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-center object-cover" />
            </div>
          </div>
          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <div className="mt-3">
              <h2 className="sr-only">Інформація про товар</h2>
              <p className="text-3xl text-gray-900">{product.price}</p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Опис</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                {product.inStock ? <>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <p className="ml-2 text-sm text-green-700">В наявності</p>
                  </> : <>
                    <AlertTriangleIcon className="h-5 w-5 text-red-500" />
                    <p className="ml-2 text-sm text-red-700">
                      Немає в наявності
                    </p>
                  </>}
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">
                Характеристики
              </h3>
              <div className="mt-4">
                <ul className="pl-4 list-disc space-y-2">
                  {product.features.map((feature, index) => <li key={index} className="text-sm text-gray-600">
                      {feature}
                    </li>)}
                </ul>
              </div>
            </div>
            {/* Additional specs */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-medium text-gray-900">
                Специфікації
              </h3>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Бренд:</span> {product.brand}
                </p>
                {product.capacity && <p className="text-sm text-gray-600">
                    <span className="font-medium">Ємність:</span>{" "}
                    {product.capacity}
                  </p>}
                {product.voltage && <p className="text-sm text-gray-600">
                    <span className="font-medium">Напруга:</span>{" "}
                    {product.voltage}
                  </p>}
              </div>
            </div>
            <div className="mt-10 flex space-x-4">
              <button type="button" className="flex-1 max-w-xs bg-blue-600 text-white px-8 py-3 rounded-md flex items-center justify-center text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Додати в кошик
              </button>
              <button type="button" onClick={handleWishlistClick} className={`flex-1 max-w-xs px-8 py-3 rounded-md flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${isInWishlist(product.id) ? "bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-500" : "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500"}`}>
                <HeartIcon className={`h-5 w-5 mr-2 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                {isInWishlist(product.id) ? "В обраному" : "Додати в обране"}
              </button>
            </div>
          </div>
        </div>
        {/* Related products */}
        {relatedProducts && relatedProducts.length > 0 && <div className="mt-16">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Схожі товари
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map(relatedProduct => <Link key={relatedProduct.id} to={`/products/${category}/${relatedProduct.id}`} className="group">
                  <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                    <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-full object-center object-cover group-hover:opacity-75" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm text-gray-700">
                      {relatedProduct.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {relatedProduct.price}
                    </p>
                  </div>
                </Link>)}
            </div>
          </div>}
      </div>
    </div>;
};
export default ProductDetail;