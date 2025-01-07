import path from 'path'
import { defineConfig } from 'vite'
import { fonts } from './configs'

// vite plugins
import react from '@vitejs/plugin-react-swc'
import Fonts from 'unplugin-fonts/vite'
import svgr from 'vite-plugin-svgr'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { compression } from 'vite-plugin-compression2'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    Inspect(),
    compression(),
    TanStackRouterVite(),
    Fonts({ google: { families: fonts } }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
