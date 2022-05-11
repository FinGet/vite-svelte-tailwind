import { defineConfig} from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteVConsole } from 'vite-plugin-vconsole';
import path from 'path'

export default defineConfig(({command, mode}) => {
  // console.log(command, mode)
  return {
    plugins: [
      svelte(),
      viteVConsole({
        entry: [path.resolve('src/main.js')], // entry for each page, different from the above
        localEnabled: command === 'serve',
        enabled: command === 'serve',
        config: {
          maxLogNumber: 1000,
          theme: 'dark'
        }
      })
    ],
    server: {
      port: 3344,
      proxy: {
        '/api': {
          target: 'http://api.coindesk.com',
          changeOrigin: true,
          secure: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      }
    }
  }
})
