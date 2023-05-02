import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import FullReload from 'vite-plugin-full-reload';

let fullReloadEnabled = true;

// FullReload('./src/**/*', { always: false })
export default defineConfig({
  plugins: [vue(), fullReloadEnabled ? FullReload('./src/**/*', { always: false }) : ''],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'components': fileURLToPath(new URL('./src/components', import.meta.url)),
      'scss': fileURLToPath(new URL('./src/scss/', import.meta.url)),
      'study': fileURLToPath(new URL('./src/study/', import.meta.url)),
      'js': fileURLToPath(new URL('./src/js/', import.meta.url)),
    }
  },
  server: {
    hmr: {
      overlay: false
    },
    // open: true,
  }
})
