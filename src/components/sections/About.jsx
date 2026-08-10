import { CheckCircle2 } from 'lucide-react'
import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import { company } from '../../content/company'

export default function About({ headingLevel }) {
  const items = [
    ['Company Story', company.story],
    ['Our Mission', company.mission],
    ['Our Vision', company.vision],
  ]

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About Us" title={`About ${company.name}`} description="A Rwandan software company building accessible, reliable technology from Gisenyi for organizations ready to grow." headingLevel={headingLevel} />
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map(([title, description]) => (
            <Reveal key={title}>
              <Card className="h-full p-7">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-5 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-7 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-950">Why Eserveconn Exists</h3>
            <p className="mt-3 max-w-4xl leading-7 text-slate-600">{company.reason}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
