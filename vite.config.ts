import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(async ({ mode }) => {
  console.log(mode);
  return {
    base: mode === 'development' ? '/' : '/test-pages/',
  plugins: [vue()],
  }
})
