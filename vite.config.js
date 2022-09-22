import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@data': resolve(__dirname, './src/data'),
      '@controllers': resolve(__dirname, './src/scripts/controllers'),
      '@models': resolve(__dirname, './src/scripts/models'),
      '@views-components': resolve(__dirname, './src/scripts/views/components'),
      '@views-pages': resolve(__dirname, './src/scripts/views/pages'),
      '@styles': resolve(__dirname, './src/styles')
    }
  }
})
