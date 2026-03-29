import { ArrowLeft, ArrowRight, Zap, Eye, Layers, PenTool, Award, Users } from "lucide-react";
import { useLocation } from "wouter";

const brandColors = [
  { name: "Obsidian", hex: "#1a1a2e" },
  { name: "Royal Violet", hex: "#7c3aed" },
  { name: "Electric Gold", hex: "#f59e0b" },
  { name: "Frost White", hex: "#f0f4ff" },
];

const caseStudies = [
  { before: "Outdated serif logo, poor contrast", after: "Bold modern wordmark, high impact", company: "NexaCorp", sector: "Finance" },
  { before: "Cluttered website, 8% conversion", after: "Clean UX, 34% conversion rate", company: "Bloom Co.", sector: "Beauty" },
  { before: "Generic brand, low brand recall", after: "Distinct visual identity, +220% recall", company: "Atlas Labs", sector: "Tech" },
];

export default function RebrandPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#080812] text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#080812]/90 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-violet-400 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </button>
        <span className="text-xl font-black tracking-widest text-white">FORMA<span className="text-violet-400">STUDIO</span></span>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/rebrand/cms")} className="text-xs text-white/40 hover:text-violet-400 border border-white/10 hover:border-violet-500/30 px-3 py-2 rounded-full transition-colors font-medium">
            Brand Vault
          </button>
          <button className="border border-violet-500/50 hover:bg-violet-500/10 text-violet-400 font-bold px-4 py-2 rounded-full text-sm transition-colors">
            Start Project
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-6 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-violet-400" />
            <span className="text-violet-400 text-sm font-bold tracking-widest">BRAND IDENTITY AGENCY</span>
          </div>
          <h1 className="text-7xl md:text-[120px] font-black leading-none tracking-tighter mb-8">
            WE MAKE<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #7c3aed" }}>BRANDS</span><br />
            ICONIC.
          </h1>
          <p className="text-white/50 text-xl max-w-xl mb-12">
            From identity systems to full digital rebrand strategies — we transform forgettable companies into unforgettable brands.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black px-8 py-4 rounded-full transition-all hover:scale-105">
              See Our Work <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full hover:border-violet-500/50 transition-colors text-white">
              Our Process
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-12 mt-20 pt-10 border-t border-white/10">
            {[["180+", "Brands Transformed"], ["12", "Industry Awards"], ["98%", "Client Retention"]].map(([val, label]) => (
              <div key={label}>
                <div className="text-4xl font-black text-violet-400">{val}</div>
                <div className="text-sm text-white/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color palette demo */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-4">BRAND <span className="text-violet-400">PALETTE</span></h2>
          <p className="text-white/40 mb-12">A sample identity system built for NexaCorp</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandColors.map((c) => (
              <div key={c.name} className="rounded-2xl overflow-hidden border border-white/10">
                <div className="h-32" style={{ backgroundColor: c.hex }} />
                <div className="p-4 bg-[#111]">
                  <div className="font-bold text-sm">{c.name}</div>
                  <div className="text-xs text-white/40">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-[#0c0c1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">WHAT WE <span className="text-violet-400">DELIVER</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: PenTool, title: "Visual Identity", desc: "Logo, typography, colors, iconography — the complete visual language of your brand." },
              { icon: Eye, title: "Brand Strategy", desc: "Positioning, messaging, tone of voice, and competitor differentiation mapped out." },
              { icon: Layers, title: "Digital Presence", desc: "Website, social templates, email design, ad creatives — all on-brand and conversion-ready." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 border border-white/10 rounded-2xl hover:border-violet-500/40 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-black mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16">CASE <span className="text-violet-400">STUDIES</span></h2>
          <div className="flex flex-col gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 border border-white/10 rounded-2xl hover:border-violet-500/30 transition-colors">
                <div>
                  <div className="text-xs text-violet-400 font-bold tracking-widest mb-1">{cs.sector}</div>
                  <div className="text-xl font-black">{cs.company}</div>
                </div>
                <div className="md:col-span-1">
                  <div className="text-xs text-white/40 mb-1">BEFORE</div>
                  <div className="text-sm text-red-400/80">{cs.before}</div>
                </div>
                <div className="md:col-span-1">
                  <div className="text-xs text-white/40 mb-1">AFTER</div>
                  <div className="text-sm text-green-400/80">{cs.after}</div>
                </div>
                <div className="flex items-center justify-end">
                  <button className="text-violet-400 font-bold text-sm flex items-center gap-1 hover:text-white transition-colors">
                    Full Case <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 border-y border-white/10 bg-[#0c0c1a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-12 justify-center items-center">
          {[
            { icon: Award, text: "Awwwards Site of the Year" },
            { icon: Zap, text: "Best Branding Agency 2025" },
            { icon: Users, text: "180+ Happy Clients" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-white/50 hover:text-violet-400 transition-colors">
              <Icon className="w-5 h-5" />
              <span className="text-sm font-bold">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6 bg-gradient-to-br from-violet-900/20 to-transparent">
        <h2 className="text-5xl md:text-7xl font-black mb-6">READY TO <br /><span className="text-violet-400">REBRAND?</span></h2>
        <p className="text-white/40 mb-10 max-w-md mx-auto">Let's build a brand that speaks before you even say a word.</p>
        <button className="bg-violet-600 hover:bg-violet-500 text-white font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105">
          GET A FREE AUDIT →
        </button>
      </section>

      <footer className="py-8 text-center text-white/30 text-sm border-t border-white/10">
        © 2026 Forma Studio · Built by <span className="text-violet-400">Djordje Resolved</span>
      </footer>
    </div>
  );
}
