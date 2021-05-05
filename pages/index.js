import Hero from '../components/hero/index'
import About from '../components/about/index'
import Menu from '../components/menu'
import Footer from '../components/footer_copy'
import Services from '../components/services'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Menu />
      <Footer />
    </>
  )
}

export default Home;