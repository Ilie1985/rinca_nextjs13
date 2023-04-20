import React from "react";
import Image from "next/image";
import mottoImageRight from "../images/image motto right.png";
import mottoImageLeft from "../images/image motto left.png";

const Motto = () => {
  return (
    <div className="flex  justify-between p-4 mt-20">
      <div className=" ">
        <Image src={mottoImageLeft} className=" rounded-full w-[20rem] ml-[10rem]" />
      </div>

      <div className="w-[20%] relative">
        <h1 className="absolute top-8 left-6 font-bold text-xl">Enjoy your dream vacation</h1>
        <p className=" absolute top-20 text-white font-semibold left-4 italic">We always make our customers happy</p>
      </div>

      <div className="">
        <Image src={mottoImageRight} className="rounded-full w-[20rem] mr-[10rem]" />
      </div>
    </div>
  );
};

export default Motto;
