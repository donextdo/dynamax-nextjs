import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import img1 from '../../../assets/hero2.jpg'
import Image from 'next/image'
import Fotter from '@/components/Footer/Fotter'
import footerplan from '../../../assets/floorplan.jpg'
import img2 from '../../../assets/image_3.jpg'
import img4 from '../../../assets/image_4.jpg'
import img5 from '../../../assets/image_5.jpg'
import img6 from '../../../assets/image_6.jpg'




const ProductPage = () => {
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


            <section className="container mx-auto px-2 grid grid-cols-1 lg:grid-cols-5 gap-[2rem] my-20">
                <div className="lg:col-span-3 w-full h-[520px]">
                    <Image src={img2} alt='watiyan' className='w-full h-full object-cover ' height={500} width={500} />
                </div>

                <div className="lg:col-span-2 flex lg:h-[520px] flex-col justify-between gap-[24px] lg-gap-0 text-center lg:text-left ">
                    <div >
                        <h2 className='text-[2.2rem] mb-[2rem]'>Dynamic Side Club</h2>

                        <h4 className='text-[1.5rem] mb-[2rem] text-[#928C8C]'>Semi Off Road</h4>
                        <p className='lg:max-w-[50ch] text-[1.1rem] '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                    </div>

                    <div>
                        <a href="#" className="bg-[#b90000] text-[#fff] text-center w-[160px]  text-[1.1rem] py-[6px] px-[12px] rounded-[.25rem] hover:opacity-80 transition-opacity duration-300 ease-in-out">Contact Dealer</a>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-2  grid grid-cols-1 lg:grid-cols-5 gap-[2rem] mb-20">
                <div className="lg:col-span-3 h-[650px] grid  grid-cols-2 grid-rows-3 gap-[1rem]">
                    <div className="col-span-2 row-span-2 w-full h-full">
                    <Image src={img4} alt='img1' className='w-full h-full object-cover' height={500} width={500} />

                    </div>
                    <div className="w-full h-full">
                    <Image src={img5} alt='img1' className='w-full h-full object-cover' height={500} width={500} />

                    </div>
                    <div className="w-full h-full">
                    <Image src={img6} alt='img1' className='w-full h-full object-cover' height={500} width={500} />
                    </div>

                </div>

                <div className=" lg:col-span-2 flex flex-col h-[650px] justify-between text-center lg:text-left">
                    <h2 className='mb-2 text-[2.2rem]'>Specifications</h2>

                    <div className="flex flex-col gap-[3rem]">
                        <div className="grid grid-cols-3">
                            <div className="flex w-[2rem] h-[2rem]">
                                <svg width="32" height="32" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.75 16.0714C17.1961 16.0714 20 13.0672 20 9.375C20 5.68276 17.1961 2.67857 13.75 2.67857C10.3039 2.67857 7.5 5.68276 7.5 9.375C7.5 13.0672 10.3039 16.0714 13.75 16.0714ZM41.25 5.35714H23.75C23.0594 5.35714 22.5 5.95647 22.5 6.69643V18.75H5V1.33929C5 0.59933 4.44063 0 3.75 0H1.25C0.559375 0 0 0.59933 0 1.33929V30.8036C0 31.5435 0.559375 32.1429 1.25 32.1429H3.75C4.44063 32.1429 5 31.5435 5 30.8036V26.7857H45V30.8036C45 31.5435 45.5594 32.1429 46.25 32.1429H48.75C49.4406 32.1429 50 31.5435 50 30.8036V14.7321C50 9.55413 46.0828 5.35714 41.25 5.35714Z" fill="#B90000" />
                                </svg>
                            </div>

                            <h4 className='text-[1.2rem]'>Beds</h4>

                            <h4 className='text-[1.2rem] text-right'>2</h4>

                        </div>

                        <div className="grid grid-cols-3">
                            <div className="icon">
                                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.3125 26.3438H6.8125V8.76563C6.81069 8.10365 6.9402 7.44788 7.19353 6.83629C7.44687 6.2247 7.819 5.66944 8.28838 5.20264L8.32744 5.16357C9.06305 4.42905 10.0075 3.93954 11.0317 3.76192C12.056 3.5843 13.1101 3.72723 14.0501 4.17119C13.1624 5.64716 12.7934 7.37748 13.0018 9.08719C13.2102 10.7969 13.984 12.3879 15.2003 13.6074L16.2697 14.6769L14.3013 16.6454L16.5108 18.855L18.4793 16.8865L29.3864 5.97959L31.3549 4.01113L29.1452 1.80147L27.1767 3.76992L26.1072 2.70049C24.8268 1.42366 23.139 0.636581 21.3379 0.4764C19.5367 0.316219 17.7365 0.793094 16.2509 1.82393C14.6843 0.834584 12.8278 0.407478 10.9864 0.612771C9.14495 0.818064 7.42811 1.64355 6.11787 2.95361L6.07881 2.99268C5.3183 3.74902 4.71537 4.64869 4.3049 5.63962C3.89443 6.63055 3.68458 7.69305 3.6875 8.76563V26.3438H0.5625V29.4688H3.6875V32.4668C3.68743 32.7187 3.72806 32.969 3.80781 33.2079L6.71484 41.9286C6.86998 42.3955 7.16828 42.8016 7.56739 43.0893C7.96649 43.377 8.4461 43.5317 8.93809 43.5312H10.1979L9.05859 47.4375H12.3138L13.4531 43.5312H33.7754L34.9473 47.4375H38.209L37.0371 43.5312H39.0615C39.5536 43.5317 40.0333 43.3771 40.4325 43.0894C40.8316 42.8017 41.13 42.3956 41.2852 41.9286L44.192 33.2079C44.2718 32.969 44.3125 32.7187 44.3125 32.4668V29.4688H47.4375V26.3438H44.3125ZM17.4102 4.91016C18.2711 4.0511 19.4376 3.56864 20.6539 3.56864C21.8701 3.56864 23.0366 4.0511 23.8976 4.91016L24.9668 5.97959L18.4796 12.4668L17.4102 11.3976C16.5511 10.5366 16.0687 9.37006 16.0687 8.15386C16.0687 6.93765 16.5511 5.77111 17.4102 4.91016Z" fill="#B90000" />
                                </svg>

                            </div>

                            <h4 className='text-[1.2rem]'>Bathrooms</h4>

                            <h4 className='text-[1.2rem] text-right'>1</h4>

                        </div>

                        <div className="grid grid-cols-3">
                            <div className="icon">
                                <svg width="32" height="32" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6475 32.7275L12.6225 34.74C11.7742 35.575 10.6316 36.043 9.44128 36.043C8.25096 36.043 7.10835 35.575 6.26003 34.74C5.84642 34.3304 5.51809 33.8429 5.29401 33.3057C5.06994 32.7684 4.95457 32.1921 4.95457 31.61C4.95457 31.0279 5.06994 30.4516 5.29401 29.9143C5.51809 29.3771 5.84642 28.8896 6.26003 28.48L13.71 21.0925C15.2525 19.56 18.1575 17.305 20.275 19.405C20.5029 19.648 20.7774 19.8426 21.0821 19.9771C21.3868 20.1117 21.7156 20.1835 22.0486 20.1883C22.3817 20.193 22.7124 20.1306 23.0208 20.0048C23.3292 19.8789 23.6091 19.6923 23.8439 19.4559C24.0786 19.2195 24.2632 18.9382 24.3869 18.6289C24.5105 18.3196 24.5705 17.9885 24.5634 17.6555C24.5563 17.3224 24.4822 16.9942 24.3454 16.6905C24.2087 16.3867 24.0121 16.1136 23.7675 15.8875C20.1725 12.3175 14.8525 12.9775 10.22 17.575L2.77003 24.965C1.88976 25.8328 1.19139 26.8675 0.715766 28.0085C0.240143 29.1495 -0.00317943 30.3739 3.13665e-05 31.61C-0.00303985 32.8461 0.240346 34.0704 0.715961 35.2114C1.19158 36.3524 1.88987 37.3871 2.77003 38.255C4.54427 40.0149 6.94351 41.0001 9.44253 40.995C11.86 40.995 14.2775 40.0825 16.115 38.255L18.1425 36.2425C18.3737 36.0138 18.5575 35.7418 18.6833 35.4419C18.8092 35.142 18.8745 34.8203 18.8757 34.4951C18.8768 34.1699 18.8138 33.8477 18.6901 33.5469C18.5664 33.2462 18.3846 32.9728 18.155 32.7425C17.6909 32.2772 17.0616 32.0144 16.4044 32.0116C15.7472 32.0088 15.1156 32.2661 14.6475 32.7275ZM37.2275 4.01749C33.36 0.182495 27.955 -0.0250049 24.38 3.52499L21.8575 6.02999C21.3914 6.4928 21.1282 7.12181 21.1259 7.77866C21.1235 8.4355 21.3822 9.06638 21.845 9.53249C22.3078 9.99861 22.9368 10.2618 23.5937 10.2641C24.2505 10.2665 24.8814 10.0078 25.3475 9.54499L27.8725 7.04249C29.7225 5.20249 32.15 5.96499 33.7375 7.53499C34.5775 8.37249 35.0425 9.48249 35.0425 10.665C35.0425 11.8475 34.5775 12.9575 33.7375 13.7925L25.7875 21.6775C22.1525 25.28 20.4475 23.5925 19.72 22.87C19.4892 22.6408 19.2156 22.4594 18.9146 22.336C18.6137 22.2126 18.2914 22.1497 17.9662 22.1509C17.641 22.152 17.3191 22.2172 17.0191 22.3428C16.7191 22.4683 16.4467 22.6517 16.2175 22.8825C15.9884 23.1133 15.8069 23.387 15.6835 23.6879C15.5601 23.9888 15.4972 24.3111 15.4984 24.6363C15.4996 24.9616 15.5648 25.2834 15.6903 25.5834C15.8158 25.8835 15.9992 26.1558 16.23 26.385C17.9 28.04 19.805 28.86 21.8 28.86C24.2425 28.86 26.825 27.63 29.2825 25.1925L37.2325 17.31C38.1109 16.4408 38.8078 15.4059 39.2829 14.2651C39.758 13.1244 40.0018 11.9007 40 10.665C40.0023 9.4284 39.7583 8.20374 39.2823 7.06244C38.8063 5.92113 38.1078 4.88603 37.2275 4.01749Z" fill="#B90000" />
                                </svg>

                            </div>

                            <h4 className='text-[1.2rem]'>Hitch weight</h4>

                            <h4 className='text-[1.2rem] text-right'>1500 LBS</h4>

                        </div>

                        <div className="grid grid-cols-3">
                            <div className="icon">
                                <svg width="32" height="32" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.25 17.0963C35.25 23.5863 29.99 28.8463 23.5 28.8463C17.01 28.8463 11.75 23.5863 11.75 17.0963C11.75 10.6062 17.01 5.34625 23.5 5.34625C29.99 5.34625 35.25 10.6062 35.25 17.0963ZM35.966 6.815C33.001 3.22574 28.5213 0.940002 23.5 0.940002C18.4787 0.940002 13.999 3.22574 11.034 6.815H5.875C2.63457 6.815 0 9.44957 0 12.69V42.065C0 45.3054 2.63457 47.94 5.875 47.94H41.125C44.3654 47.94 47 45.3054 47 42.065V12.69C47 9.44957 44.3654 6.815 41.125 6.815H35.966ZM27.1719 21.5025C27.1719 20.5295 26.7955 19.6482 26.1713 18.9873L29.2557 11.7996C29.577 11.056 29.2281 10.1931 28.4846 9.87184C27.741 9.55055 26.8781 9.89938 26.5568 10.6429L23.4725 17.8306C21.4529 17.8398 19.8281 19.483 19.8281 21.5025C19.8281 23.5312 21.4713 25.1744 23.5 25.1744C25.5287 25.1744 27.1719 23.5312 27.1719 21.5025Z" fill="#B90000" />
                                </svg>

                            </div>

                            <h4 className='text-[1.2rem]'>Dry Weight</h4>

                            <h4 className='text-[1.2rem] text-right'>8600 LBS</h4>

                        </div>

                        <div className="grid grid-cols-3">
                            <div className="icon">
                                <svg width="32" height="32" viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5837 29.3333C13.6887 29.3333 14.7485 28.8943 15.5299 28.1129C16.3113 27.3315 16.7503 26.2717 16.7503 25.1667C16.7503 24.0616 16.3113 23.0018 15.5299 22.2204C14.7485 21.439 13.6887 21 12.5837 21C11.4786 21 10.4188 21.439 9.63738 22.2204C8.85598 23.0018 8.41699 24.0616 8.41699 25.1667C8.41699 26.2717 8.85598 27.3315 9.63738 28.1129C10.4188 28.8943 11.4786 29.3333 12.5837 29.3333ZM33.417 29.3333C34.5221 29.3333 35.5819 28.8943 36.3633 28.1129C37.1447 27.3315 37.5837 26.2717 37.5837 25.1667C37.5837 24.0616 37.1447 23.0018 36.3633 22.2204C35.5819 21.439 34.5221 21 33.417 21C32.3119 21 31.2521 21.439 30.4707 22.2204C29.6893 23.0018 29.2503 24.0616 29.2503 25.1667C29.2503 26.2717 29.6893 27.3315 30.4707 28.1129C31.2521 28.8943 32.3119 29.3333 33.417 29.3333Z" stroke="#B90000" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.167 25.1667V3.5C27.167 3.16848 27.0353 2.85054 26.8009 2.61612C26.5665 2.3817 26.2485 2.25 25.917 2.25H3.41699C3.08547 2.25 2.76753 2.3817 2.53311 2.61612C2.29869 2.85054 2.16699 3.16848 2.16699 3.5V23.9167C2.16699 24.2482 2.29869 24.5661 2.53311 24.8006C2.76753 25.035 3.08547 25.1667 3.41699 25.1667H7.68783M27.167 25.1667H16.8545M27.167 8.5H38.8545C39.0961 8.50006 39.3325 8.57014 39.5352 8.70177C39.7378 8.8334 39.8979 9.02093 39.9962 9.24167L43.7253 17.6333C43.7964 17.7927 43.8333 17.9651 43.8337 18.1396V23.9167C43.8337 24.0808 43.8013 24.2434 43.7385 24.395C43.6757 24.5467 43.5836 24.6845 43.4675 24.8006C43.3515 24.9166 43.2137 25.0087 43.062 25.0715C42.9104 25.1343 42.7478 25.1667 42.5837 25.1667H38.6253M27.167 25.1667H29.2503" stroke="#B90000" stroke-width="3" stroke-linecap="round" />
                                    <path d="M4.25 37.6667H41.2292M4.25 37.6667L7.89583 41.3125M4.25 37.6667L7.89583 34.0208M41.2292 37.6667L37.5833 41.3125M41.2292 37.6667L37.5833 34.0208" stroke="#B90000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </div>

                            <h4 className='text-[1.2rem]'>Length</h4>

                            <h4 className='text-[1.2rem] text-right'>37&rsquo;5&rdquo;</h4>

                        </div>

                        <div className="grid grid-cols-3">
                            <div className="icon">
                                <svg width="32" height="32" viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5837 29.3333C13.6887 29.3333 14.7485 28.8943 15.5299 28.1129C16.3113 27.3315 16.7503 26.2717 16.7503 25.1667C16.7503 24.0616 16.3113 23.0018 15.5299 22.2204C14.7485 21.439 13.6887 21 12.5837 21C11.4786 21 10.4188 21.439 9.63738 22.2204C8.85598 23.0018 8.41699 24.0616 8.41699 25.1667C8.41699 26.2717 8.85598 27.3315 9.63738 28.1129C10.4188 28.8943 11.4786 29.3333 12.5837 29.3333ZM33.417 29.3333C34.5221 29.3333 35.5819 28.8943 36.3633 28.1129C37.1447 27.3315 37.5837 26.2717 37.5837 25.1667C37.5837 24.0616 37.1447 23.0018 36.3633 22.2204C35.5819 21.439 34.5221 21 33.417 21C32.3119 21 31.2521 21.439 30.4707 22.2204C29.6893 23.0018 29.2503 24.0616 29.2503 25.1667C29.2503 26.2717 29.6893 27.3315 30.4707 28.1129C31.2521 28.8943 32.3119 29.3333 33.417 29.3333Z" stroke="#B90000" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.167 25.1667V3.5C27.167 3.16848 27.0353 2.85054 26.8009 2.61612C26.5665 2.3817 26.2485 2.25 25.917 2.25H3.41699C3.08547 2.25 2.76753 2.3817 2.53311 2.61612C2.29869 2.85054 2.16699 3.16848 2.16699 3.5V23.9167C2.16699 24.2482 2.29869 24.5661 2.53311 24.8006C2.76753 25.035 3.08547 25.1667 3.41699 25.1667H7.68783M27.167 25.1667H16.8545M27.167 8.5H38.8545C39.0961 8.50006 39.3325 8.57014 39.5352 8.70177C39.7378 8.8334 39.8979 9.02093 39.9962 9.24167L43.7253 17.6333C43.7964 17.7927 43.8333 17.9651 43.8337 18.1396V23.9167C43.8337 24.0808 43.8013 24.2434 43.7385 24.395C43.6757 24.5467 43.5836 24.6845 43.4675 24.8006C43.3515 24.9166 43.2137 25.0087 43.062 25.0715C42.9104 25.1343 42.7478 25.1667 42.5837 25.1667H38.6253M27.167 25.1667H29.2503" stroke="#B90000" stroke-width="3" stroke-linecap="round" />
                                    <path d="M4.25 37.6667H41.2292M4.25 37.6667L7.89583 41.3125M4.25 37.6667L7.89583 34.0208M41.2292 37.6667L37.5833 41.3125M41.2292 37.6667L37.5833 34.0208" stroke="#B90000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </div>

                            <h4 className='text-[1.2rem]'>Width</h4>

                            <h4 className='text-[1.2rem] text-right'>8&rsquo;5&rdquo;</h4>

                        </div>

                        <div className="grid grid-cols-3">
                            <div className="icon">
                                <svg width="32" height="32" viewBox="0 0 60 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5837 34.3333C13.6887 34.3333 14.7485 33.8943 15.5299 33.1129C16.3113 32.3315 16.7503 31.2717 16.7503 30.1667C16.7503 29.0616 16.3113 28.0018 15.5299 27.2204C14.7485 26.439 13.6887 26 12.5837 26C11.4786 26 10.4188 26.439 9.63738 27.2204C8.85598 28.0018 8.41699 29.0616 8.41699 30.1667C8.41699 31.2717 8.85598 32.3315 9.63738 33.1129C10.4188 33.8943 11.4786 34.3333 12.5837 34.3333ZM33.417 34.3333C34.5221 34.3333 35.5819 33.8943 36.3633 33.1129C37.1447 32.3315 37.5837 31.2717 37.5837 30.1667C37.5837 29.0616 37.1447 28.0018 36.3633 27.2204C35.5819 26.439 34.5221 26 33.417 26C32.3119 26 31.2521 26.439 30.4707 27.2204C29.6893 28.0018 29.2503 29.0616 29.2503 30.1667C29.2503 31.2717 29.6893 32.3315 30.4707 33.1129C31.2521 33.8943 32.3119 34.3333 33.417 34.3333Z" stroke="#B90000" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.167 30.1667V8.5C27.167 8.16848 27.0353 7.85054 26.8009 7.61612C26.5665 7.3817 26.2485 7.25 25.917 7.25H3.41699C3.08547 7.25 2.76753 7.3817 2.53311 7.61612C2.29869 7.85054 2.16699 8.16848 2.16699 8.5V28.9167C2.16699 29.2482 2.29869 29.5661 2.53311 29.8006C2.76753 30.035 3.08547 30.1667 3.41699 30.1667H7.68783M27.167 30.1667H16.8545M27.167 13.5H38.8545C39.0961 13.5001 39.3325 13.5701 39.5352 13.7018C39.7378 13.8334 39.8979 14.0209 39.9962 14.2417L43.7253 22.6333C43.7964 22.7927 43.8333 22.9651 43.8337 23.1396V28.9167C43.8337 29.0808 43.8013 29.2434 43.7385 29.395C43.6757 29.5467 43.5836 29.6845 43.4675 29.8006C43.3515 29.9166 43.2137 30.0087 43.062 30.0715C42.9104 30.1343 42.7478 30.1667 42.5837 30.1667H38.6253M27.167 30.1667H29.2503" stroke="#B90000" stroke-width="3" stroke-linecap="round" />
                                    <path d="M55.4896 38.1355V1.15633M55.4896 38.1355L59.1354 34.4897M55.4896 38.1355L51.8438 34.4897M55.4896 1.15633L59.1354 4.80216M55.4896 1.15633L51.8438 4.80216" stroke="#B90000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>



                            </div>

                            <h4 className='text-[1.2rem]'>Height</h4>

                            <h4 className='text-[1.2rem] text-right'>11&rsquo;5&rdquo;</h4>

                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-2 mb-20">
                <h2 className="mb-2 text-center text-[2.2rem]">Floorplan</h2>

                <div className="flex justify-center items-center">
                    <div className='max-w-[600px] w-[90%]'>
                        <Image src={footerplan} alt='img1' className='w-full h-full object-cover bg-white' height={500} width={500} />
                    </div>

                </div>
            </section>

            <Fotter />
        </div>
    )
}

export default ProductPage
