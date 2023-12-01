"use client";
import SiteGrid from "@/components/Gallery/SiteGrid";
import PhotoGrid from "@/photo/PhotoGrid";
import PhotosEmptyState from "@/photo/PhotosEmptyState";
import {
  PaginationParams,
  getPaginationForSearchParams,
} from "@/site/pagination";
import Nav from "@/components/Gallery/Nav";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { eastwestURL, familytourerURL, getImages, hillsydeURL, offroadURL } from "@/service";

export const runtime = "edge";

export default function GridPage({ searchParams }: PaginationParams) {

  const [gallery, setGallery] = useState([]);
  const [title, settitle] = useState("");
  const [name, setname] = useState("");

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
          settitle("19.6FT East-West Double Bunk - Off-Road");
        } else if (parsedGallery === "Hillside") {
          getImages(hillsydeURL, setGallery);
          settitle("19.6FT Double Bunk On-Road");
        } else if (parsedGallery === "OffRoadFamilyBunk") {
          getImages(offroadURL, setGallery);
          settitle("18.6FT Double Bunk - Off-Road");
        } else if (parsedGallery === "DynamaxFamilyTourer") {
          getImages(familytourerURL, setGallery);
          settitle("Dynamax Family Tourer - 21FT Triple Bunk On-Road");
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

  console.log("gallery", name);
  const { offset, limit } = getPaginationForSearchParams(searchParams);

  return (
    <>
      <Navbar />
      <div className="p-5 pt-20 lg:p-20">
        <h2 className="text-[30px] lg:text-[40px] text-black  font-semibold leading-10 lg:px-[0px] pt-8">{title}</h2>
        <div className="mt-2 h-[8px] w-[120px] bg-[#97BF04] mb-6"></div>
        <Nav gallery={name} />
        <SiteGrid
          className="flex justify-center"
          contentMain={<PhotoGrid gallery={gallery} />}
          sideHiddenOnMobile
        />
      </div>
    </>
  );
}
