import { copyFileSync, readdirSync, rmSync, existsSync, statSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function copyRecursive(src, dest) {
  const stat = statSync(src);

  if (stat.isDirectory()) {
    if (!existsSync(dest)) {
      mkdirSync(dest, { recursive: true });
    }

    const files = readdirSync(src);
    files.forEach(file => {
      copyRecursive(join(src, file), join(dest, file));
    });
  } else {
    copyFileSync(src, dest);
  }
}

function moveFilesToDist() {
  const publicDir = join(__dirname, 'dist', 'public');
  const distDir = join(__dirname, 'dist');

  if (!existsSync(publicDir)) {
    console.error('Public directory not found!');
    process.exit(1);
  }

  // Copy all files and directories from public to dist
  const files = readdirSync(publicDir);
  files.forEach(file => {
    const srcPath = join(publicDir, file);
    const destPath = join(distDir, file);
    console.log(`Copying ${srcPath} to ${destPath}`);
    copyRecursive(srcPath, destPath);
  });

  // Remove public directory
  rmSync(publicDir, { recursive: true, force: true });

  console.log('Successfully moved files from dist/public to dist');
}

moveFilesToDist();