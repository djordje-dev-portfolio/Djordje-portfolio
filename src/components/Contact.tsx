import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSending(true);
      setIsSuccess(false);

      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      );

      setName("");
      setEmail("");
      setMessage("");
      setIsSuccess(true);
      toast({
        title: "Uspesno",
        description: "Poruka je poslata.",
      });
    } catch {
      setIsSuccess(false);
      toast({
        title: "Greska",
        description: "Slanje poruke nije uspelo. Pokusaj ponovo.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-3xl border border-border p-8 md:p-16 lg:p-20 relative overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Left text */}
            <div className="flex flex-col">
              <h2 className="text-5xl md:text-7xl font-display font-black text-foreground mb-6 leading-tight">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  START?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground font-sans max-w-md mb-10">
                Let's build something amazing together. Drop a message to discuss your next big project, ideas, or just to say hi.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-sans">Email</p>
                    <a href="mailto:djordje.milosavljevic89@gmail.com" className="text-foreground font-bold hover:text-primary transition-colors">djordje.milosavljevic89@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-sans">Location</p>
                    <p className="text-foreground font-bold">Loznica / Srbija</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              ref={formRef}
              onSubmit={handleContactSubmit}
              className="flex flex-col gap-5 bg-background/50 p-8 rounded-2xl border border-primary/40 glow-box-cyan backdrop-blur-sm"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground/80">Name</label>
                <input 
                  id="name" 
                  name="from_name"
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="bg-background/70 border border-primary/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/60 transition-all glow-box-cyan"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground/80">Email</label>
                <input 
                  id="email" 
                  name="from_email"
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="bg-background/70 border border-primary/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/60 transition-all glow-box-cyan"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground/80">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="bg-background/70 border border-primary/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/60 transition-all resize-none glow-box-cyan"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSending}
                className="group w-full py-4 mt-2 bg-primary text-primary-foreground font-display font-bold text-lg rounded-lg hover:bg-white hover:text-background transition-colors flex items-center justify-center gap-2 glow-box-cyan disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? "SENDING..." : "SEND MESSAGE"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {isSuccess && (
                <p className="text-sm text-primary glow-text-cyan font-semibold text-center">
                  Uspesno
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
