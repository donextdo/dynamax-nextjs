import Image from "next/image";
import React from "react";
import img1 from "../../../assets/image_1.jpg"



const CraftsmanshipRight = ({ image, changeOrder }: any) => {
  return (
    <section className="post grid grid-cols-1 md:grid-cols-5">
      <div
        className={`md:col-span-3 h-[70vh] ${
          changeOrder ? "order-2" : ""
        } md:order-1 md:flex items-center`}
      >
         <Image
          src={img1}
          alt=""
          className="bg-red-500 w-full h-full object-cover"
          height={500}
          width={500}
        />
      </div>
      <div className="flex-1 p-12 flex flex-col justify-center gap-8 text-center md:text-left md:col-span-2">
        <div className="text-[35px] font-antic-didone text-2.2xl font-semibold leading-6">
          Premium Craftsmanship
        </div>
        <p className="text-1.1rem max-w-50ch max-w-screen-ch font-barlow text-black tracking-0.5px">
        Dynamax RV Caravans pride themselves in providing the highest quality workmanship, they have a skilled workforce with many years of caravan manufacturing experience between them. Incorporating a flow through process each caravan is assembled piece by piece to maintain their process of rigid quality control. With their two Directors leading in front all forward planning caravan craftsmanship is demonstrated in every caravan that leaves the production floor. At the end of every stage of the production line quality control procedures are in place to ensure the customer has peace of mind. This maintains a consistency in their product range as well as ensuring every component of the caravan is faultlessly installed.
        </p>
        <div className="text-center">
          <button className="btn btn-fill bg-red-700 text-white w-40 text-lg transition-opacity duration-300 ease-in-out cursor-pointer leading-10 rounded-md">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipRight;
