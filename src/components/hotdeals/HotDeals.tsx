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

const hot4Gallery = [img1,img2, img3];
const hot5Gallery = [hot1, hot2, hot3];
const hot6Gallery = [img1,img2, img3,hot1, hot2, hot3]

export default function HotDeals() {

  return (
    <section id="our-range" className="scroll-mt-14 py-20 flex flex-col items-center max-w-screen-xl mx-auto px-10 relative">
      <h2 className="text-center font-$ff-headings text-[32px] mb-8">Our Range</h2>
      <div className="grid lg:grid-cols-3 gap-10 w-full md:grid-cols-2 grid-cols-1">
        <Card image={hot4} name="19.6 Rear Door Dynamax Caravan" gallery={hot4Gallery}/>
        <Card image={hot5} name="19.6 East West Bed" gallery={hot5Gallery}/>
        <Card image={hot6} name="Legacy Family Tourer" gallery={hot6Gallery}/>
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
