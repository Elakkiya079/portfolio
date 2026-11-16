import { getHackerRankBadges } from '../server/hackerrankBadges.js'

export default async function handler(_req, res) {
  res.setHeader('Cache-Control', 'no-store')

  try {
    const badges = await getHackerRankBadges()
    res.status(200).json(badges)
  } catch {
    res.status(502).json({ error: 'Unable to load HackerRank badges' })
  }
}
