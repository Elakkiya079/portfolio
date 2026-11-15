import { getLeetCodeStats } from '../server/leetcodeStats.js'

export default async function handler(_req, res) {
  res.setHeader('Cache-Control', 'no-store')

  try {
    const stats = await getLeetCodeStats()
    res.status(200).json(stats)
  } catch {
    res.status(502).json({ error: 'Unable to load LeetCode stats' })
  }
}
