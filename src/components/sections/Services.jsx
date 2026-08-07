import { Cloud, Code2, DatabaseZap, Globe2, Headphones, Layers3, MousePointer2, Smartphone } from 'lucide-react'
import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import { services } from '../../content/services'
import { slugify } from '../../utils/helpers'

const icons = { Cloud, Code2, DatabaseZap, Globe2, Headphones, Layers3, MousePointer2, Smartphone }

export default function Services() {
  return (
    <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="What We Do" title="Services built for real impact" description="From first concept to long-term support, we cover the full software lifecycle." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <Reveal key={service.title}>
                <Card id={slugify(service.title)} className="group h-full">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
