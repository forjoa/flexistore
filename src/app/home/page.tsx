import Main from '@/components/home/globals/Main'
import AboutUs from '@/components/home/index/AboutUs'
import Footer from '@/components/home/globals/Footer'
import Presentation from '@/components/home/index/Presentation'

export default function Home() {
  return (
    <Main>
      <Presentation />
      <AboutUs />
      <Footer />
    </Main>
  )
}
