import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import img1 from "../../assets/images/hotdeals/1.jpg";
import img2 from "../../assets/images/hotdeals/2.jpg";
import img3 from "../../assets/images/hotdeals/3.jpg";
import hot1 from '../../../assets/viewmore/hot-1.jpg'
import hot2 from '../../../assets/viewmore/hot-2.jpg'
import hot3 from '../../../assets/viewmore/hot-3.jpg'
import hot4 from '../../../assets/viewmore/hot-4.jpg'
import hot5 from '../../../assets/viewmore/hot-5.jpg'
import hot6 from '../../../assets/viewmore/hot-6.jpg'
import Card from "../Card/Card";
import {eastWestBed, 
  // hillsyde, 
  // familytourer
} from "@/photo/Images";

// const hot4Gallery = [img1,img2, img3];
// const hot5Gallery = [hot1, hot2, hot3];
// const hot6Gallery = [img1,img2, img3,hot1, hot2, hot3]

export default function HotDeals() {

  return (
    <section id="our-range" className="scroll-mt-14 py-20 flex flex-col items-center max-w-screen-xl mx-auto px-10 relative">
      <h2 className="text-center text-black font-$ff-headings text-[32px] mb-8">Our Range</h2>
      <div className="grid lg:grid-cols-4 gap-10 w-full md:grid-cols-2 grid-cols-1">
        <Card image={hot5} name="19.6 East West Bed" gallery={eastWestBed}/>
        <Card image={hot4} name="19.6 Hillsyde" gallery={eastWestBed}/>
        <Card image={hot6} name="18.6 Off Road Family Bunk" gallery={eastWestBed}/>
        <Card image={hot6} name="Dynamax Family Tourer" gallery={eastWestBed}/>
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
