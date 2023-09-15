import React from 'react'
import Card from '../Card/Card'
import Link from 'next/link'
import img1 from '../../assets/images/newarrivals/4.jpg';
import img2 from '../../assets/images/newarrivals/5.jpg';
import img3 from '../../assets/images/newarrivals/6.jpg';

export default function NewArrivals() {
  return (
    <section className="py-10 flex flex-col items-center max-w-screen-xl mx-auto px-10 relative">
      <h2 className="text-center font-$ff-headings text-2xl mb-8">New Arrivals</h2>
      <div className="grid lg:grid-cols-3 gap-10 w-full md:grid-cols-2 grid-cols-1">
        <Card hotdeals={img1} />
        <Card hotdeals={img2} />
        <Card hotdeals={img3} />
      </div>

      <Link
        href="/products"
        className="bg-[#b90000] text-[#fff] w-[160px] text-center  text-[1.1rem] mt-[2rem] py-[6px] px-[12px] rounded-[.25rem] hover:opacity-80 transition-opacity duration-300 ease-in-out"
      >
        View More
      </Link>
    </section>
  )
}