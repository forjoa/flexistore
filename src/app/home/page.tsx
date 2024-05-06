import Main from '@/components/home/globals/Main'
import AboutUs from '@/components/home/index/AboutUs'
import ContactUs from '@/components/home/index/ContactUs'
import Presentation from '@/components/home/index/Presentation'

export default function Home() {
  return (
    <Main>
      <Presentation />
      <AboutUs />
      <ContactUs />
    </Main>
  )
}
