import React from "react";
import Herobanner from "../assets/bg-shadow.png";
import banner from "../assets/banner-main.png"

const Hero = () => {
  return (
    <>
      <div className="h-[60vh] bg-no-repeat bg-cover container mx-auto" style={{
        backgroundImage:`url(${Herobanner})`
      }}>
        <div className="w-50 h-30 lg:w-[970px] lg:h-[417px] p-14 mx-auto">
            <div className="img-box">
                <img src={banner} alt="" className="w-[250px] h-[200px] mx-auto" />
            </div>
            <div className="content-are"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
