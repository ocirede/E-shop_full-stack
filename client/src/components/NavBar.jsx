import { Link } from "react-router-dom";
import { CircleUserRound, ShoppingCart, LogOut, HomeIcon } from "lucide-react";
import { useUserContext } from "../context/userContext";
import DropdownMenu from "./DropMenu";

const NavBar = () => {
  const { handeLogout, user } = useUserContext();
  const userUppercase =
    user?.username?.split(" ")[0].charAt(0).toUpperCase() +
    user?.username?.slice(1);
  console.log("navbar user", user);
  return (
    <>
      <nav className="">
        <ul className=" bg-slate-200 w-full h-36 flex  justify-center items-center">
          <div className=" flex items-center justify-evenly w-1/3">
            <img
              className=" w-56 h-32 bg"
              src="https://i.pinimg.com/736x/5d/52/7a/5d527acb1b3090f6eed7b202c788a856.jpg"
            ></img>
            <h2 className=" text-4xl font-bold  italic text-green-700">
              Weedout
            </h2>
          </div>

          <input
            className=" w-1/3 h-12 border text-center"
            type="text"
            placeholder="SEARCH PRODUCTS"
          />
          {user ? (
            <div className="  w-1/2  flex justify-evenly  items-center gap-10">
              <Link to="/">
                {" "}
                <HomeIcon />
              </Link>

              <div className=" flex items-center gap-4">
                {" "}
                <CircleUserRound className=" w-10 h-7" />
                Welcome {userUppercase || "user"}
              </div>
              <DropdownMenu />

              <ShoppingCart className=" w-10 h-7" />
              <button>
                {" "}
                <LogOut onClick={handeLogout} className=" w-10 h-7" />
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
