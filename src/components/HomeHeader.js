import React from "react";
import Image from "next/image";
import logo from "../images/rinca logo.png";

const HomeHeader = () => {
  return (
    <div className="shadow-sm border-b border-gray-700 sticky top-0 z-30  bg-white p-1">
      <div className="flex  items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* LEFT */}
        <div className="cursor-pointer h-20 w-40 relative lg:inline-grid">
          <Image src={logo} height="100" className="object-contain " />
        </div>

        {/* MIDDLE */}

        <div className=" w-[40%] items-center flex-col ml-[12rem] ">
          <div className="space-x-4">
            <button className="btn">
              Discover <span className="text-green-400">Us</span>
            </button>

            <button className="btn">Deals</button>

            <button className="btn">
              About <span className="text-green-400">Us</span>
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="w-[10%]">
          <button className="btn">
            Sign <span className="text-green-400">In</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
