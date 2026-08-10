import Products from '../components/sections/Products'
import Stats from '../components/sections/Stats'
import { setPageMeta } from '../utils/seo'

export default function ProductsPage() {
  setPageMeta({
    title: 'Products | SafariScon by Eserveconn Ltd',
    description: 'Discover SafariScon, a web and mobile marketplace developed by Eserveconn Ltd.',
    path: '/products',
  })

  return (
    <>
      <Products headingLevel="h1" />
      <Stats />
    </>
  )
}
