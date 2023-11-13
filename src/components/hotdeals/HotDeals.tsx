'use client';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import img1 from "../../assets/images/hotdeals/1.jpg";
import img2 from "../../assets/images/hotdeals/2.jpg";
import img3 from "../../assets/images/hotdeals/3.jpg";
import hot1 from "../../../assets/viewmore/hot-7.jpg";
import hot2 from "../../../assets/viewmore/hot-2.jpg";
import hot3 from "../../../assets/viewmore/hot-3.jpg";
import hot4 from "../../../assets/viewmore/hot-4.jpg";
import hot5 from "../../../assets/viewmore/hot-5.jpg";
import hot6 from "../../../assets/viewmore/hot-6.jpg";
import Card from "../Card/Card";
import {  hillsyde, familytourer, offroad } from "@/photo/Images";

import React, { useState, useEffect } from "react";
import axios from "axios";



// const hot4Gallery = [img1,img2, img3];
// const hot5Gallery = [hot1, hot2, hot3];
// const hot6Gallery = [img1,img2, img3,hot1, hot2, hot3]

export default function HotDeals() {
  const [images, setImages] = useState([]);

const getImages = async () => {
  try {
    const response = await axios.get(
      "https://dynamax-gallery.s3.ap-southeast-2.amazonaws.com/dynamax-eastwestbed/eastwestbed.json"
    );
    // assuming the response is a JSON array of image URLs
    console.log("response",response);
    
    setImages(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  getImages();
}, []);
  return (
    <section
      id="our-range"
      className="scroll-mt-14 py-20 flex flex-col items-center max-w-screen-3xl mx-auto px-[85px] relative"
    >
      <h2 className="text-center text-black font-$ff-headings text-[32px] mb-8">
        Our Range
      </h2>
      <div className="grid lg:grid-cols-4 gap-3 w-full md:grid-cols-2 grid-cols-1">
        <Card image={hot5} name="19.6 East West Bed" gallery={images} />
        <Card image={hot4} name="19.6 Hillsyde" gallery={hillsyde} />
        <Card image={hot6} name="18.6 Off Road Family Bunk" gallery={offroad} />
        <Card image={hot1} name="Dynamax Family Tourer" gallery={familytourer}/>
      </div>

      {/* <Link
        href="/view-more"
        className="bg-[#b90000] text-[#fff] w-[160px] text-center  text-[1.1rem] mt-[2rem] py-[6px] px-[12px] rounded-[.25rem] hover:opacity-80 transition-opacity duration-300 ease-in-out"
      >
        View More
      </Link> */}
    </section>
  );
}
