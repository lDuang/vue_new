// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite' // 确保导入
import Components from 'unplugin-vue-components/vite' // 确保导入
import { ArcoResolver } from 'unplugin-vue-components/resolvers' // 确保导入

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ArcoResolver()],
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true
          })
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: parseInt(env.PORT) || 3009,
      host: '0.0.0.0',
      allowedHosts: ['3000.app.cloudstudio.work']
    }
  }
})