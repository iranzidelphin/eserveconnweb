import { motion } from 'motion/react'
import { BarChart3, CloudUpload, Database, Lock, PieChart, ShieldCheck } from 'lucide-react'

export default function SoftwareSolutionsVisual() {
  return (
    <motion.div
      className="relative mx-auto hidden min-h-[430px] w-full max-w-[590px] lg:block"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      aria-label="Modern digital dashboard illustration"
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-blue-200/40 blur-3xl" />

      <FloatingCard className="left-8 top-32 w-24 rotate-[-4deg]">
        <p className="text-[9px] font-bold text-slate-400">Active Users</p>
        <p className="mt-1 text-xl font-extrabold text-slate-900">7,341</p>
        <MiniBars />
      </FloatingCard>

      <FloatingCard className="bottom-5 left-36 w-28 rotate-[5deg]">
        <p className="text-[9px] font-bold text-slate-400">Recent Orders</p>
        {['#3921', '#4020', '#2559'].map((item) => (
          <div key={item} className="mt-2 flex items-center justify-between text-[8px] font-bold text-slate-500">
            <span className="rounded bg-blue-50 px-1.5 py-1 text-blue-600">{item}</span>
            <span>$125.00</span>
          </div>
        ))}
      </FloatingCard>

      <div className="absolute left-[130px] top-24 h-[290px] w-[350px] rotate-[8deg] rounded-[28px] border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-900/15">
        <div className="absolute bottom-0 left-0 top-0 w-14 rounded-l-[28px] bg-blue-600 p-3 text-white shadow-xl shadow-blue-600/25">
          <div className="mb-5 grid h-7 w-7 place-items-center rounded-full bg-white/20">
            <CloudUpload className="h-4 w-4" />
          </div>
          <div className="space-y-4 text-white/70">
            {[BarChart3, Database, PieChart, Lock, ShieldCheck].map((Icon, index) => (
              <Icon key={index} className="h-3.5 w-3.5" />
            ))}
          </div>
        </div>
        <div className="ml-16">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-slate-950">Overview</h3>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-[8px] font-bold text-slate-500">Mar 01 - Mar 18</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['$24.8K', '12.6K', '8.4K', '2.64%'].map((value) => (
              <div key={value} className="rounded-xl border border-slate-100 bg-slate-50 p-2">
                <p className="text-[7px] font-bold text-slate-400">Metric</p>
                <p className="text-[10px] font-extrabold text-slate-900">{value}</p>
                <TinySparkline />
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-3">
            <div className="mb-2 flex justify-between text-[8px] font-bold text-slate-400">
              <span>Analytics</span>
              <span>Monthly</span>
            </div>
            <svg viewBox="0 0 240 88" className="h-24 w-full">
              <path d="M0 64 C25 45 38 57 58 42 S93 20 118 42 155 70 178 44 218 26 240 39" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
              <path d="M0 64 C25 45 38 57 58 42 S93 20 118 42 155 70 178 44 218 26 240 39 L240 88 L0 88 Z" fill="url(#chartFill)" />
              <defs>
                <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                  <stop stopColor="#60a5fa" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <FloatingCard className="right-4 top-40 w-40 rotate-[7deg]">
        <div className="flex items-center gap-3">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[conic-gradient(#2563eb_75%,#e6eefc_0)]">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-xs font-extrabold text-slate-900">75%</div>
          </div>
          <div className="space-y-1 text-[8px] font-bold text-slate-500">
            <LegendItem color="bg-blue-600" label="Organic Search" />
            <LegendItem color="bg-sky-400" label="Direct" />
            <LegendItem color="bg-cyan-400" label="Social Media" />
          </div>
        </div>
      </FloatingCard>

      <div className="absolute right-8 top-12 grid h-24 w-28 place-items-center rounded-[2rem] bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-2xl shadow-blue-500/30">
        <CloudUpload className="h-11 w-11" />
      </div>
      <div className="absolute left-8 top-2 grid h-20 w-20 place-items-center rounded-[1.5rem] bg-white shadow-xl shadow-blue-900/10">
        <Database className="h-9 w-9 text-blue-500" />
      </div>
      <div className="absolute bottom-14 right-28 grid h-20 w-20 place-items-center rounded-[1.5rem] bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl shadow-blue-500/30">
        <PieChart className="h-9 w-9" />
      </div>
    </motion.div>
  )
}

function FloatingCard({ children, className }) {
  return (
    <div className={`absolute rounded-2xl border border-blue-100 bg-white/95 p-3 shadow-xl shadow-blue-900/10 backdrop-blur ${className}`}>
      {children}
    </div>
  )
}

function LegendItem({ color, label }) {
  return (
    <p className="flex items-center gap-1.5">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
      {label}
    </p>
  )
}

function MiniBars() {
  return (
    <div className="mt-3 flex h-8 items-end gap-1">
      {[35, 55, 45, 70, 50, 82, 64].map((height, index) => (
        <span key={index} className="w-2 rounded-t bg-blue-500" style={{ height: `${height}%` }} />
      ))}
    </div>
  )
}

function TinySparkline() {
  return (
    <svg viewBox="0 0 48 16" className="mt-1 h-4 w-full">
      <path d="M2 11 C8 4 13 12 19 7 S30 3 36 8 42 13 46 6" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
