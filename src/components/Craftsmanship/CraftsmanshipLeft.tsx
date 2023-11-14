import Image from "next/image";
import React from "react";
import img1 from "../../../assets/viewmore/hot-4.jpg";

const CraftsmanshipLeft = ({changeOrder }: any) => {
  return (
    <section
      id="premium-craftsmanship"
      className="scroll-mt-14 post grid grid-cols-1 lg:px-[55px]"
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h1 className="text-[52px] text-black  font-semibold leading-10">
            Premium Craftsmanship
          </h1>
        </div>

        <div className="flex-1 p-12 px-20 flex flex-row justify-center md:col-span-2 text-center md:text-left h-full w-full">
          <div
            className={`md:col-span-3 h-[40vh] w-full rounded-2xl ${
              changeOrder ? "order-2" : ""
            }`}
          >
            <Image
              src={img1}
              alt=""
              className="rounded-2xl"
              height={1000}
              width={1250}
            />
          </div>
          <div className="flex mt-5 justify-center max-w-50ch max-w-screen-ch">
            <p className="text-[1.0rem] text-justify w-[80%]  font-barlow text-black tracking-0.5px">
              Dynamax RV Caravans take pride in delivering the utmost quality
              workmanship. With a skilled workforce boasting extensive
              experience in caravan manufacturing, each caravan is meticulously
              assembled through a systematic process to uphold rigorous quality
              control. Under the guidance of the two Directors leading from the
              front, every stage of caravan craftsmanship is evident in the
              final product. Rigorous quality control procedures are implemented
              at the end of each production stage, ensuring customers have peace
              of mind and maintaining consistency across their product range.
              This meticulous approach guarantees faultless installation of
              every component in the caravan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipLeft;
