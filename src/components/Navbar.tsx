import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [, navigate] = useLocation();

  const navLinks = [
    { name: "HOME", href: "#home", scroll: true },
    { name: "ABOUT", href: "/about", scroll: false },
    { name: "SERVICES", href: "#services", scroll: true },
    { name: "PORTFOLIO", href: "#portfolio", scroll: true },
    { name: "CONTACT", href: "#contact", scroll: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-primary/20 py-4 shadow-lg shadow-black/50"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-10 h-10 border-2 border-primary rounded-lg text-primary font-display font-bold text-xl group-hover:glow-box-cyan transition-all duration-300 bg-background/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
            <span className="relative z-10 group-hover:scale-110 transition-transform">D</span>
          </div>
          <div className="flex flex-col uppercase leading-none font-display font-bold tracking-wider">
            <span className="text-foreground text-lg">DJORDJE</span>
            <span className="text-primary text-sm glow-text-cyan">RESOLVED</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                if (link.scroll) scrollTo(link.href);
                else navigate(link.href);
              }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-white transition-all duration-300 glow-box-cyan flex items-center gap-2"
          >
            LET'S TALK
            <span className="text-lg leading-none">&rsaquo;</span>
          </button>
        </div>

        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-primary/20 py-4 flex flex-col items-center gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                if (link.scroll) scrollTo(link.href);
                else navigate(link.href);
                setMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors tracking-wide cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { scrollTo("#contact"); setMobileMenuOpen(false); }}
            className="mt-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-base glow-box-cyan"
          >
            LET'S TALK &rsaquo;
          </button>
        </div>
      )}
    </header>
  );
}
