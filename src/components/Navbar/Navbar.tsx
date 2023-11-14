"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo1 from "../../../assets/logo/logo-2.jpg";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md w-full z-50">
      <div className=" flex items-center justify-between h-20 md:px-[40px] px-[16px]">
        <div className="">
          <div className="text-3xl font-bold text-accent text-[#b90000] h-16 w-[170px]">
            <a href="/">
              <Image
                src={logo1}
                alt="comment"
                className="w-full h-full object-cover"
                height={500}
                width={500}
              />
            </a>
          </div>
        </div>
        <div className="">
          <div className="hidden lg:block">
            <ul className=" lg:flex space-x-4">
              {/* <li className="link relative group">
              <Link href="#about-us">
                <a className="block text-black py-2 px-4 text-base font-medium capitalize transition-colors hover:border-b-[3px] border-red-500">
                  about us
                </a>
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </li> */}
              <li className="link relative group">
                <Link href="/#about-us">
                  <span className="block text-black py-2 px-4 text-base font-medium transition-colors hover:border-b-[3px] border-red-500">
                    ABOUT US
                  </span>
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </li>

              <li className="link relative group">
                <a
                  href="/#our-range"
                  className="block text-black py-2 px-4 text-base font-medium transition-colors hover:border-b-[3px] border-red-500"
                >
                  OUR RANGE
                </a>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </li>
              <li className="link relative group">
                <a
                  href="/#warrenty"
                  className="block text-black py-2 px-4 text-base font-medium transition-colors hover:border-b-[3px] border-red-500"
                >
                  WARRENTY
                </a>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </li>
              <li className="link relative group">
                <a
                  href="/#premium-craftsmanship"
                  className="block text-black py-2 px-4 text-base font-medium transition-colors hover:border-b-[3px] border-red-500"
                >
                  PREMIUM CRAFTSMANSHIP
                </a>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </li>
              <li className="link relative group">
                <a
                  href="/#contact-us"
                  className="block text-black py-2 px-4 text-base font-medium transition-colors hover:border-b-[3px] border-red-500"
                >
                  CONTACT US
                </a>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </li>
            </ul>
          </div>

          <div className="lg:hidden flex items-center">
            <button className="btn" onClick={toggleMobileNav}>
              {mobileNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-6 h-6 text-[#b90000]"
                >
                  <path
                    d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 text-[#b90000]"
                >
                  <path
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* <div className="">
          <div className="hidden lg:block flex items-center space-x-4">
            <a
              href="#"
              className="text-accent text-lg font-medium text-[#b90000]"
            >
              Login
            </a>

            <a href="#" className="btn btn-outline">
              <span className="text-lg font-medium text-[#b90000] border-2 border-[#b90000] rounded-full px-6 py-1.5 hover:bg-[#b90000] hover:text-white">
                Register
              </span>
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button className="btn" onClick={toggleMobileNav}>
              {mobileNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-6 h-6 text-[#b90000]"
                >
                  <path
                    d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 text-[#b90000]"
                >
                  <path
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </button>
          </div>
        </div> */}

        <div
          className={`lg:hidden fixed top-[80px] bottom-0 left-0 w-[80vw] max-w-[360px] bg-gray-400 bg-opacity-70 backdrop-blur-md p-8 flex flex-col justify-between transform transition-transform duration-350 ease-in-out ${
            mobileNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-2 justify-start">
            <a
              href="/#about-us"
              className="block py-[0.8rem] font-medium text-lg link hover:text-accent hover:text-[#b90000]"
              onClick={() => {
                setMobileNav(false);
              }}
            >
              ABOUT US
            </a>
            <a
              href="/#our-range"
              className="block py-2 font-medium text-lg link hover:text-accent hover:text-[#b90000]"
              onClick={() => {
                setMobileNav(false);
              }}
            >
              OUR RANGE
            </a>
            <a
              href="/#warrenty"
              className="block py-2 font-medium text-lg link hover:text-accent hover:text-[#b90000]"
              onClick={() => {
                setMobileNav(false);
              }}
            >
              WARRENTY
            </a>
            <a
              href="/#premium-craftsmanship"
              className="block py-2 font-medium text-lg link hover:text-accent hover:text-[#b90000]"
            >
              PREMIUM CRAFTSMANSHIP
            </a>
            <a
              href="/#contact-us"
              className="block py-2 font-medium text-lg link hover:text-accent hover:text-[#b90000]"
              onClick={() => {
                setMobileNav(false);
              }}
            >
              CONTACT US
            </a>
          </ul>
          {/* <div className="flex items-center gap-4 justify-start">
              <a
                href="#"
                className="text-accent text-lg font-medium text-[#b90000]"
              >
                Login
              </a>
              <button className="px-4 py-2 text-lg text-[#b90000] border-2 border-[#b90000] rounded-full font-semibold border-2 border-accent rounded-full text-accent hover:bg-[#b90000] hover:text-white">
                Register
              </button>
            </div> */}
        </div>
      </div>
    </div>
  );
}
