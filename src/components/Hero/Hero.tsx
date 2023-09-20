import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/images/hero/1.jpg";
import img2 from '../../../assets/range/image-1.jpg'

export default function Hero() {
  return (
    <section className="h-screen bg-center bg-cover">
      {/* Use next/image component for the background image */}
      <Image
        src={img2}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="hidden md:block">
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-opacity-70 backdrop-blur-md p-8 text-white flex flex-col gap-8 after:bg-black after:absolute after:inset-0 after:opacity-30 after:z-[-1] after:mix-blend-multiply after:content-['']">
          <h2 className="font-sans text-[32px]">
            Looking for adventure...
          </h2>
          <p className="md:max-w-[55ch] lg:max-w-[70ch] text-[1.1rem]">
            Dynamax RV established in year 2022 with wealth of industry experience and targeting to build 2-3 vans per month. We have a capacity to growth for 3 caravan’s per week. We have professional dynamic workmanship with comprehensive warranty coverage. We are using very modern accessories, materials from reputed Australian companies to finish our caravans. Dynamax RV Caravans to offer range of caravans that are built in Australia and offer great value for money with many inclusions offered as standard.
          </p>
          <p className="md:max-w-[55ch] lg:max-w-[70ch] text-[1.1rem]">
            The Dynamax RV Caravan range can be tailored to suit your requirements. From chassis and suspension options to suit on semi off road or off-road adventures through to layout and options available, make your Dynamax RV Caravan as individual as you. Dynamax RV caravan latest range of caravans give you the freedom to go further than ever before. Whether you are heading to deep into the bush or across the outback, Dynamax RV will make it happen.
          </p>
          {/* <Link
            href="/view-more"
            className="bg-[#b90000] text-[#fff] text-center w-[160px]  text-[1.1rem] py-[6px] px-[12px] rounded-[.25rem] hover:opacity-80 transition-opacity duration-300 ease-in-out"
          >
            Discover More
          </Link> */}
        </div>
      </div>

      <div className="md:hidden">
        <div className="absolute bottom-0 right-0 left-0 transform -translate-y-0 bg-opacity-70 backdrop-blur-md p-8 text-white flex flex-col gap-[1rem] after:bg-black after:absolute after:inset-0 after:opacity-30 after:z-[-1] after:mix-blend-multiply after:content-[''] items-center justify-center">
          <h2 className="font-sans text-[2.2rem] text-center">
          Looking for adventure...
          </h2>
          <p className="max-w-[70ch] text-[1.1rem]">
            Dynamax RV established in year 2022 with wealth of industry experience and targeting to build 2-3 vans per month. We have a capacity to growth for 3 caravan’s per week. We have professional dynamic workmanship with comprehensive warranty coverage. We are using very modern accessories, materials from reputed Australian companies to finish our caravans. Dynamax RV Caravans to offer range of caravans that are built in Australia and offer great value for money with many inclusions offered as standard.
          </p>
          <p className="max-w-[70ch] text-[1.1rem]">
            The Dynamax RV Caravan range can be tailored to suit your requirements. From chassis and suspension options to suit on semi off road or off-road adventures through to layout and options available, make your Dynamax RV Caravan as individual as you. Dynamax RV caravan latest range of caravans give you the freedom to go further than ever before. Whether you are heading to deep into the bush or across the outback, Dynamax RV will make it happen.
          </p>
          {/* <Link
            href="/view-more"
            className="bg-[#b90000] text-[#fff] text-center w-[160px]  text-[1.1rem] py-[6px] px-[12px] rounded-[.25rem] hover:opacity-80 transition-opacity duration-300 ease-in-out"
          >
            Discover More
          </Link> */}
        </div>
      </div>
    </section>
  );
}
