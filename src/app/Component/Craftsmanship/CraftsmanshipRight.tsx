import React from "react";
import Image from "../app/assets/image_1.jpg";

const CraftsmanshipRight = ({ image, changeOrder }: any) => {
  return (
    <section className="post grid grid-cols-1 md:grid-cols-5">
      <div
        className={`md:col-span-3 h-[70vh] ${
          changeOrder ? "order-2" : ""
        } md:order-1 md:flex items-center`}
      >
        <img
          src="../app/assets/image_1.jpg"
          alt=""
          className="bg-red-500 w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-12 flex flex-col justify-center gap-8 text-center md:text-left md:col-span-2">
        <div className="text-2xl font-antic-didone text-2.2xl font-semibold leading-6">
          Premium Craftsmanship
        </div>
        <p className="text-1.1rem max-w-50ch max-w-screen-ch font-barlow text-black tracking-0.5px">
          When the going gets rough, you can rely on the luxury adventure
          trailer meticulously engineered to meet every challenge.....
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
