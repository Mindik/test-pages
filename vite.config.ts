import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(async ({ mode }) => {
  return {
    base: mode === 'production' ? '/test-pages/' : '/',
    plugins: [vue()],
  }
})
