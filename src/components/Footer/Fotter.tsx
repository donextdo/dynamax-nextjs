import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

const Fotter = () => {
    return (
        <div className='py-10 bg-[#e5e7eb]'>
            <div className='container mx-auto'>
                {/* <div className='grid gap-[1.5rem] lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 border-b-2 border-gray-600 '>
                    <div className='md:col-span-2 flex flex-col items-start gap-6 w-full px-[15px]'>
                        <div className="text-[30px] text-[#b90000] font-semibold leading-[45px]">
                            <a href="/">
                                <h2>DYNAMAX</h2>
                            </a>
                        </div>

                        <p className='text-[1.1rem] max-w-[40ch]'>
                            Dynamax RV established in year 2022 with wealth of industry experience and targeting to build 2-3 vans per month. We have a capacity to growth for 3 caravan’s per week. We are using very modern accessories, materials from reputed Australian companies to finish our caravans.
                        </p>
                    </div>

                    <div className='w-full px-[15px]'>
                        <h5 className="text-[1.2rem] font-semibold mb-3">Quick Links</h5>

                        <ul className="flex flex-col items-start gap-4">
                            <li className="text-base font-medium capitalize relative">
                                <a href="#hot-deals" className='hover:text-[#b90000]'>hot deals</a>
                            </li>
                            <li className="text-base font-medium capitalize relative">
                                <a href="#our-range" className='hover:text-[#b90000]'>our range</a>
                            </li>
                            <li className="text-base font-medium capitalize relative">
                                <a href="#warrenty" className='hover:text-[#b90000]'>service</a>
                            </li>
                            <li className="text-base font-medium capitalize relative">
                                <a href="#contact-us" className='hover:text-[#b90000]'>contact us</a>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full px-[15px]'>
                        <h5 className="text-[1.2rem] font-semibold mb-3">Head Office</h5>

                        <div className='flex gap-4 mb-6 '>
                            <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.50001 0.5625C7.22163 0.565188 5.03734 1.47146 3.42628 3.08252C1.81522 4.69358 0.908947 6.87787 0.906259 9.15625C0.90353 11.0181 1.51171 12.8295 2.63751 14.3125C2.63751 14.3125 2.87188 14.6211 2.91017 14.6656L9.50001 22.4375L16.093 14.6617C16.1274 14.6203 16.3625 14.3125 16.3625 14.3125L16.3633 14.3102C17.4885 12.8278 18.0964 11.0173 18.0938 9.15625C18.0911 6.87787 17.1848 4.69358 15.5737 3.08252C13.9627 1.47146 11.7784 0.565188 9.50001 0.5625ZM9.50001 12.2812C8.88194 12.2812 8.27776 12.098 7.76385 11.7546C7.24995 11.4112 6.84941 10.9232 6.61288 10.3521C6.37636 9.78112 6.31448 9.15278 6.43505 8.54659C6.55563 7.9404 6.85326 7.38358 7.2903 6.94654C7.72734 6.5095 8.28416 6.21187 8.89035 6.0913C9.49654 5.97072 10.1249 6.0326 10.6959 6.26913C11.2669 6.50565 11.755 6.90619 12.0984 7.42009C12.4417 7.934 12.625 8.53818 12.625 9.15625C12.624 9.98473 12.2944 10.779 11.7086 11.3648C11.1227 11.9506 10.3285 12.2802 9.50001 12.2812Z" fill="#B90000" />
                            </svg>
                            <p className="text-base font-medium ">
                                5 Burnett Street, <br />
                                Somerton, VIC 3062
                            </p>
                        </div>

                        <div className='flex gap-4 mb-6 items-center'>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.487 14.14L13.422 10.444C13.2299 10.2693 12.9774 10.1762 12.7178 10.1842C12.4583 10.1922 12.212 10.3008 12.031 10.487L9.63804 12.948C9.06204 12.838 7.90404 12.477 6.71204 11.288C5.52004 10.095 5.15904 8.934 5.05204 8.362L7.51104 5.968C7.69745 5.78712 7.80617 5.54082 7.8142 5.2812C7.82223 5.02159 7.72892 4.76904 7.55404 4.57699L3.85904 0.512995C3.68408 0.320352 3.44092 0.203499 3.18119 0.187255C2.92146 0.17101 2.66564 0.256653 2.46804 0.425995L0.298038 2.28699C0.125149 2.46051 0.0219574 2.69145 0.00803782 2.93599C-0.00696218 3.18599 -0.292962 9.108 4.29904 13.702C8.30504 17.707 13.323 18 14.705 18C14.907 18 15.031 17.994 15.064 17.992C15.3086 17.9783 15.5394 17.8747 15.712 17.701L17.572 15.53C17.7421 15.333 17.8283 15.0774 17.8124 14.8177C17.7966 14.558 17.6798 14.3148 17.487 14.14Z"
                                    fill="#B90000"
                                />
                            </svg>
                            <p className="text-base font-medium ">
                                +61 4 1531 0530
                            </p>
                        </div>

                        <div className='flex gap-4 mb-6 items-center'>
                            <svg
                                width="20"
                                height="16"
                                viewBox="0 0 20 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 4.608V12.75C20.0001 13.5801 19.6824 14.3788 19.1123 14.9822C18.5422 15.5856 17.7628 15.948 16.934 15.995L16.75 16H3.25C2.41986 16.0001 1.62117 15.6824 1.01777 15.1123C0.414367 14.5422 0.0519987 13.7628 0.00500011 12.934L0 12.75V4.608L9.652 9.664C9.75938 9.72024 9.87879 9.74962 10 9.74962C10.1212 9.74962 10.2406 9.72024 10.348 9.664L20 4.608ZM3.25 2.36051e-08H16.75C17.5556 -9.70147e-05 18.3325 0.298996 18.93 0.839267C19.5276 1.37954 19.9032 2.12248 19.984 2.924L10 8.154L0.016 2.924C0.0935234 2.15431 0.44305 1.43752 1.00175 0.902463C1.56045 0.367409 2.29168 0.049187 3.064 0.00500014L3.25 2.36051e-08H16.75H3.25Z"
                                    fill="#B90000"
                                />
                            </svg>
                            <p className="text-base font-medium ">
                                Info@dynmaxrv.com.au
                            </p>
                        </div>

                    </div>
                </div> */}
                <div className='flex items-center justify-center py-6 border-b-2 border-gray-600'>
                    <div className='grid gap-[1.5rem] sm:gap-0 grid-cols-1 sm:grid-cols-2 '>
                        <div className='w-full px-[15px]'>
                            <h5 className="text-[1.2rem] text-black  font-semibold mb-3 ">Quick Links</h5>

                            <ul className="flex flex-col items-start gap-4">
                                <li className="text-base font-medium capitalize relative">
                                    <a href="#hot-deals" className='text-black hover:text-[#b90000]'>hot deals</a>
                                </li>
                                <li className="text-base font-medium capitalize relative">
                                    <a href="#our-range" className='text-black hover:text-[#b90000]'>our range</a>
                                </li>
                                <li className="text-base font-medium capitalize relative">
                                    <a href="#warrenty" className='text-black hover:text-[#b90000]'>service</a>
                                </li>
                                <li className="text-base font-medium capitalize relative">
                                    <a href="#contact-us" className='text-black hover:text-[#b90000]'>contact us</a>
                                </li>
                            </ul>
                        </div>

                        <div className='w-full px-[15px]'>
                            <h5 className="text-[1.2rem] text-black  font-semibold mb-3">Head Office</h5>

                            <div className='flex gap-4 mb-6 '>
                                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.50001 0.5625C7.22163 0.565188 5.03734 1.47146 3.42628 3.08252C1.81522 4.69358 0.908947 6.87787 0.906259 9.15625C0.90353 11.0181 1.51171 12.8295 2.63751 14.3125C2.63751 14.3125 2.87188 14.6211 2.91017 14.6656L9.50001 22.4375L16.093 14.6617C16.1274 14.6203 16.3625 14.3125 16.3625 14.3125L16.3633 14.3102C17.4885 12.8278 18.0964 11.0173 18.0938 9.15625C18.0911 6.87787 17.1848 4.69358 15.5737 3.08252C13.9627 1.47146 11.7784 0.565188 9.50001 0.5625ZM9.50001 12.2812C8.88194 12.2812 8.27776 12.098 7.76385 11.7546C7.24995 11.4112 6.84941 10.9232 6.61288 10.3521C6.37636 9.78112 6.31448 9.15278 6.43505 8.54659C6.55563 7.9404 6.85326 7.38358 7.2903 6.94654C7.72734 6.5095 8.28416 6.21187 8.89035 6.0913C9.49654 5.97072 10.1249 6.0326 10.6959 6.26913C11.2669 6.50565 11.755 6.90619 12.0984 7.42009C12.4417 7.934 12.625 8.53818 12.625 9.15625C12.624 9.98473 12.2944 10.779 11.7086 11.3648C11.1227 11.9506 10.3285 12.2802 9.50001 12.2812Z" fill="#B90000" />
                                </svg>
                                <p className="text-base text-black  font-medium ">
                                    5 Burnett Street, <br />
                                    Somerton, VIC 3062
                                </p>
                            </div>

                            <div className='flex gap-4 mb-6 items-center'>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.487 14.14L13.422 10.444C13.2299 10.2693 12.9774 10.1762 12.7178 10.1842C12.4583 10.1922 12.212 10.3008 12.031 10.487L9.63804 12.948C9.06204 12.838 7.90404 12.477 6.71204 11.288C5.52004 10.095 5.15904 8.934 5.05204 8.362L7.51104 5.968C7.69745 5.78712 7.80617 5.54082 7.8142 5.2812C7.82223 5.02159 7.72892 4.76904 7.55404 4.57699L3.85904 0.512995C3.68408 0.320352 3.44092 0.203499 3.18119 0.187255C2.92146 0.17101 2.66564 0.256653 2.46804 0.425995L0.298038 2.28699C0.125149 2.46051 0.0219574 2.69145 0.00803782 2.93599C-0.00696218 3.18599 -0.292962 9.108 4.29904 13.702C8.30504 17.707 13.323 18 14.705 18C14.907 18 15.031 17.994 15.064 17.992C15.3086 17.9783 15.5394 17.8747 15.712 17.701L17.572 15.53C17.7421 15.333 17.8283 15.0774 17.8124 14.8177C17.7966 14.558 17.6798 14.3148 17.487 14.14Z"
                                        fill="#B90000"
                                    />
                                </svg>
                                <p className="text-base text-black font-medium ">
                                    +61 4 1531 0530
                                </p>
                            </div>

                            <div className='flex gap-4 mb-6 items-center'>
                                <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 4.608V12.75C20.0001 13.5801 19.6824 14.3788 19.1123 14.9822C18.5422 15.5856 17.7628 15.948 16.934 15.995L16.75 16H3.25C2.41986 16.0001 1.62117 15.6824 1.01777 15.1123C0.414367 14.5422 0.0519987 13.7628 0.00500011 12.934L0 12.75V4.608L9.652 9.664C9.75938 9.72024 9.87879 9.74962 10 9.74962C10.1212 9.74962 10.2406 9.72024 10.348 9.664L20 4.608ZM3.25 2.36051e-08H16.75C17.5556 -9.70147e-05 18.3325 0.298996 18.93 0.839267C19.5276 1.37954 19.9032 2.12248 19.984 2.924L10 8.154L0.016 2.924C0.0935234 2.15431 0.44305 1.43752 1.00175 0.902463C1.56045 0.367409 2.29168 0.049187 3.064 0.00500014L3.25 2.36051e-08H16.75H3.25Z"
                                        fill="#B90000"
                                    />
                                </svg>
                                <p className="text-base text-black font-medium ">
                                    Info@dynmaxrv.com.au
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='text-center mt-4'>
                    <p className="text-base text-black  font-semibold tracking-wide">Copyrights &copy; 2023 All Rights Reserved</p>
                    {/* <div className="flex flex-row gap-2">
                            <Link href="https://www.facebook.com">
                                <button className="border rounded-full p-2 text-[#233a95] bg-white ">
                                    <GrFacebookOption />
                                </button>
                            </Link>
                            <Link href="https://www.twitter.com">
                                <button className="border rounded-full p-2 text-[#233a95] bg-white">
                                    <AiOutlineTwitter />
                                </button>
                            </Link>
                            <Link href="https://www.instagram.com">
                                <button className="border rounded-full p-2 text-[#233a95] bg-white">
                                    <AiOutlineInstagram />
                                </button>
                            </Link>
                    </div> */}

                </div>

            </div>

        </div>
    )
}

export default Fotter
