import React from "react";
import { useProductsContext } from "../context/ProductContext";
import { ClimbingBoxLoader } from "react-spinners";
import { Link } from "react-router-dom";

function SuccessfulPayment() {
  const { isRedirecting } = useProductsContext();

  return (
    <>
      {isRedirecting && (
        <div className=" bg-sage-green flex justify-center items-center h-screen ">
          <ClimbingBoxLoader />
          <span className=" text-2xl font-semibold">
            {" "}
            Please do not close the page while we are prosessing your payment
          </span>
        </div>
      )}

      <div>
        <span>Transaction Successful!! click <Link to="/">here</Link> </span>
      </div>
    </>
  );
}

export default SuccessfulPayment;
