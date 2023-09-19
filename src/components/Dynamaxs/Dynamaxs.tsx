import React from "react";
import CardSm from "../Card/CardSm";
import img1 from "../../assets/images/dynamaxs/1.jpg";
import img2 from "../../assets/images/dynamaxs/2.jpg";
import img3 from "../../assets/images/dynamaxs/3.jpg";
import img4 from "../../assets/images/dynamaxs/4.jpg";
import Link from "next/link";

export default function Dynamaxs() {
  return (
    <div className="py-10 flex flex-col items-center bg-[#e5e7eb]">
      <h2 className="text-center font-sans text-2xl mb-8">
      Our Range{" "}
      </h2>
      <div className="grid grid-cols-4 gap-[2rem] max-w-7xl mx-auto px-10 relative">
        <CardSm dynamaxs={img1} title="18.2 East west -Centre door"/>
        <CardSm dynamaxs={img2} title="19.6 East West/Bunk - Centre door"/>
        <CardSm dynamaxs={img3} title="19.6 Island Couple -Rear door"/>
        <CardSm dynamaxs={img4} title="20.6 Island Couple-Centre door"/>
        <CardSm dynamaxs={img1} title="21.6 Island Couple-Centre door"/>
        <CardSm dynamaxs={img2} title="21.6 Island Bunk /Couple-Centre door"/>
        <CardSm dynamaxs={img3} title="22 Island Bunk /Couple-Centre door"/>
        
      </div>
      <Link
        href="/view-more"
        className="bg-[#b90000] text-[#fff] w-[160px] text-center  text-[1.1rem] mt-[2rem] py-[6px] px-[12px] rounded-[.25rem] hover:opacity-80 transition-opacity duration-300 ease-in-out"
      >
        View More
      </Link>
    </div>
  );
}
