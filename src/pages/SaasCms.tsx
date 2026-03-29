import { useState } from "react";
import { ArrowLeft, Plus, Trash2, Save, BarChart2, DollarSign, Zap, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

type Metric = { id: number; label: string; value: string; change: string; positive: boolean };
type Plan = { id: number; name: string; price: string; period: string; features: string; highlight: boolean };

const defaultMetrics: Metric[] = [
  { id: 1, label: "Total Revenue", value: "$284,920", change: "+18.2%", positive: true },
  { id: 2, label: "Active Users", value: "12,847", change: "+5.4%", positive: true },
  { id: 3, label: "Conversion", value: "4.73%", change: "+2.1%", positive: true },
];

const defaultPlans: Plan[] = [
  { id: 1, name: "Starter", price: "$29", period: "/mo", features: "5 team members\n10K events/mo\n7-day retention\nBasic analytics", highlight: false },
  { id: 2, name: "Pro", price: "$99", period: "/mo", features: "Unlimited members\n1M events/mo\n90-day retention\nAdvanced analytics\nPriority support", highlight: true },
  { id: 3, name: "Enterprise", price: "Custom", period: "", features: "Everything in Pro\nUnlimited retention\nDedicated infra\nSLA guarantee\nWhite-glove onboarding", highlight: false },
];

export default function SaasCms() {
  const [, navigate] = useLocation();
  const [metrics, setMetrics] = useState<Metric[]>(() => {
    const s = localStorage.getItem("cms_saas_metrics");
    return s ? JSON.parse(s) : defaultMetrics;
  });
  const [plans, setPlans] = useState<Plan[]>(() => {
    const s = localStorage.getItem("cms_saas_plans");
    return s ? JSON.parse(s) : defaultPlans;
  });
  const [editingMetric, setEditingMetric] = useState<Metric | null>(null);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);
  const [activeTab, setActiveTab] = useState<"metrics" | "plans" | "settings">("metrics");
  const [saved, setSaved] = useState(false);

  const [siteName, setSiteName] = useState(() => localStorage.getItem("cms_saas_name") || "PulseHQ");
  const [heroText, setHeroText] = useState(() => localStorage.getItem("cms_saas_hero") || "THE ANALYTICS PLATFORM BUILT TO SCALE.");

  const save = () => {
    localStorage.setItem("cms_saas_metrics", JSON.stringify(metrics));
    localStorage.setItem("cms_saas_plans", JSON.stringify(plans));
    localStorage.setItem("cms_saas_name", siteName);
    localStorage.setItem("cms_saas_hero", heroText);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addMetric = () => {
    const m: Metric = { id: Date.now(), label: "New Metric", value: "0", change: "+0%", positive: true };
    setMetrics(prev => [...prev, m]);
    setEditingMetric(m);
    setEditingPlan(null);
  };

  const addPlan = () => {
    const p: Plan = { id: Date.now(), name: "New Plan", price: "$0", period: "/mo", features: "Feature 1\nFeature 2", highlight: false };
    setPlans(prev => [...prev, p]);
    setEditingPlan(p);
    setEditingMetric(null);
  };

  const updateMetric = (field: keyof Metric, value: string | boolean) => {
    if (!editingMetric) return;
    const updated = { ...editingMetric, [field]: value };
    setEditingMetric(updated);
    setMetrics(prev => prev.map(m => m.id === updated.id ? updated : m));
  };

  const updatePlan = (field: keyof Plan, value: string | boolean) => {
    if (!editingPlan) return;
    const updated = { ...editingPlan, [field]: value };
    setEditingPlan(updated);
    setPlans(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  return (
    <div className="min-h-screen bg-[#07090f] text-white font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0b0e18] border-r border-white/10 flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="font-black text-sm tracking-widest">PULSEHQ CMS</span>
          </div>
          <div className="text-xs text-white/30 mt-1">Admin Dashboard</div>
        </div>
        <nav className="p-4 flex flex-col gap-1 flex-grow">
          {[
            { key: "metrics", label: "Dashboard Metrics", icon: BarChart2 },
            { key: "plans", label: "Pricing Plans", icon: DollarSign },
            { key: "settings", label: "Site Settings", icon: Zap },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${activeTab === key ? "bg-emerald-500/10 text-emerald-400" : "text-white/50 hover:text-white hover:bg-white/5"}`}
            >
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={() => navigate("/saas")} className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors w-full">
            <ArrowLeft className="w-3 h-3" /> Back to Site
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-[#0b0e18] border-b border-white/10 px-8 py-4 flex items-center justify-between flex-shrink-0">
          <h1 className="font-black text-lg">
            {activeTab === "metrics" ? "Dashboard Metrics" : activeTab === "plans" ? "Pricing Plans" : "Site Settings"}
          </h1>
          <div className="flex items-center gap-3">
            {saved && <span className="text-xs text-emerald-400 font-bold">✓ Saved!</span>}
            <button onClick={save} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-black px-4 py-2 rounded-full text-sm transition-colors">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </header>

        {activeTab === "metrics" && (
          <div className="flex flex-1 overflow-hidden">
            <div className="w-72 border-r border-white/10 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40 font-bold">{metrics.length} METRICS</span>
                <button onClick={addMetric} className="flex items-center gap-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-bold transition-colors">
                  <Plus className="w-3 h-3" /> Add
                </button>
              </div>
              <div className="overflow-y-auto flex-1">
                {metrics.map(m => (
                  <div
                    key={m.id}
                    onClick={() => { setEditingMetric(m); setEditingPlan(null); }}
                    className={`flex items-center gap-3 px-4 py-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors ${editingMetric?.id === m.id ? "bg-emerald-500/5 border-l-2 border-l-emerald-500" : ""}`}
                  >
                    <div className="flex-1">
                      <div className="text-sm font-medium">{m.label}</div>
                      <div className="text-xs text-emerald-400">{m.value}</div>
                    </div>
                    <button onClick={e => { e.stopPropagation(); setMetrics(prev => prev.filter(x => x.id !== m.id)); if (editingMetric?.id === m.id) setEditingMetric(null); }} className="text-white/20 hover:text-red-400 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              {editingMetric ? (
                <div className="max-w-lg">
                  <h2 className="text-xl font-black mb-6">Edit Metric</h2>
                  <div className="flex flex-col gap-5">
                    {[
                      { field: "label", label: "Metric Label" },
                      { field: "value", label: "Current Value" },
                      { field: "change", label: "Change (e.g. +18.2%)" },
                    ].map(({ field, label }) => (
                      <div key={field}>
                        <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">{label.toUpperCase()}</label>
                        <input
                          value={editingMetric[field as keyof Metric] as string}
                          onChange={e => updateMetric(field as keyof Metric, e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500/50 transition-colors"
                        />
                      </div>
                    ))}
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="positive" checked={!!editingMetric.positive} onChange={e => updateMetric("positive", e.target.checked)} className="w-4 h-4 accent-emerald-500" />
                      <label htmlFor="positive" className="text-sm text-white/70">Positive trend (green)</label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-white/20">
                  <BarChart2 className="w-12 h-12 mb-4" />
                  <p className="text-sm">Select a metric to edit</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "plans" && (
          <div className="flex flex-1 overflow-hidden">
            <div className="w-72 border-r border-white/10 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40 font-bold">{plans.length} PLANS</span>
                <button onClick={addPlan} className="flex items-center gap-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-bold transition-colors">
                  <Plus className="w-3 h-3" /> Add
                </button>
              </div>
              <div className="overflow-y-auto flex-1">
                {plans.map(p => (
                  <div
                    key={p.id}
                    onClick={() => { setEditingPlan(p); setEditingMetric(null); }}
                    className={`flex items-center gap-3 px-4 py-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors ${editingPlan?.id === p.id ? "bg-emerald-500/5 border-l-2 border-l-emerald-500" : ""}`}
                  >
                    <div className="flex-1">
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs text-emerald-400">{p.price}{p.period}</div>
                    </div>
                    {p.highlight && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                    <button onClick={e => { e.stopPropagation(); setPlans(prev => prev.filter(x => x.id !== p.id)); if (editingPlan?.id === p.id) setEditingPlan(null); }} className="text-white/20 hover:text-red-400 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              {editingPlan ? (
                <div className="max-w-lg">
                  <h2 className="text-xl font-black mb-6">Edit Plan</h2>
                  <div className="flex flex-col gap-5">
                    {[
                      { field: "name", label: "Plan Name" },
                      { field: "price", label: "Price (e.g. $99 or Custom)" },
                      { field: "period", label: "Period (e.g. /mo or leave blank)" },
                    ].map(({ field, label }) => (
                      <div key={field}>
                        <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">{label.toUpperCase()}</label>
                        <input
                          value={editingPlan[field as keyof Plan] as string}
                          onChange={e => updatePlan(field as keyof Plan, e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500/50 transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">FEATURES (one per line)</label>
                      <textarea
                        value={editingPlan.features}
                        onChange={e => updatePlan("features", e.target.value)}
                        rows={6}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500/50 transition-colors resize-none font-mono"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="highlight" checked={!!editingPlan.highlight} onChange={e => updatePlan("highlight", e.target.checked)} className="w-4 h-4 accent-emerald-500" />
                      <label htmlFor="highlight" className="text-sm text-white/70">Highlight as "Most Popular"</label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-white/20">
                  <DollarSign className="w-12 h-12 mb-4" />
                  <p className="text-sm">Select a plan to edit</p>
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
                <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">SITE NAME</label>
                <input value={siteName} onChange={e => setSiteName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500/50 transition-colors" />
              </div>
              <div>
                <label className="text-xs text-white/50 font-bold tracking-widest mb-2 block">HERO HEADLINE</label>
                <textarea value={heroText} onChange={e => setHeroText(e.target.value)} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500/50 transition-colors resize-none" />
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-white/50">
                Changes apply when you click <span className="text-emerald-400 font-bold">Save Changes</span> above.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
