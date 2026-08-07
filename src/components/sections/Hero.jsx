import { motion } from 'motion/react'
import { Rocket, ShieldCheck, Sparkles } from 'lucide-react'
import Button from '../common/Button'
import SoftwareSolutionsVisual from '../common/SoftwareSolutionsVisual'
import { company } from '../../content/company'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_12%,rgba(37,99,235,0.18),transparent_34%),linear-gradient(180deg,#f8fbff_0%,#ffffff_64%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-blue-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Software engineering from Gisenyi
          </span>
          <h1 className="mt-7 max-w-3xl font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[4.25rem]">
            Empowering Rwanda Through{' '}
            <span className="text-blue-600">
              Smart Digital Solutions
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
            {company.name} develops modern software solutions that help citizens, businesses, and institutions become more efficient through technology.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/products">Explore Products</Button>
            <Button to="/contact" variant="secondary">Contact Us</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-slate-500">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-600" />Secure by design</span>
            <span className="flex items-center gap-2"><Rocket className="h-4 w-4 text-blue-600" />Delivery in weeks, not years</span>
          </div>
        </motion.div>
        <SoftwareSolutionsVisual />
      </div>
    </section>
  )
}
