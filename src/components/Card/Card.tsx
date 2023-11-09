import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Card({ image, name, gallery }: any) {

  return (
    <Link href={{ pathname: "/grid", query: { gallery: JSON.stringify(gallery) } }} passHref>
    <div className="w-full h-[45vh] flex flex-col overflow-hidden rounded-2xl relative ">
      <Image
        src={image}
        alt="Hero Image"
        className="object-cover w-full h-full "
        height={1000}
        width={1000}
      />
      <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-20 backdrop-blur-md p-4 flex flex-col min-h-[8vh]">
        <div className="flex items-center justify-between">
          <h3 className="text-[1.1rem] font-[700]">{name}</h3>
          {/* <h3 className="text-[1.1rem] font-[700]">$90,400</h3> */}
        </div>
        <div className="flex items-center justify-between">
          {/* <h3 className="text-[1rem] font-[400]">Semi Off Road</h3>
          <h3 className="text-[1rem] font-[400]">$112,000</h3> */}
        </div>
        {/* <Link
          href="/product"
          className="text-[#B90000]  text-[1.1rem] text-center py-[.25rem] px-[1.5rem] rounded-[1.2rem] border-[#b90000] border-solid border-2 hover:bg-[#b90000] hover:text-[#fff]"
        >
          View
        </Link> */}
      </div>
    </div>
    </Link>
  );
}
