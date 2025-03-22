import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect } from "react";

function Router() {
  const base = document.documentElement.dataset.base || '/';

  return (
    <Switch base={base}>
      <Route path="/" component={Home} />
      {/* Only include GitHub Pages routes if not on Replit */}
      {!window.location.hostname.includes('replit.app') && (
        <>
          <Route path="/TiagomvDuarte.github.io" component={Home} />
          <Route path="/TiagomvDuarte.github.io/*" component={Home} />
        </>
      )}
      <Route path="/assets/*" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Check system preference and initialize theme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;