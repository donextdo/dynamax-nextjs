import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img1 from '../../../assets/hero2.jpg'
import Card from '@/components/Card/Card'
import img4 from "../../../assets/viewmore/img-1.jpg";
import img2 from "../../../assets/viewmore/img-2.jpg";
import img3 from "../../../assets/viewmore/img-3.jpg";
import Navbar from '@/components/Navbar/Navbar'
import Fotter from '@/components/Footer/Fotter'

const ViewMorePage = () => {
    return (
        <div>
            <Navbar />
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
                        <h2 className="font-sans text-[32px]">
                            Hot deals to your door step...
                        </h2>
                        <p className="md:max-w-[55ch] lg:max-w-[70ch] text-[1.1rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>


                    </div>
                </div>

                <div className="md:hidden">
                    <div className="absolute bottom-0 right-0 left-0 transform -translate-y-0 bg-opacity-70 backdrop-blur-md p-8 text-white flex flex-col gap-[1rem] after:bg-black after:absolute after:inset-0 after:opacity-30 after:z-[-1] after:mix-blend-multiply after:content-[''] items-center justify-center">
                        <h2 className="font-sans text-[2.2rem] text-center">
                            Hot deals to your door step...
                        </h2>
                        <p className="max-w-[70ch] text-[1.1rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>

                    </div>
                </div>
            </section>

            <div className="relative w-[80vw ] max-w-[25rem] my-8 mx-auto border">
                <div className="absolute left-[.5rem] top-[.5rem] bottom-[.5rem]">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3177 20.9938L25.9795 24.6538C26.1503 24.8306 26.2448 25.0674 26.2427 25.3132C26.2405 25.559 26.1419 25.7942 25.9681 25.968C25.7943 26.1418 25.5592 26.2404 25.3133 26.2425C25.0675 26.2447 24.8307 26.1502 24.6539 25.9794L20.992 22.3175C18.5991 24.3677 15.505 25.4114 12.3592 25.2296C9.21331 25.0477 6.26015 23.6545 4.11937 21.3422C1.97859 19.0299 0.816614 15.9784 0.87726 12.8278C0.937905 9.67729 2.21646 6.67269 4.44464 4.44452C6.67282 2.21634 9.67741 0.937783 12.8279 0.877138C15.9785 0.816492 19.0301 1.97847 21.3423 4.11925C23.6546 6.26003 25.0478 9.21319 25.2297 12.3591C25.4115 15.5049 24.3679 18.599 22.3177 20.9919V20.9938ZM13.0627 23.375C15.7977 23.375 18.4207 22.2885 20.3547 20.3546C22.2887 18.4206 23.3752 15.7976 23.3752 13.0625C23.3752 10.3275 22.2887 7.70446 20.3547 5.77049C18.4207 3.83652 15.7977 2.75003 13.0627 2.75003C10.3276 2.75003 7.70458 3.83652 5.77061 5.77049C3.83664 7.70446 2.75015 10.3275 2.75015 13.0625C2.75015 15.7976 3.83664 18.4206 5.77061 20.3546C7.70458 22.2885 10.3276 23.375 13.0627 23.375Z" fill="#6B6969" />
                    </svg>
                </div>

                <button className="absolute top-[.5rem] bottom-[.5rem] right-[.5rem]">
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 12.6875C8.25 12.4389 8.34877 12.2004 8.52459 12.0246C8.7004 11.8488 8.93886 11.75 9.1875 11.75H14.8125C15.0611 11.75 15.2996 11.8488 15.4754 12.0246C15.6512 12.2004 15.75 12.4389 15.75 12.6875C15.75 12.9361 15.6512 13.1746 15.4754 13.3504C15.2996 13.5262 15.0611 13.625 14.8125 13.625H9.1875C8.93886 13.625 8.7004 13.5262 8.52459 13.3504C8.34877 13.1746 8.25 12.9361 8.25 12.6875ZM4.5 7.0625C4.5 6.81386 4.59877 6.5754 4.77459 6.39959C4.9504 6.22377 5.18886 6.125 5.4375 6.125H18.5625C18.8111 6.125 19.0496 6.22377 19.2254 6.39959C19.4012 6.5754 19.5 6.81386 19.5 7.0625C19.5 7.31114 19.4012 7.5496 19.2254 7.72541C19.0496 7.90123 18.8111 8 18.5625 8H5.4375C5.18886 8 4.9504 7.90123 4.77459 7.72541C4.59877 7.5496 4.5 7.31114 4.5 7.0625ZM0.75 1.4375C0.75 1.18886 0.848772 0.950403 1.02459 0.774588C1.2004 0.598772 1.43886 0.5 1.6875 0.5H22.3125C22.5611 0.5 22.7996 0.598772 22.9754 0.774588C23.1512 0.950403 23.25 1.18886 23.25 1.4375C23.25 1.68614 23.1512 1.9246 22.9754 2.10041C22.7996 2.27623 22.5611 2.375 22.3125 2.375H1.6875C1.43886 2.375 1.2004 2.27623 1.02459 2.10041C0.848772 1.9246 0.75 1.68614 0.75 1.4375Z" fill="#6B6969" />
                    </svg>

                </button>

                <input type="text" className="pl-[3rem] py-2 bg-[#EDEDED] focus:outline-none focus:border-gray-300 focus:shadow-none w-full rounded" placeholder="Search" />
            </div>

            <section className="container mx-auto px-2 mt-[2rem] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[2rem] mb-10">
                <Card image={img4} />
                <Card image={img2} />
                <Card image={img3} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
                <Card image={img4} />
            </section>
            <Fotter />
        </div>
    )
}

export default ViewMorePage
