import { Link } from "wouter";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Small Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-8 h-8 border border-primary rounded text-primary font-display font-bold text-sm bg-background/50">
              <span className="relative z-10 group-hover:scale-110 transition-transform">D</span>
            </div>
            <div className="flex font-display font-bold tracking-wider text-sm gap-1">
              <span className="text-foreground">DJORDJE</span>
              <span className="text-primary glow-text-cyan">RESOLVED</span>
            </div>
          </button>

          {/* Copyright */}
          <div className="text-muted-foreground font-sans text-sm text-center">
            &copy; {new Date().getFullYear()} Djordje Resolved. All rights reserved.
          </div>

          {/* Mini Nav */}
          <div className="flex items-center gap-6 text-sm font-medium text-foreground/60">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-primary transition-colors cursor-pointer">Services</a>
            <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-primary transition-colors cursor-pointer">Portfolio</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
