import Image from "next/image";
import Link from "next/link";
import img2 from '../../../assets/range/image-2.jpg'
import img1 from '../../../assets/viewmore/hot-5.jpg'

export default function Hero() {
  return (
    <section className="w-full h-auto md:h-screen bg-center bg-cover mt-20">
      {/* Use next/image component for the background image */}
      <div className="h-auto md:h-screen w-full">
      <Image  src={img1} alt='comment' className='w-full h-full object-cover' height={1500} width={1500}/>
      </div>
      <div className="hidden md:block">
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-opacity-70 backdrop-blur-md p-8 text-white flex flex-col gap-8 after:bg-black after:absolute after:inset-0 after:opacity-30 after:z-[-1] after:mix-blend-multiply after:content-['']">
          <h2 className="text-[32px]">
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
        <div className="transform -translate-y-0  backdrop-blur-md p-8 text-white flex flex-col gap-[1rem] bg-[#4d4d4d] after:absolute after:inset-0 opacity-80 after:z-[-1] after:mix-blend-multiply after:content-[''] items-center justify-center">
          <h2 className="text-[28.8px] text-center">
          Looking for adventure...
          </h2>
          <p className="max-w-[70ch] text-[16px]">
          Dynamax RV, situated in Somerton-Melbourne, is a family-operated enterprise with profound expertise in caravan manufacturing. Our guiding principle, &ldquo;small details make a big difference,&ldquo; underscores our dedication to precise finishing, premium fabrics, and discerning textures. This emphasis on detail is discernible not just in the ultimate design but also in the subsequent customer service. Dynamax RV is committed to providing its customers with an exceptional caravan and user experience.
          </p>
          <p className="max-w-[70ch] text-[16px]">
          The Dynamax Caravan range is customizable to meet your specific needs. Tailor everything from chassis and suspension options for on semi off-road or off-road adventures to layout and available features, making your Dynamax Caravan as unique as you are. With our latest range of caravans, you have the freedom to explore farther than ever before. Whether venturing deep into the bush or traversing the outback, Dynamax will make your journey possible.
          </p>
        </div>
      </div>
    </section>
  );
}
