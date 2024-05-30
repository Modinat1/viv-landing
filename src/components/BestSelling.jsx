import React from "react";
import { Link } from "react-router-dom";
import bestSellingProduct from '../assets/bannerImgTwo.jpg'
import Button from "./Button";

const BestSelling = () => {
  return (
    <Link to="#">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
    
        <img
        className="w-full h-full object-cover md:inline-block"
         src={bestSellingProduct} alt="Best selling product" />

        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Best Selling Product
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          
          <Button text="Shop Now" className={"px-8"}/>
          
        </div>
      </div>
    </Link>
  );
};

export default BestSelling;
