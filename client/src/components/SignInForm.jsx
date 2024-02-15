import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { ArrowLeft } from "lucide-react";
import { GridLoader } from "react-spinners";

export default function SignInForm() {
    const { handleSignIn, errors, isLoading, IsSubmitted  } = useUserContext();
  console.log(errors)
    return (
        <>
         {isLoading && !IsSubmitted && (
        <div className=" bg-sage-green flex justify-center items-center h-screen gap-2">
          <GridLoader />
          loading...
        </div>
      )}
    <div className=" gap-1 h-12 items-center flex  ml-4 mt-7">
            <ArrowLeft className=" w-8 h-8" />
            <Link to="/">
              {" "}
              <p className=" text-xl underline">Back</p>
            </Link>
          </div>
    
    
        <div className=" gap-40 flex justify-center items-center h-screen bg-sage-green">
            <img className=" w-1/5 shadow-2xl" src="https://i.pinimg.com/736x/5d/52/7a/5d527acb1b3090f6eed7b202c788a856.jpg"></img>
           
          <form
            className="max-w-md bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 w-full flex flex-col justify-center"
            onSubmit={handleSignIn}
          >
              {errors ? (
                <ul className="text-red-500 mb-10">
                  {errors.map((err, i) => (
                    <li className="list-disc py-2" key={i}>
                      {err?.message}
                    </li>
                  ))}
                </ul>
              ) : null}
            <div className="mb-4">
          
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Username{" "}
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="username"
                placeholder="username"
                required
              />
            </div>
    
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
    
            <div className="flex flex-col justify-center items-center gap-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
                type="submit"
              >
                Sign In
              </button>
              <Link>
                <span className="text-blue-500">Forgot password ?</span>
              </Link>
    
              <span className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup">
                  <button className="text-blue-500">Sign Up</button>
                </Link>
              </span>
            </div>
          </form>
        </div>
        </>
    
      );
}
