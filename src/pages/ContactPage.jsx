import Contact from '../components/sections/Contact'
import { setPageMeta } from '../utils/seo'

export default function ContactPage() {
  setPageMeta({
    title: 'Contact Eserveconn Ltd',
    description: 'Contact Eserveconn Ltd in Gisenyi, Rubavu District, Rwanda for software development projects.',
  })

  return <Contact />
}
