import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

export default defineConfig({
  plugins: [reactRefresh()],
   server: {
    port: 3000,
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'utils': path.resolve(__dirname, 'src/utils')
    }
  }
})
