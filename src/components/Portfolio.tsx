import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    tags: ["React", "Next.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    gradient: "from-cyan-500 to-blue-600",
    link: "/ecommerce",
    external: false,
  },
  {
    id: 2,
    title: "Corporate Rebrand",
    tags: ["UI/UX", "Branding", "Figma"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    gradient: "from-purple-500 to-pink-600",
    link: "/rebrand",
    external: false,
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    gradient: "from-primary to-secondary",
    link: "/saas",
    external: false,
  },
  {
    id: 4,
    title: "Gastronomy Reimagined",
    tags: ["React", "Tailwind CSS", "Luxury Design", "Vite"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
    gradient: "from-amber-600 to-yellow-500",
    link: "https://gastro-six-lime.vercel.app/",
    external: true,
  },
  {
    id: 5,
    title: "NeonPC Store",
    tags: ["React", "Vite", "Tailwind CSS", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1593640408182-31c228f2c6f9?w=800&q=80&auto=format&fit=crop",
    gradient: "from-cyan-400 to-violet-600",
    link: "https://neon-ten-ashen.vercel.app/",
    external: true,
  },
  {
    id: 6,
    title: "Aria Travel — Turistička Agencija",
    tags: ["React", "Vite", "Tailwind CSS", "Travel & Tourism"],
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80&auto=format&fit=crop",
    gradient: "from-blue-500 to-yellow-400",
    link: "https://aria-travel.vercel.app/",
    external: true,
  },
];

export default function Portfolio() {
  const [, navigate] = useLocation();

  return (
    <section id="portfolio" className="py-24 md:py-32 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <h2 className="text-sm font-sans font-bold text-secondary tracking-[0.3em] uppercase mb-4 glow-text-cyan" style={{ color: "hsl(var(--secondary))", textShadow: "0 0 20px hsla(var(--secondary) / 0.5)"}}>Selected Projects</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">FEATURED WORK</h3>
          </div>
          <button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary font-display font-bold text-lg flex items-center gap-2 hover:text-white transition-colors group"
          >
            VIEW ALL PROJECTS
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 flex flex-col h-full"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider font-sans">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-display font-bold text-foreground mb-4">{project.title}</h4>

                <div className="mt-auto pt-6">
                  {project.external ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold font-sans text-primary hover:text-white transition-colors"
                    >
                      View Live Project <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => navigate(project.link)}
                      className="flex items-center gap-2 text-sm font-bold font-sans text-primary hover:text-white transition-colors"
                    >
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
