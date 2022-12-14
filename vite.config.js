/// <reference types="vitest" />
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import svgr from 'vite-plugin-svgr'
import { visualizer } from 'rollup-plugin-visualizer'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const port = process.env.PORT || 3000

export default defineConfig(({ mode }) => ({
  plugins: [
    svgr(),
    preact(),
    cssInjectedByJsPlugin(),
    visualizer(),
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-preact-js-template/',
  server: { port, cors: true },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  test: {
    environment: 'jsdom',
    mockReset: true
  },
}))
