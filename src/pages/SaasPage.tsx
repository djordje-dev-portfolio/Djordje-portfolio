import { ArrowLeft, BarChart2, Bell, CheckCircle, ChevronRight, Globe, Lock, TrendingUp, Users, Zap } from "lucide-react";
import { useLocation } from "wouter";

const features = [
  { icon: BarChart2, title: "Real-time Analytics", desc: "Track every metric that matters. Live dashboards that update as your business moves." },
  { icon: Users, title: "Team Collaboration", desc: "Invite your entire team. Roles, permissions, and shared workspaces built in." },
  { icon: Globe, title: "Global CDN", desc: "Your data, everywhere. Sub-50ms response times across 200+ edge locations." },
  { icon: Bell, title: "Smart Alerts", desc: "Anomaly detection powered by ML. Get notified before problems become crises." },
  { icon: Lock, title: "Enterprise Security", desc: "SOC2 Type II, GDPR compliant. End-to-end encryption as standard." },
  { icon: Zap, title: "API-first", desc: "Connect anything. 200+ integrations and a developer-friendly REST API." },
];

const plans = [
  { name: "Starter", price: "$29", period: "/mo", features: ["5 team members", "10K events/mo", "7-day retention", "Basic analytics"], highlight: false },
  { name: "Pro", price: "$99", period: "/mo", features: ["Unlimited members", "1M events/mo", "90-day retention", "Advanced analytics", "Priority support"], highlight: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Everything in Pro", "Unlimited retention", "Dedicated infra", "SLA guarantee", "White-glove onboarding"], highlight: false },
];

export default function SaasPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#07090f] text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#07090f]/90 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </button>
        <span className="text-xl font-black tracking-widest">PULSE<span className="text-emerald-400">HQ</span></span>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/saas/cms")} className="text-xs text-white/40 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 px-3 py-2 rounded-full transition-colors font-medium">
            Control Room
          </button>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-black px-5 py-2 rounded-full text-sm transition-colors">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest mb-8">
          <TrendingUp className="w-3 h-3" /> TRUSTED BY 4,000+ TEAMS
        </span>

        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-6 max-w-5xl">
          THE ANALYTICS<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "2px #10b981" }}>PLATFORM</span><br />
          BUILT TO SCALE.
        </h1>

        <p className="text-white/50 text-xl max-w-2xl mb-10">
          PulseHQ gives your team a single source of truth. Track, analyze, and act on your data — all in one beautifully designed dashboard.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-black px-8 py-4 rounded-full transition-all hover:scale-105 text-lg">
            Start for Free <ChevronRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 border border-white/20 hover:border-emerald-500/50 rounded-full transition-colors">
            See Live Demo
          </button>
        </div>

        {/* Dashboard mockup */}
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.1)]">
          <div className="bg-[#0d1117] p-4 flex items-center gap-3 border-b border-white/10">
            <div className="flex gap-2">
              {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />)}
            </div>
            <div className="flex-1 bg-white/5 rounded-full h-6 mx-4" />
          </div>
          <div className="bg-[#0d1117] p-8 grid grid-cols-3 gap-4">
            {[["Total Revenue", "$284,920", "+18.2%"], ["Active Users", "12,847", "+5.4%"], ["Conversion", "4.73%", "+2.1%"]].map(([label, val, change]) => (
              <div key={label} className="bg-[#111827] rounded-xl p-5 border border-white/5">
                <div className="text-xs text-white/40 mb-2 tracking-widest">{label}</div>
                <div className="text-2xl font-black mb-1">{val}</div>
                <div className="text-emerald-400 text-xs font-bold">{change} this month</div>
              </div>
            ))}
            <div className="col-span-3 bg-[#111827] rounded-xl p-5 border border-white/5 h-32 flex items-end gap-2">
              {[40,65,45,80,60,90,55,75,85,95,70,88].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: `rgba(16,185,129,${0.3 + i * 0.05})` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4">EVERYTHING YOU <span className="text-emerald-400">NEED</span></h2>
            <p className="text-white/40 text-lg">No plugins. No add-ons. Just one powerful platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group hover:bg-emerald-500/5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-black mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 bg-[#0b0e18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4">SIMPLE <span className="text-emerald-400">PRICING</span></h2>
            <p className="text-white/40">No hidden fees. Scale as you grow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl border flex flex-col ${plan.highlight ? "border-emerald-500 bg-emerald-500/10 scale-105" : "border-white/10 bg-[#0d1117]"}`}>
                {plan.highlight && (
                  <div className="text-xs text-emerald-400 font-black tracking-widest mb-4">MOST POPULAR</div>
                )}
                <div className="text-xl font-black mb-2">{plan.name}</div>
                <div className="text-4xl font-black text-emerald-400 mb-6">
                  {plan.price}<span className="text-lg text-white/40">{plan.period}</span>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-black text-sm transition-colors ${plan.highlight ? "bg-emerald-500 hover:bg-emerald-400 text-black" : "border border-white/20 hover:border-emerald-500/50"}`}>
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          START IN <span className="text-emerald-400">MINUTES.</span><br />SCALE FOREVER.
        </h2>
        <p className="text-white/40 mb-10">14-day free trial. No credit card required.</p>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-black px-12 py-5 rounded-full text-xl transition-all hover:scale-105">
          Get Started Free →
        </button>
      </section>

      <footer className="py-8 text-center text-white/30 text-sm border-t border-white/10">
        © 2026 PulseHQ · Built by <span className="text-emerald-400">Djordje Resolved</span>
      </footer>
    </div>
  );
}
