import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/images/hero/1.jpg";

export default function Hero() {
  return (
    <section className="h-screen bg-center bg-cover">
      {/* Use next/image component for the background image */}
      <Image
        src={img1}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="hidden md:block">
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-opacity-70 backdrop-blur-md p-8 text-white flex flex-col gap-8 after:bg-black after:absolute after:inset-0 after:opacity-30 after:z-[-1] after:mix-blend-multiply after:content-['']">
          <h2 className="font-sans text-[2.2rem]">
            Looking for adventure <br /> Explore the world...
          </h2>
          <p className="max-w-[50ch] text-[1.1rem]">
            When the going gets rough, you can rely on the luxury adventure
            trailer meticulously engineered to meet every challenge.....
          </p>
          <Link
            href="/products"
            className="bg-[#b90000] text-[#fff] text-center w-[160px]  text-[1.1rem] py-[6px] px-[12px] rounded-[.25rem] hover:opacity-80 transition-opacity duration-300 ease-in-out"
          >
            Discover More
          </Link>
        </div>
      </div>

      <div className="md:hidden">
        <div className="absolute bottom-0 right-0 left-0 transform -translate-y-0 bg-opacity-70 backdrop-blur-md p-8 text-white flex flex-col gap-[1rem] after:bg-black after:absolute after:inset-0 after:opacity-30 after:z-[-1] after:mix-blend-multiply after:content-[''] items-center justify-center">
          <h2 className="font-sans text-[2.2rem] text-center">
            Looking for adventure <br /> Explore the world...
          </h2>
          <p className="max-w-[50ch] text-[1.1rem] text-center">
            When the going gets rough, you can rely on the luxury adventure
            trailer meticulously engineered to meet every challenge.....
          </p>
          <Link
            href="/products"
            className="bg-[#b90000] text-[#fff] text-center w-[160px]  text-[1.1rem] py-[6px] px-[12px] rounded-[.25rem] hover:opacity-80 transition-opacity duration-300 ease-in-out"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
