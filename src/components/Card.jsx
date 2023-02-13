import React from "react";
import CardContent from "./CardContent";
import CardImage from "./CardImage";
import CardMobile from "./CardMobile";

const Card = () => {
  return(
    <div className="flex flex-col md:flex-row my-[79px] mx-[24px] md:my-[178px] md:ml-[150px] md:mr-[179px] bg-[#1C1938] w-[328px] h-[778px] md:w-[1111px] md:h-[445px] rounded">
      <CardMobile />
      <CardContent />
      <CardImage />
    </div>
  )
}

export default Card