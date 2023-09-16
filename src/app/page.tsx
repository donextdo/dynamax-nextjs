import CommentList from '@/components/Comment/CommentList'
import ContactUs from '@/components/Contact-Us/ContactUs'
import Dynamaxs from '@/components/Dynamaxs/Dynamaxs'
import Fotter from '@/components/Footer/Fotter'
import Hero from '@/components/Hero/Hero'
import NewArrivals from '@/components/NewArrivals/NewArrivals'
import HotDeals from '@/components/hotdeals/HotDeals'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <HotDeals />
      <Dynamaxs />
      <NewArrivals />
      <ContactUs />
      <CommentList />
      <Fotter />
    </div>
  )
}
