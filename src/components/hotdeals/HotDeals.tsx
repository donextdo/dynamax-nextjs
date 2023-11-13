"use client";
import hot1 from "../../../assets/viewmore/hot-7.jpg";
import hot4 from "../../../assets/viewmore/hot-4.jpg";
import hot5 from "../../../assets/viewmore/hot-5.jpg";
import hot6 from "../../../assets/viewmore/hot-6.jpg";
import Card from "../Card/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HotDeals() {
  const [eastwestImages, setEastwestImages] = useState([]);
  const [hillsydeImages, setHillsydeImages] = useState([]);
  const [offroadImages, setOffroadImages] = useState([]);
  const [familytourerImages, setFamilytourerImages] = useState([]);

  const eastwestURL =
    "https://dynamax-gallery.s3.ap-southeast-2.amazonaws.com/dynamax-eastwestbed/eastwestbed.json";
  const hillsydeURL =
    "https://dynamax-gallery.s3.ap-southeast-2.amazonaws.com/dynamax-hillsyde/hillsyde.json";
  const offroadURL =
    "https://dynamax-gallery.s3.ap-southeast-2.amazonaws.com/dynamax-offroad/offroad.json";
  const familytourerURL =
    "https://dynamax-gallery.s3.ap-southeast-2.amazonaws.com/dynamax-familytourer/familytourer.json";

  const getImages = async (
    url: string,
    setter: {
      (value: React.SetStateAction<never[]>): void;
      (value: React.SetStateAction<never[]>): void;
      (arg0: any): void;
    }
  ) => {
    try {
      const response = await axios.get(url);
      // assuming the response is a JSON array of image URLs
      console.log("response", response);

      setter(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImages(eastwestURL, setEastwestImages);
    getImages(hillsydeURL, setHillsydeImages);
    getImages(offroadURL, setOffroadImages);
    getImages(familytourerURL, setFamilytourerImages);
  }, []);
  return (
    <section
      id="our-range"
      className="scroll-mt-14 py-20 flex flex-col items-center max-w-screen-3xl mx-auto px-[30px] lg:px-[55px] relative"
    >
      <h2 className="text-center text-black font-$ff-headings text-[32px] mb-8">
        Our Range
      </h2>
      <div className="grid lg:grid-cols-4 gap-3 w-full md:grid-cols-2 grid-cols-1">
        <Card 
          image={hot5} 
          name="19.6 East West Bed" 
          gallery={eastwestImages} 
        />
        <Card 
          image={hot4} 
          name="19.6 Hillsyde" 
          gallery={hillsydeImages} 
        />
        <Card
          image={hot6}
          name="18.6 Off Road Family Bunk"
          gallery={offroadImages}
        />
        <Card
          image={hot1}
          name="Dynamax Family Tourer"
          gallery={familytourerImages}
        />
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
