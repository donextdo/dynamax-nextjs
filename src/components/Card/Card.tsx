import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Card({ image, name, gallery }: any) {
  return (
    <div className="w-full h-[40vh] flex flex-col overflow-hidden rounded-2xl relative">
      <Link
        href={{
          pathname: "/grid",
          query: { gallery: JSON.stringify(gallery) },
        }}
        passHref
      >
        <Image
          src={image}
          alt="Hero Image"
          fill
          className="object-cover w-full h-full "
        />
      </Link>
      <div className="absolute bottom-4 left-4 rounded-2xl  bg-white bg-opacity-70 backdrop-blur-md p-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-[1.5rem] text-black font-[700]">{name}</h3>
        </div>
        <div className="flex items-center justify-between"></div>
      </div>

      {/* <Link
        href="/#contact-us"
        className="absolute top-4 left-4 rounded-2xl  bg-white bg-opacity-70 backdrop-blur-md p-2"
      >
        <div className="flex items-center justify-between">
          <h5 className="text-[0.8rem] text-black font-[700]">LEARN DETAILS</h5>
        </div>
      </Link> */}
    </div>
  );
}
