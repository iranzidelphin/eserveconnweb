import Button from '../components/common/Button'
import { setPageMeta } from '../utils/seo'

export default function NotFound() {
  setPageMeta({
    title: 'Page Not Found | Eserveconn Ltd',
    description: 'The requested Eserveconn Ltd page could not be found.',
  })

  return (
    <section className="grid min-h-[65vh] place-items-center px-4 py-20 text-center">
      <div>
        <p className="font-display text-7xl font-extrabold text-blue-600">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-slate-950">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600">This page has moved or does not exist. Let’s get you back to the main site.</p>
        <div className="mt-7">
          <Button to="/">Back Home</Button>
        </div>
      </div>
    </section>
  )
}
