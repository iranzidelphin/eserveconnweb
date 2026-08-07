import About from '../components/sections/About'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { setPageMeta } from '../utils/seo'

export default function AboutPage() {
  setPageMeta({
    title: 'About Eserveconn Ltd | Software Company in Rwanda',
    description: 'Learn about Eserveconn Ltd, its mission, vision, and software development work in Rwanda.',
  })

  return (
    <>
      <About />
      <WhyChooseUs />
    </>
  )
}
