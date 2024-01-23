import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://pro-api.coinmarketcap.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'X-CMC_PRO_API_KEY': '6c1e5086-47ca-4a43-82fe-e018c704c0ed',
          'Accept': 'application/json',
        }
      }
    }
  }
})
