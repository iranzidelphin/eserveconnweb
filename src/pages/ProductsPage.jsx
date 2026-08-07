import Products from '../components/sections/Products'
import Stats from '../components/sections/Stats'
import { setPageMeta } from '../utils/seo'

export default function ProductsPage() {
  setPageMeta({
    title: 'Products | SafariScon Platform by Eserveconn Ltd',
    description: 'Discover SafariScon Platform, a smart digital product developed by Eserveconn Ltd.',
  })

  return (
    <>
      <Products />
      <Stats />
    </>
  )
}
