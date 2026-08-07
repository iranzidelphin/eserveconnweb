import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import { team } from '../../content/team'

export default function Team() {
  return (
    <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Our Team" title="Meet the team" description="A focused team of builders shaping Rwanda's digital future." />
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <Reveal key={member.name}>
              <Card className="h-full p-8 text-center hover:-translate-y-2">
                {member.image ? (
                  <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-blue-600 shadow-xl shadow-blue-600/25">
                    <img className={`h-full w-full object-cover ${member.imageClassName || ''}`} src={member.image} alt={member.name} />
                  </div>
                ) : (
                  <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-sky-400 font-display text-3xl font-extrabold text-white shadow-xl shadow-blue-600/25">
                    {member.initials}
                  </div>
                )}
                <h3 className="mt-5 font-display text-xl font-bold text-slate-950">{member.name}</h3>
                <p className="mt-1 font-semibold text-blue-600">{member.role}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{member.description || 'Building dependable software with care, clarity, and long-term thinking.'}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
