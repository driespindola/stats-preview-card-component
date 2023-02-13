import React from "react";

const CardContent = () => {
  return(
    <div className="pt-[39px] pl-[34px] pb-[23px] md:pt-[70px] md:pl-[88px] md:pb-[57px]">
      <h1 className="mr-[34px] md:mr-[112px] font-inter font-bold text-[28px] md:text-[36px] text-white text-center md:text-left leading-[31.79px] md:leading-[44px]">
        Get <span className="text-[#AA5CDB]">insights</span> that help your business grow.
      </h1>
      <p className="mr-[34px] md:mr-[143px] mt-[25px] font-lexend text-white text-[15px] text-center md:text-left leading-[166%] md:leading-[166.5%] tracking-[-0.015em] opacity-75">
        Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
      </p>
      <div className="mt-[28px] md:mt-[70px] mr-[28px] flex flex-col md:flex-row text-center md:text-left">
        <div className="flex flex-col mr-0 md:mr-[60px]">
          <h2 className="font-inter font-bold text-[24px] text-white">10k+</h2>
          <p className="font-lexend text-white opacity-60 uppercase">companies</p>
        </div>
        <div className="flex flex-col mt-[19px] mr-0 md:mr-[60px] md:mt-0">
          <h2 className="font-inter font-bold text-[24px] text-white">314</h2>
          <p className="font-lexend text-white opacity-60 uppercase">templates</p>
        </div>
        <div className="flex flex-col mt-[20px] md:mt-0">
          <h2 className="font-inter font-bold text-[24px] text-white">12m+</h2>
          <p className="font-lexend text-white opacity-60 uppercase">queries</p>
        </div>
      </div>
    </div>
  )
}

export default CardContent