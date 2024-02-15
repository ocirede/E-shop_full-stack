import React from "react";
import { useProductsContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

function SuccessfulPayment() {
  const { isRedirecting } = useProductsContext();

  return (
    <>
      <div className=" w.full h-screen bg-white mt-12 flex justify-center items-center">
        <div className=" mt-40  bg-sage-green w-1/3 h-1/5 flex justify-center items-center ">
          <span className=" text-2xl">
            Transaction Successful!! click <Link className=" text-blue-500 l" to="/">here</Link>{" "}
          </span>
        </div>
      </div>
    </>
  );
}

export default SuccessfulPayment;
