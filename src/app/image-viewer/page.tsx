"use client";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";

export default function ImageViewer() {
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    // Extract the 'src' query parameter from the URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const { src } = params;

    // Set the selected photo URL to the state
    if (src) {
      console.log("Selected Photo URL:", decodeURIComponent(src));
      setSelectedPhoto(decodeURIComponent(src));
    }
  }, []); 

  const handleCloseClick = () => {
    // navigate back to the previous page
    window.history.back();
  };

  if (!selectedPhoto) {
    return <div>Loading...</div>;
  }

  return (
    <><Navbar /><div className="lg:w-full h-[100vh] flex justify-center items-center">
      {/* Close button */}
      <button
        onClick={handleCloseClick}
        className="absolute top-20 right-4 bg-rgb(255 255 255 / 0.5)  px-4 py-2 rounded-full"
      >
        {/* <Close/> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72 72"
          width="64px"
          height="64px"
          fill="black"
        >
          <path d="M36,12c13.255,0,24,10.745,24,24c0,13.255-10.745,24-24,24S12,49.255,12,36C12,22.745,22.745,12,36,12z M40.243,44.485	c1.171,1.171,3.071,1.172,4.243,0c1.172-1.172,1.171-3.071,0-4.243C44.253,40.01,42.063,37.82,40.243,36	c1.82-1.82,4.01-4.01,4.243-4.243c1.171-1.171,1.172-3.071,0-4.243c-1.171-1.171-3.071-1.171-4.243,0	C40.01,27.747,37.82,29.937,36,31.757c-1.82-1.82-4.01-4.01-4.243-4.243c-1.171-1.171-3.071-1.172-4.243,0	c-1.172,1.172-1.171,3.071,0,4.243c0.232,0.232,2.423,2.423,4.243,4.243c-1.82,1.82-4.01,4.01-4.243,4.243	c-1.171,1.171-1.171,3.071,0,4.243c1.172,1.172,3.071,1.171,4.243,0c0.232-0.232,2.423-2.423,4.243-4.243	C37.82,42.063,40.01,44.253,40.243,44.485z" />
        </svg>
      </button>
      {/* Display the selected photo */}
      <img
        src={selectedPhoto}
        alt="selected photo"
        className="object-contain lg:object-cover w-[auto] h-[100vh]" />
    </div></>
  );
}
