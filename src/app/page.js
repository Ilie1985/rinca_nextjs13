import React from "react";
import HomeHeader from "@/components/HomeHeader";
import Motto from "@/components/Motto";
import DateSelect from "@/components/DateSelect";


const Home = () => {
  return (
    <div  className="">
      <HomeHeader/>
      <Motto/>
      <DateSelect/>
    </div>
  );
};

export default Home;
