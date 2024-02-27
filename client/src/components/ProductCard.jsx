import { Link } from "react-router-dom";
import { useProductsContext } from "../context/ProductContext";
import { useUserContext } from "../context/UserContext";

const ProductCard = ({ product }) => {
  const { handleAddToCart, productCounts } = useProductsContext();
  const { user } = useUserContext();

  return (
    <div className="border rounded-md p-20 flex flex-col gap-5">
      <div>
        <img src={product.image} alt={product.name} className="w-full mb-4" />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="overflow-y-scroll max-h-40">
          <p className="text-gray-600 mb-2">{product.description}</p>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-gray-800 font-bold">Price: ${product.price}</p>
          {product.quantity === 0 ? (
            <p className=" text-red-500">Out of stock</p>
          ) : (
            <p className="text-gray-800 font-bold">
              Quantity: {product.quantity}
            </p>
          )}
          <p className="text-gray-800 font-bold">Category: {product.category}</p>
          <p className="text-gray-800 font-bold">Brand: {product.brand}</p>
        </div>
      </div>

      <div className="mt-auto text-center">
        {user ? (
          product.quantity === 0 ? (
            <button
              className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded  disabled"
              disabled
            >
              Out of Stock
            </button>
          ) : (
            <button
              onClick={() => handleAddToCart(product._id)}
              className="bg-green-600 hover:bg-green-400 text-white py-2 px-4 rounded "
            >
              Add to Cart ({productCounts[product._id] || 0})
            </button>
          )
        ) : (
            <button
              className="bg-green-600 hover:bg-green-400 text-white py-2 px-4 rounded "
            >
              <Link to="/signin">
              Add to Cart ({productCounts[product._id] || 0})
              </Link>
            </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
