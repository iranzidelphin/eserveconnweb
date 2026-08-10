import { BadgeCheck, Box, Check, CircleDollarSign, Layers3, MonitorSmartphone, Tag } from 'lucide-react'
import Button from '../common/Button'
import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'
import { products } from '../../content/products'

export default function Products({ headingLevel }) {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Products" title="Our Products" description="Platforms we build and operate to solve practical, high-value problems." headingLevel={headingLevel} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              hoverable={false}
              className="group flex h-full flex-col rounded-2xl p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700">
                  <Layers3 className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-700">
                  <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  {product.label}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-slate-950">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
              </div>

              <dl className="mt-6 grid grid-cols-1 gap-3 border-y border-slate-100 py-5 text-sm sm:grid-cols-2">
                <div className="flex items-start gap-2.5">
                  <Tag className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Category</dt>
                    <dd className="mt-0.5 font-semibold leading-5 text-slate-800">{product.category}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Box className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-medium text-slate-500">By</dt>
                    <dd className="mt-0.5 font-semibold text-slate-800">{product.brand}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <MonitorSmartphone className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Platform</dt>
                    <dd className="mt-0.5 font-semibold text-slate-800">{product.platforms}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Platform capabilities</p>
                <ul className="mt-3 space-y-2.5">
                  {product.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm leading-5 text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" strokeWidth={2.5} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {product.features.length > 3 && (
                  <p className="mt-3 text-xs font-semibold text-slate-500">+{product.features.length - 3} more platform capabilities</p>
                )}
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <CircleDollarSign className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                    Pricing
                  </div>
                  <p className="mt-1 font-display text-base font-bold text-slate-950">{product.pricing}</p>
                </div>
                <div className="border-l border-slate-200 pl-4">
                  <p className="text-xs font-medium text-slate-500">Availability</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700">
                    <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
                    {product.availability}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-1">
                <Button to="/contact">Discuss this product</Button>
              </div>
            </Card>
          ))}
          <Card className="flex min-h-[420px] items-center justify-center border-dashed p-8 text-center">
            <div>
              <p className="font-display text-xl font-extrabold text-slate-950">More products coming soon</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">This grid is ready for the next Eserveconn product card.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
