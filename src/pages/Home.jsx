import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Products from '../components/sections/Products'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats'
import Team from '../components/sections/Team'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { getOrganizationSchema, getWebsiteSchema, setPageMeta } from '../utils/seo'

export default function Home() {
  setPageMeta({
    title: 'Eserveconn | Digital Solutions & Software Development in Rwanda',
    description: 'Eserveconn is a Rwanda-based technology company delivering modern software development, web applications, mobile apps, and digital solutions for businesses and organizations.',
    path: '/',
    structuredData: [getWebsiteSchema(), getOrganizationSchema()],
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
