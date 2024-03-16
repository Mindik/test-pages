import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(async ({ mode }) => {
  console.log(mode);
  return {
    base: './',
    plugins: [vue()],
  }
})
