import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Get base path that was set in index.html
const base = (window as any).__BASE_PATH__ || '/';

// Set base path for assets
document.documentElement.dataset.base = base;

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(<App />);