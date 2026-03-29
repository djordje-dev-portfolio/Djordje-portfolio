import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleNetwork from "@/components/ParticleNetwork";

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground font-sans">
      <ParticleNetwork />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
