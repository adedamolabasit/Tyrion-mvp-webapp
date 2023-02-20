import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import vector1 from "../assets/Vector 1.png";




function ProductHeader({category,details,path}) {
  return (
    <div>
      <h1 className="text-center  md:mb-[20px] md:text-4xl font-bold">
        {category}
        <span>
        <img
          src={vector1}
          width='200px'
          alt=""
          className="md:relative md:left-[530px] md:z-5 self"
        />
        </span>
      </h1>
      <p className="text-center text-[8px] md:text-3xl  opacity-[0.7] mb-[13px] md:mb-[10px] ">
       {details}
      </p>
      <Link
        to={path}
        className="justify-center items-center u mb-[17px] flex gap-2 text-[6px] md:text-lg font-bold"
      >
        View all products <img src={arrow} alt="" />
      </Link>
    </div>
  );
}

export default ProductHeader;
