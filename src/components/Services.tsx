import { Code2, PenTool, TrendingUp, Sparkles, Layers, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "High-performance, scalable websites and applications built with modern frameworks like React, Next.js, and Node.js.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "User-centric interface designs that engage visitors and elevate your brand identity with pixel-perfect precision.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Marketing",
    description: "Data-driven strategies to boost your visibility, drive organic traffic, and convert leads into loyal customers.",
  },
  {
    icon: Sparkles,
    title: "Branding",
    description: "Crafting memorable visual identities, logos, and style guides that resonate with your target audience.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    description: "Complex, feature-rich SaaS platforms and custom dashboards tailored to streamline your business operations.",
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Expert technical guidance and architectural planning to ensure your digital product scales successfully.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-sans font-bold text-primary tracking-[0.3em] uppercase mb-4 glow-text-cyan">Expertise</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">WHAT I DO</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <h4 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
