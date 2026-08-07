import { ShieldCheck } from 'lucide-react'
import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import { reasons } from '../../utils/constants'

export default function WhyChooseUs() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Why Us" title="Why choose Eserveconn" description="We pair modern engineering with practical partnership and clear accountability." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <Reveal key={reason.title}>
              <Card className="h-full">
                <ShieldCheck className="h-7 w-7 text-blue-600" />
                <h3 className="mt-5 font-display text-lg font-bold text-slate-950">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{reason.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
