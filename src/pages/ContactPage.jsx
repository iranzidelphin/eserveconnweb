import Contact from '../components/sections/Contact'
import { setPageMeta } from '../utils/seo'

export default function ContactPage() {
  setPageMeta({
    title: 'Contact Eserveconn | Digital Solutions & Software Development',
    description: 'Contact Eserveconn in Gisenyi, Rubavu District, Rwanda to discuss software development, web applications, mobile apps, and digital solutions.',
    path: '/contact',
  })

  return <Contact headingLevel="h1" />
}
