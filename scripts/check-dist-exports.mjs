import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root_dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist_js = path.join(root_dir, 'dist', 'index.js');
const dist_css = path.join(root_dir, 'dist', 'index.css');

if (!existsSync(dist_js) || !existsSync(dist_css)) {
  console.error('dist/index.js or dist/index.css is missing. Run pnpm build first.');
  process.exit(1);
}

const module = await import(pathToFileURL(dist_js).href);
const required_hooks = ['onInstall', 'onActivate', 'onEnable', 'onDisable', 'onClean', 'onDelete'];
const missing = required_hooks.filter((name) => typeof module[name] !== 'function');

if (missing.length > 0) {
  console.error(`dist/index.js is missing exported hooks: ${missing.join(', ')}`);
  process.exit(1);
}

console.info('dist exports ok:', required_hooks.join(', '));
