import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import ProductsPage from '../pages/ProductsPage'
import ServicesPage from '../pages/ServicesPage'
import TeamPage from '../pages/TeamPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
