import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: [],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['apps/**/views/**/*.tsx'],
    }),
    unocss(),
  ],
})
