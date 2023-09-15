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
        Which Dynamax is right for you{" "}
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-[2rem] max-w-7xl mx-auto px-10 relative">
        <CardSm dynamaxs={img1} />
        <CardSm dynamaxs={img2} />
        <CardSm dynamaxs={img3} />
        <CardSm dynamaxs={img4} />
      </div>
      <Link
        href="/products"
        className="bg-[#b90000] text-[#fff] w-[160px] text-center  text-[1.1rem] mt-[2rem] py-[6px] px-[12px] rounded-[.25rem] hover:opacity-80 transition-opacity duration-300 ease-in-out"
      >
        View More
      </Link>
    </div>
  );
}
