"use client";
import hot1 from "../../../assets/viewmore/hot-7.jpg";
import hot4 from "../../../assets/viewmore/hot-1.jpg";
import hot5 from "../../../assets/viewmore/hot-8.jpg";
import hot6 from "../../../assets/viewmore/hot-9.png";
import Card from "../Card/Card";
import React from "react";

export default function HotDeals() {

  return (
    <section
      id="our-range"
      className="scroll-mt-14 py-20 flex flex-col items-start max-w-screen-3xl mx-auto px-[30px] lg:px-[55px] relative"
    >
      <h1 className="text-[40px] lg:text-[52px] text-black  font-semibold leading-10 px-[30px] lg:px-[0px]">
        Our Range
      </h1>
      <div className="mx-[30px] lg:mx-[0px] mt-2 h-[8px] w-[100px] bg-[#97BF04]"></div>
      <div className="grid 2xl:grid-cols-4 gap-14 w-full md:grid-cols-2 grid-cols-1 lg:px-20">
        <Card 
          image={hot5} 
          name="19.6 East West Bed" 
          gallery="EastWestBed" 
        />
        <Card 
          image={hot4} 
          name="19.6 Hillside" 
          gallery="Hillside" 
        />
        <Card
          image={hot6}
          name="18.6 Off Road Family Bunk"
          gallery="OffRoadFamilyBunk"
        />
        <Card
          image={hot1}
          name="Dynamax Family Tourer"
          gallery="DynamaxFamilyTourer"
        />
      </div>
    </section>
  );
}
