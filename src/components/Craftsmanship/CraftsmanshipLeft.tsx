import Image from "next/image";
import React from "react";
import img1 from "../../../assets/viewmore/hot-4.jpg"
import img2 from '../../../assets/range/image-1.jpg'


const CraftsmanshipLeft = ({ image, changeOrder }: any) => {
  return (
    <section id="premium-craftsmanship" className="scroll-mt-14 post grid grid-cols-1 md:grid-cols-5 ">
      <div className={`md:col-span-3 h-[70vh] w-full ${changeOrder ? "order-2" : ""}`}>
        <Image
          src={img1}
          alt=""
          className="bg-red-500 w-full h-full object-cover"
          height={1000}
          width={1000}
        />
      </div>
      <div className="flex-1 p-12 flex flex-col justify-center gap-8 md:col-span-2 text-center md:text-left h-full w-full">
        <div className="text-[35px] text-2.2xl font-semibold leading-10">
          Premium Craftsmanship
        </div>
        <p className="text-1.1rem max-w-50ch max-w-screen-ch font-barlow text-black tracking-0.5px">
        Dynamax RV Caravans take pride in delivering the utmost quality workmanship. With a skilled workforce boasting extensive experience in caravan manufacturing, each caravan is meticulously assembled through a systematic process to uphold rigorous quality control. Under the guidance of the two Directors leading from the front, every stage of caravan craftsmanship is evident in the final product. Rigorous quality control procedures are implemented at the end of each production stage, ensuring customers have peace of mind and maintaining consistency across their product range. This meticulous approach guarantees faultless installation of every component in the caravan.
        </p>
        {/* <div className="">
          <button className="btn btn-fill bg-red-700 text-white w-40 text-lg transition-opacity duration-300 ease-in-out cursor-pointer leading-10 rounded-md">
            Discover More
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CraftsmanshipLeft;
