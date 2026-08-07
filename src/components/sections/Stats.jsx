import { stats } from '../../content/stats'

export default function Stats() {
  return (
    <section className="bg-blue-600 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl font-extrabold">{stat.value}</div>
            <div className="mt-1 text-sm font-semibold text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
