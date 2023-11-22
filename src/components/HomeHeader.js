import React from "react";
import Image from "next/image";
import logo from "../images/rinca logo.png";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div className="shadow-sm border-b border-gray-700 sticky top-0 z-30  bg-white p-1">
      <div className="flex  items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* LEFT */}
        <div className="cursor-pointer h-20 w-40 relative lg:inline-grid">
          <Link href="/">
            <Image src={logo} height="100" className="object-contain " />
          </Link>
        </div>

        {/* MIDDLE */}

        <div className=" w-[40%] items-center flex-col ml-[12rem] ">
          <div className="space-x-4">
            <Link className="btn" href="/discover">
              Discover <span className="text-green-400">Us</span>
            </Link>

            <Link href="/deals" className="btn">
              Deals
            </Link>

            <Link href="/about" className="btn">
              About <span className="text-green-400">Us</span>
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <div className="w-[10%]">
          <Link className="btn" href="/signin">
            Sign <span className="text-green-400">In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
