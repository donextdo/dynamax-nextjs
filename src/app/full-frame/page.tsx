"use client";

import AnimateItems from "@/components/Gallery/AnimateItems";
import Nav from "@/components/Gallery/Nav";
import Navbar from "@/components/Navbar/Navbar";
import PhotoLarge from "@/photo/PhotoLarge";
import PhotosEmptyState from "@/photo/PhotosEmptyState";
import {
  PaginationParams,
  getPaginationForSearchParams,
} from "@/site/pagination";
import { useEffect, useState } from "react";

export const runtime = "edge";

export default function FullFrame({ searchParams }: PaginationParams) {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Parse the gallery from the query parameters when the component mounts
    const queryGallery = window.location.search.split("gallery=")[1];
    if (queryGallery) {
      try {
        const parsedGallery = JSON.parse(decodeURIComponent(queryGallery));
        setGallery(parsedGallery);
      } catch (error) {
        console.error("Error parsing gallery:", error);
      }
    }
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  if (gallery.length === 0) {
    return <PhotosEmptyState />;
  }

  console.log("gallery", gallery);

  const { offset, limit } = getPaginationForSearchParams(searchParams, 12);

  return (
    <>
      <Navbar />
      <div className="space-y-4 p-20">
        <Nav gallery={gallery} />
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
