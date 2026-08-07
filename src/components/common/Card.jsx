export default function Card({ children, className = '', ...props }) {
  return (
    <article {...props} className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}>
      {children}
    </article>
  )
}
