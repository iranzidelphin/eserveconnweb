import { CheckCircle2 } from 'lucide-react'
import Button from '../common/Button'
import Card from '../common/Card'
import SafariSconVisual from '../common/SafariSconVisual'
import SectionTitle from '../common/SectionTitle'
import { products } from '../../content/products'

export default function Products() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Products" title="Our Products" description="Platforms we build and operate to solve practical, high-value problems." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden p-0">
              <SafariSconVisual compact />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-extrabold text-slate-950">{product.name}</h3>
                  <span className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700">{product.label}</span>
                </div>
                <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-600">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.features.slice(0, 4).map((feature) => (
                    <span key={feature} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 4 && (
                    <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-700">
                      +{product.features.length - 4}
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  <Button to="/contact">Learn More</Button>
                </div>
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
