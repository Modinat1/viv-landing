import React, { useEffect, useState } from "react";
import Heading from "./Product/Heading";
import Product from "./Product/Products";
import { SplOfferData } from "../constants";
import { useParams } from "react-router-dom";

const SpecialOffer = () => {
  const { category } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(SplOfferData);
  }, [data]);

  const catData = data.filter((item) => item.cat === category);
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 xl:grid-cols-4 gap-10">
        {catData.map((data) => (
          <Product
            key={data._id}
            _id={data._id}
            img={data.img}
            productName={data.productName}
            price={data.price}
            badge={true}
            des={data.des}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
