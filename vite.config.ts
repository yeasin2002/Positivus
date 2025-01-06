import path from 'path'
import { defineConfig, type PluginOption } from 'vite'

// vite plugins
import react from '@vitejs/plugin-react-swc'
import Fonts from 'unplugin-fonts/vite'
import svgr from 'vite-plugin-svgr'
import { visualizer } from 'rollup-plugin-visualizer'

const fonts = [
  {
    name: 'Space Grotesk',
    styles: 'wght@300;400;500;700',
  },
]

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    visualizer({
      filename: './dev-dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption,

    Fonts({
      google: {
        families: fonts,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
