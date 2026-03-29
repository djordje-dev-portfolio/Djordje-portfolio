import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Quote, Star, Code2, Layers, Zap, Globe } from "lucide-react";
import { useLocation } from "wouter";

const testimonials = [
  {
    name: "Marko Petrović",
    role: "CEO, NovaBrand Agency",
    avatar: "MP",
    color: "from-cyan-500 to-blue-600",
    text: "Djordje isporučio sajt koji nadmašuje sve što smo imali sa WordPressom. Brzina, dizajn, konverzija — sve na visokom nivou. Jedva čekamo sledeći projekat.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Digital",
    avatar: "SM",
    color: "from-purple-500 to-pink-500",
    text: "Finally a developer who gets both design AND performance. Our bounce rate dropped 40% and conversions went up overnight. Absolutely worth every cent.",
    rating: 5,
  },
  {
    name: "Ivan Jovanović",
    role: "Marketing Director, Atlas Labs",
    avatar: "IJ",
    color: "from-amber-500 to-orange-500",
    text: "Prešli smo sa sporog WordPress sajta na modernu React platformu. Klijenti odmah primetili razliku. Djordje zna šta radi i isporučuje na vreme.",
    rating: 5,
  },
  {
    name: "Elena Kovač",
    role: "E-Commerce Owner, LuxeStore",
    avatar: "EK",
    color: "from-emerald-500 to-teal-500",
    text: "Our online store now loads in under 1 second and looks stunning on every device. Djordje turned our outdated site into a revenue machine.",
    rating: 5,
  },
];

const relatedProjects = [
  {
    title: "E-Commerce Platform",
    desc: "Modern shopping experience with real-time cart and Stripe integration.",
    tags: ["React", "Stripe"],
    color: "from-cyan-500 to-blue-600",
    link: "/ecommerce",
    img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Corporate Rebrand",
    desc: "Full brand identity system for a finance company — logo to digital.",
    tags: ["UI/UX", "Branding"],
    color: "from-purple-500 to-pink-600",
    link: "/rebrand",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "SaaS Dashboard",
    desc: "Analytics platform with live metrics, pricing tiers, and team management.",
    tags: ["React", "TypeScript"],
    color: "from-emerald-500 to-teal-600",
    link: "/saas",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
  },
];

const skills = [
  { icon: Code2, label: "React / Next.js", level: 95 },
  { icon: Layers, label: "UI/UX Design", level: 88 },
  { icon: Globe, label: "SEO & Performance", level: 90 },
  { icon: Zap, label: "Tailwind / CSS", level: 97 },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "0", label: "WordPress Installs" },
];

export default function AboutPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#050a14] text-white font-sans overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050a14]/90 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </button>
        <span className="text-sm font-black tracking-widest text-white/40 uppercase">About Djordje</span>
        <button onClick={() => navigate("/#contact")} className="border border-cyan-500/40 hover:bg-cyan-500/10 text-cyan-400 font-bold px-4 py-2 rounded-full text-sm transition-colors">
          Let's Talk
        </button>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center px-6 pt-24 pb-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest mb-8">
              FULL STACK DEVELOPER & DIGITAL CREATOR
            </span>

            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-6">
              HI, I'M<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #00d4ff" }}>DJORDJE.</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
              Web developer i digitalni kreator iz Loznice. Gradim moderne, brze i konverziju-optimizovane web platforme — bez kompromisa sa dizajnom.
            </p>

            {/* WordPress quote callout */}
            <div className="relative p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 mb-10 overflow-hidden">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-cyan-500/20" />
              <p className="text-lg font-bold text-white leading-snug">
                "If you're tired of WordPress, and looking for a modern, reliable low-code solution —
                <span className="text-cyan-400"> you're on the right place.</span>"
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => document.querySelector("#my-work")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-black px-6 py-3 rounded-full transition-all hover:scale-105 text-sm"
              >
                See My Work <ArrowUpRight className="w-4 h-4" />
              </button>
              <button onClick={() => { navigate("/"); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="flex items-center gap-2 border border-white/20 hover:border-cyan-500/50 text-white px-6 py-3 rounded-full transition-all text-sm">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right — avatar + stats */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col items-center gap-8">
            {/* Avatar card */}
            <div className="relative w-64 h-64 rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_60px_rgba(0,212,255,0.1)]">
              <div className="w-full h-full bg-gradient-to-br from-cyan-900/40 to-[#050a14] flex items-center justify-center">
                <div className="text-8xl font-black text-transparent" style={{ WebkitTextStroke: "3px #00d4ff" }}>D</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050a14] to-transparent">
                <div className="font-black text-lg">Djordje M.</div>
                <div className="text-xs text-cyan-400 font-bold tracking-wider">Loznica / Srbija</div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {stats.map(({ value, label }) => (
                <div key={label} className="p-5 rounded-2xl border border-white/10 bg-white/5 text-center hover:border-cyan-500/30 transition-colors">
                  <div className="text-3xl font-black text-cyan-400">{value}</div>
                  <div className="text-xs text-white/40 mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
              WHAT I <span className="text-transparent" style={{ WebkitTextStroke: "2px #00d4ff" }}>BRING</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map(({ icon: Icon, label, level }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm">{label}</span>
                      <span className="text-cyan-400 text-xs font-black">{level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#070d1a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              CLIENT <span className="text-transparent" style={{ WebkitTextStroke: "2px #00d4ff" }}>VOICES</span>
            </h2>
            <p className="text-white/40">Real feedback from people I've worked with</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300 flex flex-col gap-5 relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-black text-white flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-white/40">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PROJECTS ─────────────────────────────── */}
      <section id="my-work" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">RELATED <span className="text-transparent" style={{ WebkitTextStroke: "2px #00d4ff" }}>PROJECTS</span></h2>
            <p className="text-white/40">A few things I've built recently — click to open the full project</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 bg-white/5 flex flex-col"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${p.color}`} />
                <div className="relative h-44 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#050a14]/40 group-hover:bg-[#050a14]/10 transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-black text-lg mb-2">{p.title}</h3>
                  <p className="text-white/50 text-sm mb-6 flex-grow">{p.desc}</p>
                  <button
                    onClick={() => navigate(p.link)}
                    className={`w-full py-3 rounded-xl bg-gradient-to-r ${p.color} text-white font-black text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-32 px-6 text-center border-t border-white/10 bg-[#070d1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-4 leading-none">
            LET'S BUILD<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #00d4ff" }}>SOMETHING.</span>
          </h2>
          <p className="text-white/40 mb-10 text-lg">Drop me a message and let's turn your idea into a product.</p>
          <a
            href="mailto:djordje.milosavljevic89@gmail.com"
            className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105"
          >
            djordje.milosavljevic89@gmail.com <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-white/30 text-sm border-t border-white/10">
        © 2026 Djordje Resolved · Loznica / Srbija
      </footer>
    </div>
  );
}
