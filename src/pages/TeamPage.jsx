import Team from '../components/sections/Team'
import { setPageMeta } from '../utils/seo'

export default function TeamPage() {
  setPageMeta({
    title: 'Team | Eserveconn Ltd',
    description: 'Meet the Eserveconn Ltd team building software solutions from Rwanda.',
  })

  return <Team />
}
