import Image from 'next/image'
import Firstcon from '../components/organisms/Firtcontent'
import OurSpace from '../components/organisms/OurSpace'
import Logos from '../components/organisms/UseFrispes'
import FAQ from '../components/organisms/FAQ'
import Footer from '../components/organisms/Footer'
import Curtomerevies from '../components/organisms/CustomerReviews'
import Gallery from '../components/organisms/Galerry'
import Planes from '../components/organisms/Planes'
export default function Home() {
  return (
    <main  >
      <Firstcon/>
      <OurSpace/>
      <Gallery/>
      <Logos/>
      <Curtomerevies/>
      <Planes/>
      <FAQ/>
      <Footer/>
    </main>
  )
}
