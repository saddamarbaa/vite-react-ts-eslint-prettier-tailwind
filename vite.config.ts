import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react';
import Alias from 'vite-plugin-alias'

export default defineConfig({
  plugins: [
    reactRefresh(),
    react(),
    Alias({
      useConfig: true,
      useTypescript: true,
    }) as any,
  ],
   server: {
    port: 3000,
  },
})



