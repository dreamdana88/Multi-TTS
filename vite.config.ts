import vue from '@vitejs/plugin-vue';
import { copyFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root_dir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  plugins: [
    vue({
      features: {
        optionsAPI: false,
      },
    }),
    {
      name: 'copy-extension-css',
      closeBundle() {
        const dist_dir = path.join(root_dir, 'dist');
        mkdirSync(dist_dir, { recursive: true });
        copyFileSync(path.join(root_dir, 'src', 'style.css'), path.join(dist_dir, 'index.css'));
      },
    },
  ],
  build: {
    lib: {
      entry: path.join(root_dir, 'src', 'extension.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    target: 'es2022',
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      output: {
        format: 'es',
        entryFileNames: 'index.js',
      },
    },
  },
});
