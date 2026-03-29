import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollToProjects = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Ambient Gradients */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-widest backdrop-blur-sm uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Full Stack Developer & Digital Creator
          </div>

          <div className="mt-6 flex flex-col font-display font-black leading-[0.85] tracking-tighter w-full">
            <h1 className="text-[12vw] md:text-[8vw] text-stroke-white hover:text-stroke-cyan transition-all duration-500 cursor-default">
              WEB. DEV.
            </h1>
            <h1 className="text-[12vw] md:text-[8vw] text-stroke-white hover:text-stroke-cyan transition-all duration-500 cursor-default">
              GRAPHIC.
            </h1>
            <h1 className="text-[12vw] md:text-[8vw] text-stroke-cyan glow-text-cyan cursor-default">
              MARKETING.
            </h1>
          </div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-xl md:text-3xl font-display font-semibold text-foreground max-w-2xl"
          >
            Building digital experiences that convert.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-muted-foreground font-sans text-sm md:text-base max-w-xl mb-8"
          >
            Web development &middot; UI/UX Design &middot; SEO &middot; Branding &middot; Digital Marketing
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={handleScrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-display font-bold text-lg rounded-full overflow-hidden shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              START A PROJECT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest font-sans rotate-90 mb-6">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
