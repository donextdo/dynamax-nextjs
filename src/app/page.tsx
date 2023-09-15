import Dynamaxs from '@/components/Dynamaxs/Dynamaxs'
import Hero from '@/components/Hero/Hero'
import HotDeals from '@/components/hotdeals/HotDeals'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-black'>
      <Hero/>
      <HotDeals/>
      <Dynamaxs/>
      
    </div>
  )
}
