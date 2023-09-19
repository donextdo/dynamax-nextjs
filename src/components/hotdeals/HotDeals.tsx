import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/images/hotdeals/1.jpg";
import img2 from "../../assets/images/hotdeals/2.jpg";
import img3 from "../../assets/images/hotdeals/3.jpg";
import hot1 from '../../../assets/viewmore/hot-1.jpg'
import hot2 from '../../../assets/viewmore/hot-2.jpg'
import hot3 from '../../../assets/viewmore/hot-3.jpg'
import Card from "../Card/Card";

export default function HotDeals() {
  return (
    <section className="py-10 flex flex-col items-center max-w-screen-xl mx-auto px-10 relative">
      <h2 className="text-center font-$ff-headings text-[32px] mb-8">Hot Deals</h2>
      <div className="grid lg:grid-cols-3 gap-10 w-full md:grid-cols-2 grid-cols-1">
        <Card image={hot1} name="19.6 Rear Door Dynamax Caravan"/>
        <Card image={hot2} name="19.6 East West Bed"/>
        <Card image={hot3} name="Legacy Family Tourer"/>
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
