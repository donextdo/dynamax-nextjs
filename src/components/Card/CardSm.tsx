import Image from "next/image";
import React from "react";

export default function CardSm({ dynamaxs }: any) {
  return (
    <div className="w-[240px] h-[280px] overflow-hidden rounded-[.5rem] relative ">
      <Image
        src={dynamaxs}
        alt="Hero Image"
        className="object-cover w-full h-full bg-yellow-500"
        height={500}
        width={500}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-30">
      <h3 className="text-[#fff] text-[1.2rem] font-[600] absolute bottom-[1rem] left-1/2 transform -translate-x-1/2 text-center ">
        Dynamic Side Club
      </h3>
      </div>
    </div>
  );
}
