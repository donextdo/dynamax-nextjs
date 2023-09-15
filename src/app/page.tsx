import Dynamaxs from '@/components/Dynamaxs/Dynamaxs'
import Hero from '@/components/Hero/Hero'
import NewArrivals from '@/components/NewArrivals/NewArrivals'
import HotDeals from '@/components/hotdeals/HotDeals'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-black'>
      <Hero/>
      <HotDeals/>
      <Dynamaxs/>
      <NewArrivals/>
    </div>
  )
}
