import CommentList from '@/components/Comment/CommentList'
import ContactUs from '@/components/Contact-Us/ContactUs'
import Fotter from '@/components/Footer/Fotter'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <ContactUs />
      <CommentList />
      <Fotter />
    </div>
  )
}
