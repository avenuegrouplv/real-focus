import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const rootDir = typeof import.meta.dirname !== 'undefined'
  ? import.meta.dirname
  : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'resolve-pages-and-components-fallback',
        resolveId(source, importer) {
          if (!importer) return null;

          // If looking for ./pages/ or ./components/ or ../components/
          const cleanSource = source.replace(/\.tsx?$/, '');
          const possibleExtensions = ['', '.tsx', '.ts', '.jsx', '.js'];

          const testPaths = [];

          if (source.startsWith('./pages') || source.startsWith('../pages')) {
            const pageName = path.basename(cleanSource);
            testPaths.push(
              path.resolve(rootDir, 'src', 'pages', pageName),
              path.resolve(rootDir, 'pages', pageName)
            );
          } else if (source.startsWith('./components') || source.startsWith('../components')) {
            const compName = path.basename(cleanSource);
            testPaths.push(
              path.resolve(rootDir, 'src', 'components', compName),
              path.resolve(rootDir, 'components', compName)
            );
          }

          for (const base of testPaths) {
            for (const ext of possibleExtensions) {
              const fullPath = `${base}${ext}`;
              if (fs.existsSync(fullPath)) {
                return fullPath;
              }
            }
          }

          return null;
        },
      },
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
      alias: {
        '@': rootDir,
        '@src': path.resolve(rootDir, 'src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

