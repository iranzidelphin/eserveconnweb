import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { setPageMeta } from '../utils/seo'

export default function ServicesPage() {
  setPageMeta({
    title: 'Services | Eserveconn Ltd',
    description: 'Explore Eserveconn Ltd software development, mobile app, web, cloud, API, UI/UX, and support services.',
  })

  return (
    <>
      <Services />
      <WhyChooseUs />
    </>
  )
}
