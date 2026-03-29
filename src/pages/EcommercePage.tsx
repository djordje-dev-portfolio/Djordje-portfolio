import { ArrowLeft, ShoppingCart, Star, Truck, Shield, RefreshCw, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";

const products = [
  { id: 1, name: "Premium Wireless Headphones", price: "$299", rating: 4.9, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80&auto=format&fit=crop" },
  { id: 2, name: "Minimalist Leather Watch", price: "$459", rating: 4.8, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80&auto=format&fit=crop" },
  { id: 3, name: "Organic Skincare Set", price: "$128", rating: 4.7, img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80&auto=format&fit=crop" },
  { id: 4, name: "Smart Home Speaker", price: "$199", rating: 4.9, img: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&q=80&auto=format&fit=crop" },
  { id: 5, name: "Silk Pillow Collection", price: "$89", rating: 4.6, img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80&auto=format&fit=crop" },
  { id: 6, name: "Cold Brew Coffee Maker", price: "$74", rating: 4.8, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80&auto=format&fit=crop" },
];

export default function EcommercePage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d0d0d]/90 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </button>
        <span className="text-xl font-bold tracking-widest text-white">LUXE<span className="text-cyan-400">SHOP</span></span>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/ecommerce/cms")} className="text-xs text-white/40 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 px-3 py-2 rounded-full transition-colors font-medium">
            Storefront
          </button>
          <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition-colors text-black font-bold px-4 py-2 rounded-full text-sm">
            <ShoppingCart className="w-4 h-4" /> Cart (0)
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-purple-900/20" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest mb-6">
              NEW COLLECTION 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
              SHOP.<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #06b6d4" }}>DISCOVER.</span><br />
              CONVERT.
            </h1>
            <p className="text-white/60 text-lg mb-10 max-w-md">
              Curated premium products for the modern lifestyle. Free shipping on all orders over $150.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black rounded-full transition-all hover:scale-105 flex items-center gap-2">
                Shop Now <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-cyan-500/50 text-white rounded-full transition-all">
                View Lookbook
              </button>
            </div>
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
              {[["12K+", "Products"], ["98%", "Satisfaction"], ["Free", "Shipping"]].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-black text-cyan-400">{val}</div>
                  <div className="text-xs text-white/40 tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="w-full aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80&auto=format&fit=crop" alt="hero" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#111] border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Truck className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs text-white/40">Free Delivery</div>
                <div className="text-sm font-bold">Orders over $150</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Truck, label: "Free Shipping", sub: "Orders over $150" },
            { icon: Shield, label: "Secure Payment", sub: "256-bit SSL" },
            { icon: RefreshCw, label: "Easy Returns", sub: "30-day policy" },
            { icon: Star, label: "Top Rated", sub: "4.9 avg. rating" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="font-bold text-sm">{label}</div>
                <div className="text-xs text-white/40">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">FEATURED <span className="text-cyan-400">PRODUCTS</span></h2>
            <p className="text-white/40">Hand-picked for quality and style</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="group bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-2 rounded-full text-sm flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                    ))}
                    <span className="text-xs text-white/40 ml-1">{p.rating}</span>
                  </div>
                  <h3 className="font-bold mb-1">{p.name}</h3>
                  <div className="text-cyan-400 font-black text-xl">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
        <h2 className="text-5xl font-black mb-4">JOIN THE <span className="text-cyan-400">COMMUNITY</span></h2>
        <p className="text-white/50 mb-8">Get exclusive deals, early access, and style inspiration.</p>
        <div className="flex max-w-md mx-auto gap-3">
          <input type="email" placeholder="Enter your email" className="flex-1 bg-white/5 border border-white/20 rounded-full px-5 py-3 text-sm outline-none focus:border-cyan-500 transition-colors" />
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-full transition-colors">Subscribe</button>
        </div>
      </section>

      <footer className="py-8 text-center text-white/30 text-sm border-t border-white/10">
        © 2026 LuxeShop · Built by <span className="text-cyan-400">Djordje Resolved</span>
      </footer>
    </div>
  );
}
