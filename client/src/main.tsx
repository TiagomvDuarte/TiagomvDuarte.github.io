import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Ensure we're using the correct base path for assets
const base = window.location.hostname.includes('replit.app') 
  ? '/'
  : window.location.pathname.includes('TiagomvDuarte.github.io')
    ? '/TiagomvDuarte.github.io/'
    : '/';

// Set base path for assets
document.documentElement.dataset.base = base;

// Set base path for static assets
const assetBase = document.createElement('base');
assetBase.href = base;
document.head.prepend(assetBase);

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(<App />);