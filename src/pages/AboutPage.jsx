import About from '../components/sections/About'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { setPageMeta } from '../utils/seo'

export default function AboutPage() {
  setPageMeta({
    title: 'About Eserveconn | Technology & Software Solutions in Rwanda',
    description: 'Learn about Eserveconn, a Rwanda-based software company providing practical digital solutions, product thinking, and reliable engineering.',
    path: '/about',
  })

  return (
    <>
      <About headingLevel="h1" />
      <WhyChooseUs />
    </>
  )
}
