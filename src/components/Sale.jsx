import React from "react";
import { Link } from "react-router-dom";
import saleImgOne from "../assets/bannerImgOne.jpg";
import saleImgTwo from "../assets/bannerImgTwo.jpg";
import saleImgThree from "../assets/product_2.jpg";
import Button from "./Button";

const Sale = () => {
  return (
    // <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
    
    <div className="w-[90%] mx-auto md:grid grid-cols-4 gap-x-4">

      <div className="md:col-span-2">
      
        <div className="h-1/2">
            <img className=" w-full object-contain" src={saleImgOne} alt="sales-image" />
        </div>

        
        <div className="w-full mx-4 ">
          <div className="mx-8">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
              Deodorants sales
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Up to{" "}
              <span className="text-4xl md:text-5xl lg:text-5xl font-bold">
                30%
              </span>{" "}
              Sales For All Deodorants{" "}
            </p>

            <div className=" mb-8">
              <Button text="Shop Now" className={"px-8"}/>
            </div>

          </div>
        </div>
      </div>

      
      <div className="md:col-span-2">
        <div className="mb-4">
          <Link to="#">
            <img className=" object-cover" src={saleImgTwo} alt="sales-image" />
          </Link>
          
        </div>

        <div className="">
          <Link to="#">
            <img className="object-cover" src={saleImgThree} alt="sales-image" />
          </Link>
        </div>

        </div>

      </div>
    
  );
};

export default Sale;



