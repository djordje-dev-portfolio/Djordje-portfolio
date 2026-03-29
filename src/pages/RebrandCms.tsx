import { useState } from "react";
import { ArrowLeft, Plus, Trash2, Save, Briefcase, Users, Award } from "lucide-react";
import { useLocation } from "wouter";

type Client = { id: number; company: string; sector: string; before: string; after: string; active: boolean };
type Service = { id: number; title: string; description: string };

const defaultClients: Client[] = [
  { id: 1, company: "NexaCorp", sector: "Finance", before: "Outdated serif logo, poor contrast", after: "Bold modern wordmark, high impact", active: true },
  { id: 2, company: "Bloom Co.", sector: "Beauty", before: "Cluttered website, 8% conversion", after: "Clean UX, 34% conversion rate", active: true },
  { id: 3, company: "Atlas Labs", sector: "Tech", before: "Generic brand, low brand recall", after: "Distinct visual identity, +220% recall", active: true },
];

const defaultServices: Service[] = [
  { id: 1, title: "Visual Identity", description: "Logo, typography, colors, iconography — the complete visual language of your brand." },
  { id: 2, title: "Brand Strategy", description: "Positioning, messaging, tone of voice, and competitor differentiation mapped out." },
  { id: 3, title: "Digital Presence", description: "Website, social templates, email design, ad creatives — all on-brand and conversion-ready." },
];

export default function RebrandCms() {
  const [, navigate] = useLocation();
  const [clients, setClients] = useState<Client[]>(() => {
    const s = localStorage.getItem("cms_rebrand_clients");
    return s ? JSON.parse(s) : defaultClients;
  });
  const [services, setServices] = useState<Service[]>(() => {
    const s = localStorage.getItem("cms_rebrand_services");
    return s ? JSON.parse(s) : defaultServices;
  });
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState<"clients" | "services" | "settings">("clients");
  const [saved, setSaved] = useState(false);

  const [heroHeadline, setHeroHeadline] = useState(() => localStorage.getItem("cms_rebrand_headline") || "WE MAKE BRANDS ICONIC.");
  const [agencyName, setAgencyName] = useState(() => localStorage.getItem("cms_rebrand_agency") || "Forma Studio");

  const save = () => {
    localStorage.setItem("cms_rebrand_clients", JSON.stringify(clients));
    localStorage.setItem("cms_rebrand_services", JSON.stringify(services));
    localStorage.setItem("cms_rebrand_headline", heroHeadline);
    localStorage.setItem("cms_rebrand_agency", agencyName);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addClient = () => {
    const c: Client = { id: Date.now(), company: "New Client", sector: "Industry", before: "", after: "", active: true };
    setClients(prev => [...prev, c]);
    setEditingClient(c);
    setEditingService(null);
  };

  const addService = () => {
    const s: Service = { id: Date.now(), title: "New Service", description: "" };
    setServices(prev => [...prev, s]);
    setEditingService(s);
    setEditingClient(null);
  };

  const updateClient = (field: keyof Client, value: string | boolean) => {
    if (!editingClient) return;
    const updated = { ...editingClient, [field]: value };
    setEditingClient(updated);
    setClients(prev => prev.map(c => c.id === updated.id ? updated : c));
  };

  const updateService = (field: keyof Service, value: string) => {
    if (!editingService) return;
    const updated = { ...editingService, [field]: value };
    setEditingService(updated);
    setServices(prev => prev.map(s => s.id === updated.id ? updated : s));
  };

  return (
    <div className="min-h-screen bg-[#080812] text-white font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0e0e1e] border-r border-white/10 flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-violet-400" />
            </div>
            <span className="font-black text-sm tracking-widest">FORMA CMS</span>
          </div>
          <div className="text-xs text-white/30 mt-1">Admin Dashboard</div>
        </div>
        <nav className="p-4 flex flex-col gap-1 flex-grow">
          {[
            { key: "clients", label: "Case Studies", icon: Users },
            { key: "services", label: "Services", icon: Award },
            { key: "settings", label: "Site Settings", icon: Briefcase },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${activeTab === key ? "bg-violet-500/10 text-violet-400" : "text-white/50 hover:text-white hover:bg-white/5"}`}
            >
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={() => navigate("/rebrand")} className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors w-full">
            <ArrowLeft className="w-3 h-3" /> Back to Site
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-[#0e0e1e] border-b border-white/10 px-8 py-4 flex items-center justify-between flex-shrink-0">
          <h1 className="font-black text-lg">
            {activeTab === "clients" ? "Case Studies" : activeTab === "services" ? "Services" : "Site Settings"}
          </h1>
          <div className="flex items-center gap-3">
            {saved && <span className="text-xs text-emerald-400 font-bold">✓ Saved!</span>}
            <button onClick={save} className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black px-4 py-2 rounded-full text-sm transition-colors">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </header>

        {activeTab === "clients" && (
          <div className="flex flex-1 overflow-hidden">
            <div className="w-72 border-r border-white/10 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40 font-bold">{clients.length} CLIENTS</span>
                <button onClick={addClient} className="flex items-center gap-1 bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 px-3 py-1.5 rounded-full text-xs font-bold transition-colors">
                  <Plus className="w-3 h-3" /> Add
                </button>
              </div>
              <div className="overflow-y-auto flex-1">
                {clients.map(c => (
                  <div
                    key={c.id}
                    onClick={() => { setEditingClient(c); setEditingService(null); }}
                    className={`flex items-center gap-3 px-4 py-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors ${editingClient?.id === c.id ? "bg-violet-500/5 border-l-2 border-l-violet-500" : ""}`}
                  >
                    <div className="flex-1">
                      <div className="text-sm font-medium">{c.company}</div>
                      <div className="text-xs text-violet-400">{c.sector}</div>
                    </div>
                    <button onClick={e => { e.stopPropagation(); setClients(prev => prev.filter(x => x.id !== c.id)); if (editingClient?.id === c.id) setEditingClient(null); }} className="text-white/20 hover:text-red-400 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              {editingClient ? (
                <div className="max-w-lg">
                  <h2 className="text-xl font-black mb-6">Edit Case Study</h2>
                  <div className="flex flex-col gap-5">
                    {[
                      { field: "company", label: "Company Name" },
                      { field: "sector", label: "Industry Sector" },
                      { field: "before", label: "Challenge (Before)" },
                      { field: "after", label: "Result (After)" },
                    ].map(({ field, label }) => (
                      <div key={field}>
                        <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">{label.toUpperCase()}</label>
                        <input
                          value={editingClient[field as keyof Client] as string}
                          onChange={e => updateClient(field as keyof Client, e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/50 transition-colors"
                        />
                      </div>
                    ))}
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="active" checked={!!editingClient.active} onChange={e => updateClient("active", e.target.checked)} className="w-4 h-4 accent-violet-500" />
                      <label htmlFor="active" className="text-sm text-white/70">Published</label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-white/20">
                  <Users className="w-12 h-12 mb-4" />
                  <p className="text-sm">Select a case study to edit</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="flex flex-1 overflow-hidden">
            <div className="w-72 border-r border-white/10 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40 font-bold">{services.length} SERVICES</span>
                <button onClick={addService} className="flex items-center gap-1 bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 px-3 py-1.5 rounded-full text-xs font-bold transition-colors">
                  <Plus className="w-3 h-3" /> Add
                </button>
              </div>
              <div className="overflow-y-auto flex-1">
                {services.map(s => (
                  <div
                    key={s.id}
                    onClick={() => { setEditingService(s); setEditingClient(null); }}
                    className={`flex items-center gap-3 px-4 py-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors ${editingService?.id === s.id ? "bg-violet-500/5 border-l-2 border-l-violet-500" : ""}`}
                  >
                    <div className="flex-1">
                      <div className="text-sm font-medium">{s.title}</div>
                    </div>
                    <button onClick={e => { e.stopPropagation(); setServices(prev => prev.filter(x => x.id !== s.id)); if (editingService?.id === s.id) setEditingService(null); }} className="text-white/20 hover:text-red-400 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              {editingService ? (
                <div className="max-w-lg">
                  <h2 className="text-xl font-black mb-6">Edit Service</h2>
                  <div className="flex flex-col gap-5">
                    <div>
                      <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">SERVICE TITLE</label>
                      <input value={editingService.title} onChange={e => updateService("title", e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/50 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">DESCRIPTION</label>
                      <textarea value={editingService.description} onChange={e => updateService("description", e.target.value)} rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/50 transition-colors resize-none" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-white/20">
                  <Award className="w-12 h-12 mb-4" />
                  <p className="text-sm">Select a service to edit</p>
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
                <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">AGENCY NAME</label>
                <input value={agencyName} onChange={e => setAgencyName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/50 transition-colors" />
              </div>
              <div>
                <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">HERO HEADLINE</label>
                <input value={heroHeadline} onChange={e => setHeroHeadline(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/50 transition-colors" />
              </div>
              <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/20 text-xs text-white/50">
                Changes apply when you click <span className="text-violet-400 font-bold">Save Changes</span> above.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
