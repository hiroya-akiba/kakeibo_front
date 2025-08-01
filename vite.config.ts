import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://172.20.192.1:8080', // APIのURL
        changeOrigin: true, // ホストヘッダを書き換えてCORSを回避
      }
    }
  }
})
