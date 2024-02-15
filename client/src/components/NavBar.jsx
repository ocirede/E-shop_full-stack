import { Link } from "react-router-dom";
import { CircleUserRound, ShoppingCart, LogOut, HomeIcon } from "lucide-react";
import { useUserContext } from "../context/UserContext";
import DropdownMenu from "./DropMenu";
import { useProductsContext } from "../context/ProductContext";
import { baseURL } from "../config/api.js";
import CategoryMenu from "./CategoryMenu.jsx";

const NavBar = () => {
  const { handeLogout, user } = useUserContext();
  const { selectedProduct } = useProductsContext();
  const userUppercase =
    user?.username?.split(" ")[0].charAt(0).toUpperCase() +
    user?.username?.slice(1);
  return (
    <>
      <nav className="">
        <ul className=" bg-sage-green w-full h-36 flex  justify-center items-center absolute top-0 z-20">
          <div className=" flex items-center justify-evenly w-1/3">
            <img
              className=" w-56 h-32 bg"
              src="https://i.pinimg.com/736x/5d/52/7a/5d527acb1b3090f6eed7b202c788a856.jpg"
            ></img>
            <h2 className=" text-4xl font-bold  italic text-white">Weedout</h2>
          </div>
          <CategoryMenu />

          {/* <input
            className=" w-1/3 h-12 border text-center"
            type="text"
            placeholder="SEARCH PRODUCTS"
          /> */}
          {user ? (
            <div className="  w-1/2  flex justify-evenly  items-center gap-10">
              <Link to="/">
                {" "}
                <HomeIcon className=" text-white" />
              </Link>

              <div className=" flex items-center gap-4">
                {user.image ? (
                  <img
                    className="w-16 h-16 rounded-full mr-8"
                    src={baseURL + "/uploads/" + user?.image}
                    alt={user.name}
                  />
                ) : (
                  <CircleUserRound className=" text-white w-10 h-7" />
                )}

                <span className=" text-white text-xl">
                  {" "}
                  Welcome {userUppercase || "user"}
                </span>
              </div>
              <DropdownMenu />
              <div className=" flex items-center gap-3">
                <Link to="/shoppingpage">
                  <ShoppingCart className=" text-white w-10 h-7" />
                </Link>
                <span className=" text-white text-xl">
                  ({selectedProduct?.length || 0})
                </span>
              </div>

              <button>
                {" "}
                <LogOut
                  onClick={handeLogout}
                  className=" text-white w-10 h-7"
                />
              </button>
            </div>
          ) : (
            <div className=" w-1/3 ml-28 flex gap-20">
              <Link to="/signup">Sign-up</Link>
              <Link to="/signin">Sign-in</Link>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
