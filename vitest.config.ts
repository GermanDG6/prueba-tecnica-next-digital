/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setup-test.ts',
    css: true,
    typecheck: {
      tsconfig: './tsconfig.spec.json',
    },
  },
})
