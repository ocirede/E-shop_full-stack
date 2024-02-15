import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { PacmanLoader } from "react-spinners";
export default function SignUpForm() {
  const { handleRegistration, IsSubmitted, errors, isLoading } =
    useUserContext();
  return (
    <>
      <div className=" gap-1 h-12 items-center flex  ml-4 mt-7">
        <ArrowLeft className=" w-8 h-8" />
        <Link to="/">
          {" "}
          <p className=" text-xl underline">Back</p>
        </Link>
      </div>

      {isLoading && !IsSubmitted && (
        <div className=" bg-sage-green flex justify-center items-center h-screen ">
          <PacmanLoader />
        </div>
      )}

      {IsSubmitted && !isLoading && (
        <div className=" bg-sage-green flex justify-center items-center h-screen">
          <div className="  bg-slate-50 h-48 w-2/5 flex items-center justify-center shadow-xl">
            <h2 className=" text-3xl  text-center">
              We have sent you an email to verify your account.
              <br /> Check your inbox!!
            </h2>
          </div>
        </div>
      )}
      <div className=" bg-sage-green  w-full h-screen flex justify-center items-center gap-24">
     

        <div className=" flex flex-col gap-6">
        <h1 className=" text-6xl text-white">Welcome to Weedout</h1>
          <img className=" mb-20"
            src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2021/06/cbd_oil_benefits_getty_creative.jpeg.jpg"
            alt=""
          />
       
        </div>

        <form
          className="max-w-md  bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 w-1/5 h-2/5 flex flex-col justify-center"
          onSubmit={handleRegistration}
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
          <div className="mb-4  ">
            <div className="mr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                Username{" "}
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                name="username"
                placeholder="username"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="emailOrPhone"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              required
              placeholder="New Password"
            />
          </div>

          <div className="flex  flex-col justify-center items-center gap-6 ">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
              type="submit"
            >
              Sign Up
            </button>
            <span className="text-gray-600">
              Already have an Account?{" "}
              <Link to="/signin">
                <button className="text-blue-500"> Sign in</button>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
