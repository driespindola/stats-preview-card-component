import React from "react";

const CardMobile = () => {
  return(
    <div className="relative">
        <img src="image-header-mobile.jpg" alt="business" className="rounded block md:hidden"/>
        <div className="absolute top-0 left-0 w-full h-full bg-[#AA5CDB] opacity-50" />
    </div>
  )
}

export default CardMobile