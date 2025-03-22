import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api") || path.includes("assets")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // Serve static files - Important to place this before the catch-all route
    app.use("/", express.static(path.join(__dirname, "public"), {
      index: false, // Don't serve index.html for every route
      maxAge: '1y', // Add cache headers for static assets
      etag: true
    }));

    // Also serve static files from /assets directly
    app.use("/assets", express.static(path.join(__dirname, "public", "assets"), {
      maxAge: '1y',
      etag: true
    }));

    // Serve assets for GitHub Pages path as well
    app.use("/TiagomvDuarte.github.io/assets", express.static(path.join(__dirname, "public", "assets"), {
      maxAge: '1y',
      etag: true
    }));

    // Handle client-side routing - always serve index.html for non-API routes
    app.get("*", (req, res) => {
      if (!req.path.startsWith("/api")) {
        res.sendFile(path.join(__dirname, "public", "index.html"));
      }
    });
  }

  const port = 3000; // Changed port to 3000
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();