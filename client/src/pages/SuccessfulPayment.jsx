import React from "react";
import { useProductsContext } from "../context/ProductContext";
import {PacmanLoader} from "react-spinners";


function SuccessfulPayment() {
  const {  IsSubmitted, isLoading } =
    useProductsContext();

  return  (
    <>
    {isLoading && !IsSubmitted && (
      <div className=" bg-sage-green flex justify-center items-center h-screen ">
        <PacmanLoader />
      </div>
    )}
    </>
  )
  

}

export default SuccessfulPayment;
