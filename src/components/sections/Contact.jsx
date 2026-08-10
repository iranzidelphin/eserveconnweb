import { Mail, MapPin, MessageCircle } from 'lucide-react'
import Button from '../common/Button'
import SectionTitle from '../common/SectionTitle'
import { company } from '../../content/company'

export default function Contact({ headingLevel }) {
  const whatsappNumber = '250788836180'
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const emailLink = `mailto:${company.email}`
  const details = [
    [Mail, 'Email', company.email, `mailto:${company.email}`],
    [MessageCircle, 'WhatsApp', company.phone, `https://wa.me/${whatsappNumber}`],
  ]

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Contact Us" title="Let's build something together" description="Tell us about your project and our team will get back to you with clear next steps." headingLevel={headingLevel} />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
            <h3 className="font-display text-2xl font-bold text-slate-950">Ready to talk?</h3>
            <p className="mt-3 max-w-2xl text-slate-600">
              Reach us directly through WhatsApp or email and our team will respond with clear next steps.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappLink}>Talk to us on WhatsApp</Button>
              <Button href={emailLink} variant="secondary">Talk to us on Email</Button>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              {details.map(([Icon, label, value, href]) => (
                <div key={label} className="flex gap-4 border-b border-slate-100 py-4 last:border-0">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-950">{label}</p>
                    {href ? <a className="text-sm text-slate-600 hover:text-blue-700" href={href}>{value}</a> : <p className="text-sm text-slate-600">{value}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 text-center">
              <MapPin className="mx-auto h-8 w-8 text-blue-600" />
              <h3 className="mt-3 font-display text-lg font-bold text-slate-950">Built in Rubavu</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">We proudly create software from Gisenyi for Rwanda and beyond.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
