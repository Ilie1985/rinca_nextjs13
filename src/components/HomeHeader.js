import React from "react";

import Image from "next/image";
import logo from "../images/rinca logo.png";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div className="border-b shadow-xl border-gray-700 sticky top-0 z-30  bg-white px-3 max-w-6xl mx-auto">
      <div className="flex  items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* LEFT */}
        <div className="  flex  items-center">
          <Link href="/">
            <Image
              src={logo}
              height="80"
              className=" cursor-pointer"
              alt="logolainspectoru"
            />
          </Link>
        </div>

        {/* MIDDLE */}

        <div className="flex justify-center ">
          <ul className=" flex space-x-4">
            <li
              className={`font-semibold border-b-[3px] border-b-transparent`}
            >
              <Link className="btn" href="/discover">
                Discover <span className="text-green-400">Us</span>
              </Link>
            </li>

            <li className={`font-semibold border-b-[3px] border-b-transparent`}>
              <Link href="/deals" className="btn">
                Deals
              </Link>
            </li>
            <li className={`font-semibold border-b-[3px] border-b-transparent`}>
              <Link href="/about" className="btn">
                About <span className="text-green-400">Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT */}

        <div className={`font-semibold border-b-[3px] border-b-transparent`}>
          <Link className="btn" href="/signin">
            Sign <span className="text-green-400">In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
