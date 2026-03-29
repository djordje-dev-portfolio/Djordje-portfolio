import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Premium Support" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-card/60 backdrop-blur-sm border-y border-border relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x divide-border/0 md:divide-border/50">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2 drop-shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-sans font-medium text-foreground/80 tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
