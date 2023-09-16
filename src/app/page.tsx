import CommentList from '@/components/Comment/CommentList'
import ContactUs from '@/components/Contact-Us/ContactUs'
import CraftsmanshipLeft from '@/components/Craftsmanship/CraftsmanshipLeft'
import CraftsmanshipRight from '@/components/Craftsmanship/CraftsmanshipRight'
import Dynamaxs from '@/components/Dynamaxs/Dynamaxs'
import Fotter from '@/components/Footer/Fotter'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import NewArrivals from '@/components/NewArrivals/NewArrivals'
import HotDeals from '@/components/hotdeals/HotDeals'
import Image from 'next/image'


const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HotDeals />
      <CraftsmanshipLeft />
      <Dynamaxs />
      <NewArrivals />
      <CraftsmanshipRight />
      <CommentList />
      <ContactUs />
      <Fotter />
    </div>
  );
};

export default page;
