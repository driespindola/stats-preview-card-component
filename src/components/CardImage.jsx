import React from "react";

const CardImage = () => {
  return(
    <div className="relative">
        <img src="image-header-desktop.jpg" alt="Your Image" className="w-[1000px] h-full rounded hidden md:block"/>
        <div className="absolute top-0 left-0 w-full h-full bg-[#AA5CDB] opacity-50" />
    </div>
  )
}

export default CardImage