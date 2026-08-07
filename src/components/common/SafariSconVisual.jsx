import { Bell, ChevronDown, Moon, Search } from 'lucide-react'

export default function SafariSconVisual({ compact = false }) {
  return (
    <div className={`overflow-hidden bg-white ${compact ? 'h-48 rounded-t-3xl' : 'rounded-[1.75rem] border border-slate-200 shadow-2xl shadow-blue-950/10'}`}>
      <div className="bg-blue-600 px-4 py-2 text-center text-[9px] font-extrabold text-white">
        <Bell className="mr-1.5 inline h-3 w-3" />
        Book trusted travel, hospitality, transport, food, and experience services across Rwanda.
      </div>

      <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-blue-600 font-display text-xs font-extrabold text-white">S</span>
          <span className="font-display text-sm font-extrabold text-slate-950">safariscon</span>
        </div>
        <div className="hidden items-center gap-2 text-[9px] font-bold text-slate-600 sm:flex">
          <span className="rounded-lg bg-blue-50 px-2 py-1 text-blue-700">Home</span>
          <span>Services</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      <div className={`relative grid items-center gap-4 overflow-hidden bg-[linear-gradient(90deg,rgba(15,23,42,0.68),rgba(15,23,42,0.34),rgba(15,23,42,0.12)),radial-gradient(circle_at_18%_58%,rgba(34,197,94,0.34),transparent_22%),radial-gradient(circle_at_38%_45%,rgba(30,64,175,0.35),transparent_28%),linear-gradient(135deg,#94a3b8,#f8fafc_48%,#92400e)] ${compact ? 'min-h-[140px] p-4 lg:grid-cols-[1fr_0.72fr]' : 'min-h-[360px] p-6 lg:grid-cols-[1fr_0.78fr]'}`}>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative z-10 text-white">
          <span className="rounded-full border border-white/40 bg-white/20 px-3 py-1.5 text-[7px] font-extrabold uppercase tracking-wide backdrop-blur">
            Rwanda service marketplace
          </span>
          <h3 className={`${compact ? 'mt-3 text-2xl' : 'mt-5 text-4xl'} max-w-sm font-display font-extrabold leading-[1.02] tracking-tight`}>
            SafariScon service marketplace
          </h3>
          <p className={`${compact ? 'mt-2 line-clamp-2 text-[9px] leading-4' : 'mt-4 text-sm leading-6'} max-w-md font-semibold text-white/90`}>
            Find trusted hotels, cafes, car rentals, venues, tours, and destination services from verified providers.
          </p>
          <div className={`${compact ? 'mt-3 gap-2' : 'mt-6 gap-3'} flex flex-wrap`}>
            <span className={`${compact ? 'rounded-lg px-2.5 py-2 text-[8px]' : 'rounded-xl px-4 py-3 text-xs'} bg-blue-600 font-extrabold shadow-lg shadow-blue-950/20`}>Browse services</span>
            <span className={`${compact ? 'rounded-lg px-2.5 py-2 text-[8px]' : 'rounded-xl px-4 py-3 text-xs'} bg-slate-950 font-extrabold`}>Create account</span>
          </div>
        </div>

        <div className={`relative z-10 bg-white/95 shadow-2xl shadow-slate-950/20 backdrop-blur ${compact ? 'rounded-2xl p-3' : 'rounded-3xl p-5'}`}>
          <div className={`${compact ? 'mb-2 gap-1.5' : 'mb-4 gap-2'} flex items-center justify-end`}>
            <span className={`${compact ? 'h-7 w-7 rounded-lg' : 'h-9 w-9 rounded-xl'} grid place-items-center border border-slate-200 text-slate-700`}>
              <Moon className={`${compact ? 'h-3 w-3' : 'h-4 w-4'}`} />
            </span>
            <span className={`${compact ? 'rounded-lg px-2 py-1.5 text-[8px]' : 'rounded-xl px-3 py-2 text-xs'} flex items-center gap-2 border border-slate-200 font-bold text-slate-700`}>
              EN - English
              <ChevronDown className={`${compact ? 'h-3 w-3' : 'h-3.5 w-3.5'}`} />
            </span>
          </div>
          <h4 className={`${compact ? 'text-[10px]' : 'text-base'} font-display font-extrabold text-slate-950`}>Search available providers</h4>
          <label className={`${compact ? 'mt-2 text-[8px]' : 'mt-4 text-xs'} block font-extrabold text-blue-950`}>
            Book travel experiences and related services
            <span className={`${compact ? 'mt-1 rounded-lg px-2 py-2 text-[8px]' : 'mt-2 rounded-xl px-3 py-3 text-sm'} flex items-center gap-2 border border-slate-200 font-bold text-slate-400`}>
              <Search className={`${compact ? 'h-3 w-3' : 'h-4 w-4'}`} />
              e.g. Car rental, Tour guide, Hotel...
            </span>
          </label>
          <label className={`${compact ? 'mt-2 text-[8px]' : 'mt-4 text-xs'} block font-extrabold text-blue-950`}>
            Where?
            <span className={`${compact ? 'mt-1 rounded-lg px-2 py-2 text-[8px]' : 'mt-2 rounded-xl px-3 py-3 text-sm'} flex items-center justify-between border border-slate-200 font-bold text-slate-700`}>
              Select District
              <ChevronDown className={`${compact ? 'h-3 w-3' : 'h-4 w-4'}`} />
            </span>
          </label>
          <button type="button" className={`${compact ? 'mt-2 rounded-lg px-3 py-2 text-[9px]' : 'mt-4 rounded-xl px-4 py-3 text-sm'} w-full bg-blue-600 font-extrabold text-white shadow-lg shadow-blue-600/25`}>
            Search Services
          </button>
          <div className={`${compact ? 'hidden' : 'mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4'}`}>
            <p className="text-xs font-extrabold uppercase text-slate-500">Accepted payment methods</p>
            <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-extrabold">
              <span className="rounded bg-white px-2 py-1 text-blue-700">VISA</span>
              <span className="rounded bg-yellow-400 px-2 py-1 text-red-700">Airtel Money</span>
              <span className="rounded bg-blue-600 px-2 py-1 text-yellow-300">MoMo Pay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
