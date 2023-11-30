"use client";

import AnimateItems from "@/components/Gallery/AnimateItems";
import Nav from "@/components/Gallery/Nav";
import Navbar from "@/components/Navbar/Navbar";
import PhotoLarge from "@/photo/PhotoLarge";
import PhotosEmptyState from "@/photo/PhotosEmptyState";
import {
  eastwestURL,
  familytourerURL,
  getImages,
  hillsydeURL,
  offroadURL,
} from "@/service";
import {
  PaginationParams,
  getPaginationForSearchParams,
} from "@/site/pagination";
import { useEffect, useState } from "react";

export const runtime = "edge";

export default function FullFrame({ searchParams }: PaginationParams) {
  const [gallery, setGallery] = useState([]);
  const [name, setname] = useState("");
  const [title, settitle] = useState("");

  useEffect(() => {
    // Parse the gallery from the query parameters when the component mounts
    const queryGallery = window.location.search.split("gallery=")[1];
    console.log("queryGallery", queryGallery);
    const parsedGallery = JSON.parse(decodeURIComponent(queryGallery));
    setname(parsedGallery);

    if (queryGallery) {
      try {
        if (parsedGallery === "EastWestBed") {
          getImages(eastwestURL, setGallery);
          settitle("19.6 East West Bed");
        } else if (parsedGallery === "Hillside") {
          getImages(hillsydeURL, setGallery);
          settitle("19.6 Hillside");
        } else if (parsedGallery === "OffRoadFamilyBunk") {
          getImages(offroadURL, setGallery);
          settitle("18.6 Off Road Family Bunk");
        } else if (parsedGallery === "DynamaxFamilyTourer") {
          getImages(familytourerURL, setGallery);
          settitle("Dynamax Family Tourer");
        } else {
          console.log("please pass valid range");
        }
      } catch (error) {
        console.error("Error parsing gallery:", error);
        setGallery([]); // Set gallery to an empty array in case of error
      }
    } else {
      setGallery([]); // Set gallery to an empty array if no gallery is provided
    }
  }, []);

  if (gallery.length === 0) {
    return <PhotosEmptyState />;
  }

  console.log("gallery", gallery);

  const { offset, limit } = getPaginationForSearchParams(searchParams, 12);

  return (
    <>
      <Navbar />
      <div className="space-y-4 p-5 pt-20 lg:p-20">
        <h2 className="text-[30px] lg:text-[40px] text-black  font-semibold leading-10 lg:px-[0px] pt-8">
          {title}
        </h2>
        <div className="mt-2 h-[8px] w-[120px] bg-[#97BF04] mb-6"></div>
        <Nav gallery={name} />
        <AnimateItems
          className="space-y-1 flex flex-col items-center"
          duration={0.7}
          staggerDelay={0.15}
          distanceOffset={0}
          staggerOnFirstLoadOnly
          items={gallery.map((photo: any, index: number) => (
            <PhotoLarge key={index} photo={photo} priority={index <= 1} />
          ))}
        />
      </div>
    </>
  );
}
