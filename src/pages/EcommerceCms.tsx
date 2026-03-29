import { useState, useEffect } from "react";
import { ArrowLeft, Plus, Trash2, Save, ShoppingBag, Tag, Image as ImageIcon, DollarSign } from "lucide-react";
import { useLocation } from "wouter";

type Product = { id: number; name: string; price: string; category: string; image: string; featured: boolean };

const defaultProducts: Product[] = [
  { id: 1, name: "Premium Wireless Headphones", price: "299", category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", featured: true },
  { id: 2, name: "Minimalist Leather Watch", price: "459", category: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", featured: true },
  { id: 3, name: "Organic Skincare Set", price: "128", category: "Beauty", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80", featured: false },
  { id: 4, name: "Smart Home Speaker", price: "199", category: "Electronics", image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&q=80", featured: true },
];

export default function EcommerceCms() {
  const [, navigate] = useLocation();
  const [products, setProducts] = useState<Product[]>(() => {
    const stored = localStorage.getItem("cms_ecommerce_products");
    return stored ? JSON.parse(stored) : defaultProducts;
  });
  const [editing, setEditing] = useState<Product | null>(null);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "settings">("products");

  const [siteTitle, setSiteTitle] = useState(() => localStorage.getItem("cms_ecommerce_title") || "LuxeShop");
  const [siteTagline, setSiteTagline] = useState(() => localStorage.getItem("cms_ecommerce_tagline") || "Curated premium products for the modern lifestyle.");

  const save = () => {
    localStorage.setItem("cms_ecommerce_products", JSON.stringify(products));
    localStorage.setItem("cms_ecommerce_title", siteTitle);
    localStorage.setItem("cms_ecommerce_tagline", siteTagline);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addProduct = () => {
    const newP: Product = { id: Date.now(), name: "New Product", price: "0", category: "Uncategorized", image: "", featured: false };
    setProducts(prev => [...prev, newP]);
    setEditing(newP);
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    if (editing?.id === id) setEditing(null);
  };

  const updateEditing = (field: keyof Product, value: string | boolean) => {
    if (!editing) return;
    const updated = { ...editing, [field]: value };
    setEditing(updated);
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111] border-r border-white/10 flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="font-black text-sm tracking-widest">LUXESHOP CMS</span>
          </div>
          <div className="text-xs text-white/30 mt-1">Admin Dashboard</div>
        </div>
        <nav className="p-4 flex flex-col gap-1 flex-grow">
          {[
            { key: "products", label: "Products", icon: ShoppingBag },
            { key: "settings", label: "Site Settings", icon: Tag },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${activeTab === key ? "bg-cyan-500/10 text-cyan-400" : "text-white/50 hover:text-white hover:bg-white/5"}`}
            >
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={() => navigate("/ecommerce")} className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors w-full">
            <ArrowLeft className="w-3 h-3" /> Back to Site
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-[#111] border-b border-white/10 px-8 py-4 flex items-center justify-between flex-shrink-0">
          <h1 className="font-black text-lg">{activeTab === "products" ? "Products" : "Site Settings"}</h1>
          <div className="flex items-center gap-3">
            {saved && <span className="text-xs text-emerald-400 font-bold">✓ Saved!</span>}
            <button onClick={save} className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-black px-4 py-2 rounded-full text-sm transition-colors">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </header>

        {activeTab === "products" && (
          <div className="flex flex-1 overflow-hidden">
            {/* Product list */}
            <div className="w-72 border-r border-white/10 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40 font-bold">{products.length} PRODUCTS</span>
                <button onClick={addProduct} className="flex items-center gap-1 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-3 py-1.5 rounded-full text-xs font-bold transition-colors">
                  <Plus className="w-3 h-3" /> Add
                </button>
              </div>
              <div className="overflow-y-auto flex-1">
                {products.map(p => (
                  <div
                    key={p.id}
                    onClick={() => setEditing(p)}
                    className={`flex items-center gap-3 px-4 py-3 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors ${editing?.id === p.id ? "bg-cyan-500/5 border-l-2 border-l-cyan-500" : ""}`}
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                      {p.image ? <img src={p.image} alt={p.name} className="w-full h-full object-cover" /> : <ImageIcon className="w-5 h-5 text-white/20 m-auto" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{p.name}</div>
                      <div className="text-xs text-cyan-400">${p.price}</div>
                    </div>
                    <button onClick={e => { e.stopPropagation(); deleteProduct(p.id); }} className="text-white/20 hover:text-red-400 transition-colors flex-shrink-0">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Editor */}
            <div className="flex-1 overflow-y-auto p-8">
              {editing ? (
                <div className="max-w-lg">
                  <h2 className="text-xl font-black mb-6">Edit Product</h2>
                  <div className="flex flex-col gap-5">
                    {[
                      { field: "name", label: "Product Name", icon: Tag, type: "text" },
                      { field: "price", label: "Price (USD)", icon: DollarSign, type: "number" },
                      { field: "category", label: "Category", icon: ShoppingBag, type: "text" },
                      { field: "image", label: "Image URL", icon: ImageIcon, type: "text" },
                    ].map(({ field, label, icon: Icon, type }) => (
                      <div key={field}>
                        <label className="text-xs text-white/50 font-bold tracking-widest mb-2 flex items-center gap-2">
                          <Icon className="w-3 h-3" /> {label.toUpperCase()}
                        </label>
                        <input
                          type={type}
                          value={editing[field as keyof Product] as string}
                          onChange={e => updateEditing(field as keyof Product, e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-500/50 transition-colors"
                        />
                      </div>
                    ))}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={!!editing.featured}
                        onChange={e => updateEditing("featured", e.target.checked)}
                        className="w-4 h-4 accent-cyan-500"
                      />
                      <label htmlFor="featured" className="text-sm text-white/70">Featured product</label>
                    </div>
                    {editing.image && (
                      <div className="mt-2">
                        <div className="text-xs text-white/30 mb-2">PREVIEW</div>
                        <img src={editing.image} alt="preview" className="w-full h-40 object-cover rounded-xl border border-white/10" />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-white/20">
                  <ShoppingBag className="w-12 h-12 mb-4" />
                  <p className="text-sm">Select a product to edit</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="p-8 overflow-y-auto flex-1">
            <div className="max-w-lg flex flex-col gap-5">
              <h2 className="text-xl font-black mb-2">Site Settings</h2>
              <div>
                <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">SITE TITLE</label>
                <input value={siteTitle} onChange={e => setSiteTitle(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-500/50 transition-colors" />
              </div>
              <div>
                <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">TAGLINE</label>
                <textarea value={siteTagline} onChange={e => setSiteTagline(e.target.value)} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-500/50 transition-colors resize-none" />
              </div>
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-white/50">
                Changes apply when you click <span className="text-cyan-400 font-bold">Save Changes</span> above.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
