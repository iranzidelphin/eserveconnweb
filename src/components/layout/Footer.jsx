import { Link } from 'react-router-dom'
import { company, navigation } from '../../content/company'
import { services } from '../../content/services'
import { slugify } from '../../utils/helpers'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-4 py-12 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-600 font-display text-sm font-extrabold text-white">E</span>
            <span className="font-display font-extrabold text-white">{company.name}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-400">A Rwandan software company building secure, scalable digital products.</p>
          <div className="mt-5 flex gap-3">
            {['f', 'in', 'X'].map((item) => (
              <span key={item} className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xs font-bold text-white">
                {item}
              </span>
            ))}
          </div>
        </div>
        <FooterLinks title="Quick Links" items={navigation.map((item) => ({ label: item.label, path: item.path }))} />
        <FooterLinks title="Services" items={services.slice(0, 5).map((service) => ({ label: service.title, path: `/services#${slugify(service.title)}` }))} />
        <div>
          <h3 className="font-display font-bold text-white">Contact Information</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>{company.email}</p>
            <p>{company.phone}</p>
            <p>{company.location}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <p>© 2026 {company.name}. All Rights Reserved.</p>
        <p>Built in Gisenyi, Rwanda.</p>
      </div>
    </footer>
  )
}

function FooterLinks({ title, items }) {
  return (
    <div>
      <h3 className="font-display font-bold text-white">{title}</h3>
      <div className="mt-4 grid gap-2 text-sm text-slate-400">
        {items.map((item) => (
          <Link key={item.label} to={item.path} className="transition hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
