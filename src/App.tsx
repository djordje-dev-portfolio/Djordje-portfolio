import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import EcommercePage from "@/pages/EcommercePage";
import RebrandPage from "@/pages/RebrandPage";
import SaasPage from "@/pages/SaasPage";
import EcommerceCms from "@/pages/EcommerceCms";
import RebrandCms from "@/pages/RebrandCms";
import SaasCms from "@/pages/SaasCms";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/ecommerce" component={EcommercePage} />
      <Route path="/ecommerce/cms" component={EcommerceCms} />
      <Route path="/rebrand" component={RebrandPage} />
      <Route path="/rebrand/cms" component={RebrandCms} />
      <Route path="/saas" component={SaasPage} />
      <Route path="/saas/cms" component={SaasCms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
