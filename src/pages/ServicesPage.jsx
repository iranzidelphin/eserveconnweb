import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { setPageMeta } from '../utils/seo'

export default function ServicesPage() {
  setPageMeta({
    title: 'Eserveconn Services | Software, Web & Digital Solutions',
    description: 'Explore Eserveconn software development, web development, mobile apps, enterprise systems, cloud solutions, UI/UX design, and technical support in Rwanda.',
    path: '/services',
  })

  return (
    <>
      <Services headingLevel="h1" />
      <WhyChooseUs />
    </>
  )
}
