import Image from 'next/image'
import Firstcon from '../components/organisms/Firtcontent'
import OurSpace from '../components/organisms/OurSpace'
import Logos from '../components/organisms/UseFrispes'
import FAQ from '../components/organisms/FAQ'
import Footer from '../components/organisms/Footer'
import Curtomerevies from '../components/organisms/CustomerReviews'
export default function Home() {
  return (
    <main  >
      <Firstcon/>
      <OurSpace/>
      <Logos/>
      <Curtomerevies/>
      <FAQ/>
      <Footer/>
    </main>
  )
}
