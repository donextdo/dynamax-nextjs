import Image from "next/image";
import Link from "next/link";
import img2 from '../../../assets/range/image-2.jpg'
import img1 from '../../../assets/viewmore/hot-5.jpg';
import image1 from '../../../assets/viewmore/panorama-view.jpg'

export default function Hero() {
  const Heroimg = 'https://dynamax-gallery.s3.ap-southeast-2.amazonaws.com/dynamax-home/home-1.jpg';
  return (
    <section id="about-us" className="scroll-mt-14 w-full h-auto md:h-screen bg-center bg-cover mt-20">
      {/* Use next/image component for the background image */}
      <div className="h-auto md:h-[100vh] w-full">
      <Image  src={Heroimg} alt='comment' className='w-full h-full object-cover' height={1500} width={1500}/>
      </div>
      <div className="hidden md:block">
        <div className="absolute bottom-[-9rem] right-8 transform -translate-y-1/2 p-8 text-white flex flex-col gap-4  after:absolute after:inset-0  after:z-[-1] after:mix-blend-multiply after:content-['']">
          <h2 className="text-[32px] ">
            ABOUT US
          </h2>
          <p className="md:max-w-[40%] lg:max-w-[40%] text-[1.0rem]">
          Dynamax RV, situated in Somerton-Melbourne, is a family-operated enterprise with profound expertise in caravan manufacturing. Our guiding principle, &ldquo;small details make a big difference,&ldquo; underscores our dedication to precise finishing, premium fabrics, and discerning textures. This emphasis on detail is discernible not just in the ultimate design but also in the subsequent customer service. Dynamax RV is committed to providing its customers with an exceptional caravan and user experience.
          </p>
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
