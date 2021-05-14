import Head from 'next/head'
import Hero from '../components/hero'
import About from '../components/about'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Services from '../components/services'
import Testimonals from '../components/testimonials'
import Contact from '../components/contact'
import Gallery from '../components/gallery'

const Home = () => {
  return (
    <>
      <Head>
        <title>Tasty Foods Restaurant</title>
      </Head>
      <Hero />
      <About />
      <Services />
      <Menu />
      <Testimonals />
      <Contact />
      <Gallery />
      <Footer />
    </>
  )
}

export default Home;