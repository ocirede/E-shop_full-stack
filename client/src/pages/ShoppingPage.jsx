import { useProductsContext } from "../context/ProductContext";
import { Trash } from "lucide-react";
import { baseURL } from "../config/api.js";
import {Link} from "react-router-dom";

export default function ShoppingPage() {
  const { selectedProduct, deleteItem, handleCheckout} = useProductsContext();

  let total = 0;
  selectedProduct.forEach((product) => {
    total += product.price * product.amount;
  });

  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 z-0 h-screen"
        style={{
          backgroundImage:
            "url('https://www.ampfluence.com/wp-content/uploads/2020/12/cbd-oil-instagram-scaled.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "-1",
        }}
      ></div>
      <div className=" w-2/6   min-h-1/2 rounded-lg  ml-10 absolute bg-white text-black flex flex-col gap-20 justify-center items-start mt-56 z-10 p-8">
        <h2 className=" text-3xl font-bold	">Shopping Cart</h2>
        {selectedProduct.length === 0 ? (
          
          <p>Looks like your shopping cart is empty! Let's explore our <Link className=" text-blue-500" to="/" >store</Link> store and add some items to your cart for a delightful shopping experience."</p>
        ) : (
          <div className="p-4">
            {selectedProduct.map((product) => (
              <div key={product._id} className="mb-4">

                <div className=" flex items-center  justify-between gap-20">
                <div className=" flex ">
                <img className=" w-10" src={product.image} alt={product.name} />
                    <h3 className="text-lg font-semibold">{product.name} x {product.amount}</h3>
                  </div>
                  <Trash onClick={() => deleteItem(product._id)} className=" cursor-pointer" />
                </div>
                <h4 className="text-base">Price: {product.price} €</h4>
              </div>
            ))}
            <hr className="border-gray-400 my-6" />
            <p className="text-lg mt-6 font-semibold">
              Total: {total.toFixed(2)} €
            </p>
            <div className="flex justify-center mt-6">
              <button onClick={handleCheckout} className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
