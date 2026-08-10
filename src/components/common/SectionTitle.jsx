export default function SectionTitle({ eyebrow, title, description, headingLevel = 'h2' }) {
  const Heading = headingLevel

  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </span>
      <Heading className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </Heading>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  )
}
