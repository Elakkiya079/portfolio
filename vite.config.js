import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { getHackerRankBadges } from './server/hackerrankBadges.js'
import { getLeetCodeStats } from './server/leetcodeStats.js'

const devRoutes = {
  '/api/leetcode': {
    load: getLeetCodeStats,
    error: 'Unable to load LeetCode stats',
  },
  '/api/hackerrank': {
    load: getHackerRankBadges,
    error: 'Unable to load HackerRank badges',
  },
}

function portfolioDevApi() {
  const handle = async (req, res, next) => {
    const path = req.url?.split('?')[0]
    const route = devRoutes[path]
    if (!route) {
      next()
      return
    }

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 'no-store')

    try {
      const payload = await route.load()
      res.statusCode = 200
      res.end(JSON.stringify(payload))
    } catch {
      res.statusCode = 502
      res.end(JSON.stringify({ error: route.error }))
    }
  }

  return {
    name: 'portfolio-dev-api',
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
  plugins: [react(), portfolioDevApi()],
})
