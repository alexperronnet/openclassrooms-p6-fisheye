import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@data': resolve(__dirname, './src/data'),
      '@controllers': resolve(__dirname, './src/scripts/controllers'),
      '@models': resolve(__dirname, './src/scripts/models'),
      '@views': resolve(__dirname, './src/scripts/views'),
      '@styles': resolve(__dirname, './src/styles')
    }
  }
})
