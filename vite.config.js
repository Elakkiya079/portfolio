import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { getLeetCodeStats } from './server/leetcodeStats.js'

function leetcodeDevApi() {
  const handle = async (req, res, next) => {
    const path = req.url?.split('?')[0]
    if (path !== '/api/leetcode') {
      next()
      return
    }

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 'no-store')

    try {
      const stats = await getLeetCodeStats()
      res.statusCode = 200
      res.end(JSON.stringify(stats))
    } catch {
      res.statusCode = 502
      res.end(JSON.stringify({ error: 'Unable to load LeetCode stats' }))
    }
  }

  return {
    name: 'leetcode-dev-api',
    configureServer(server) {
      server.middlewares.use(handle)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handle)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), leetcodeDevApi()],
})
