import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware to handle HTML content and rewrite asset paths
app.use((req, res, next) => {
  const originalSend = res.send;
  res.send = function (body) {
    if (typeof body === 'string' && body.includes('TiagomvDuarte.github.io')) {
      // Clean up any GitHub Pages references
      body = body.replace(/\/TiagomvDuarte\.github\.io\/assets\//g, '/assets/');
      body = body.replace(/src="\/TiagomvDuarte\.github\.io/g, 'src="');
      body = body.replace(/href="\/TiagomvDuarte\.github\.io/g, 'href="');
      body = body.replace(/crossorigin src="\/TiagomvDuarte\.github\.io/g, 'crossorigin src="');
      body = body.replace(/crossorigin href="\/TiagomvDuarte\.github\.io/g, 'crossorigin href="');
    }
    return originalSend.call(this, body);
  };
  next();
});

// Logging middleware
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
    // Serve static files with proper MIME types and caching
    app.use(express.static(join(__dirname, "public"), {
      index: false,
      maxAge: '1y',
      etag: true,
      setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css');
        } else if (path.endsWith('.js')) {
          res.setHeader('Content-Type', 'application/javascript');
        } else if (path.endsWith('.ico')) {
          res.setHeader('Content-Type', 'image/x-icon');
        }
      }
    }));

    // fall through to index.html if the file doesn't exist
    app.use("*", (_req, res) => {
      res.sendFile(join(__dirname, "public", "index.html"));
    });
  }

  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();