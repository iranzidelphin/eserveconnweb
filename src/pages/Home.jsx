import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Products from '../components/sections/Products'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats'
import Team from '../components/sections/Team'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { setPageMeta } from '../utils/seo'

export default function Home() {
  setPageMeta({
    title: 'Eserveconn Ltd | Smart Digital Solutions in Rwanda',
    description: 'Eserveconn Ltd builds software products and digital platforms from Gisenyi, Rubavu District, Rwanda.',
  })

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <Stats />
      <Team />
      <Contact />
    </>
  )
}
