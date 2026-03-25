import React from "react";
import navbar from "../assets/logo.png";
import coinIcon from "../assets/DoubleDollar.png";

const Navebar = ({coin}) => {
  return (
    <div>
      <div className="container mx-auto hidden md:flex justify-between items-center navbar bg-base-100 shadow-sm">
        <div className="flex-2">
          <a className="text-xl">
            <img src={navbar} alt="" />
          </a>
        </div>
        <div className="menu ">
          <ul className=" flex justify-between items-center gap-6 mr-6 text-[20px]  font-semibold">
            <li>
              <a className="text-[#585757]" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-[#585757]" href="#">Fixture</a>
            </li>
            <li>
              <a className="text-[#585757]" href="#">Teams</a>
            </li>
            <li>
              <a className="text-[#585757]" href="#">Schedules</a>
            </li>
          </ul>
        </div>
        <div className="btn py-2 px-2 ml-[100px]">
          <div className="flex justify-center items-center gap-3">
            <div id="count" className="text-2xl font-bold">
              {coin}
            </div>
            <p className="font-bold text-2xl">Coin</p>
            <div className="icon">
              <img src={coinIcon} alt="" className="w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
