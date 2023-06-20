import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    plugins: [
      react(),
      federation({
        name: 'host-app',
        remotes: {
          remote: mode === 'development' ? 'http://localhost:5001/assets/remoteEntry.js' : 'https://vite-federation-remote-test.vercel.app/',
        },
        shared: ['react', 'react-dom']
      })
    ],
    build: {
      target: 'esnext'
    }
  }
})
