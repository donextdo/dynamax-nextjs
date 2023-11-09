'use client';
import SiteGrid from '@/components/Gallery/SiteGrid';
import PhotoGrid from '@/photo/PhotoGrid';
import PhotosEmptyState from '@/photo/PhotosEmptyState';
import {
  PaginationParams,
  getPaginationForSearchParams,
} from '@/site/pagination';
import Nav from '@/components/Gallery/Nav';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';

export const runtime = 'edge';

export default function GridPage({ searchParams }: PaginationParams) {
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
        setGallery([]); // Set gallery to an empty array in case of error
      }
    } else {
      setGallery([]); // Set gallery to an empty array if no gallery is provided
    }
  }, []); 

  if (gallery.length === 0) {
    return <PhotosEmptyState />;
  }

  console.log("gallery",gallery);
  const { offset, limit } = getPaginationForSearchParams(searchParams);

  return (
    <>
    <Navbar />
    <div className="p-5 pt-20 lg:p-20">
      <Nav gallery={gallery}/>
      <SiteGrid
        contentMain={<PhotoGrid gallery={gallery} />}
        sideHiddenOnMobile />

    </div></>
  );
}
