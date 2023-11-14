import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Card({ image, name, gallery }: any) {
 

  const learnmore = () => {
    window.location.href = "/#contact-us";
  };

  return (
    // <Link
    //   href={{ pathname: "/grid", query: { gallery: JSON.stringify(gallery) } }}
    //   passHref
    // >
      <div className="w-full h-[45vh] flex flex-col overflow-hidden rounded-2xl relative ">
        <Link
      href={{ pathname: "/grid", query: { gallery: JSON.stringify(gallery) } }}
      passHref
    >
        <Image
          src={image}
          alt="Hero Image"
          fill
          className="object-cover w-full h-full "
        />
        </Link>
        <div className="absolute bottom-4 left-4 rounded-2xl  bg-white backdrop-blur-md p-3 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-[1.5rem] text-black font-[700]">{name}</h3>
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

        <Link
          href="/#contact-us"
          // onClick={learnmore}
          className="absolute top-4 left-4 rounded-2xl  bg-white bg-opacity-70 backdrop-blur-md p-2"
        >
          <div className="flex items-center justify-between">
            <h5 className="text-[0.8rem] text-black font-[700]">
              LEARN DETAILS
            </h5>
          </div>
        </Link>
      </div>
    // </Link>
  );
}
