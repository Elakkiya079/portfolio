import { hackerrank } from '../src/content.js'

const BADGE_NAMES = {
  sql: 'SQL',
  cpp: 'C++',
  javascript: 'JavaScript',
  'problem-solving': 'Problem Solving',
  'rest-api': 'REST API',
}

function displayName(badge) {
  return BADGE_NAMES[badge.badge_type] || badge.badge_name || badge.badge_type
}

export async function getHackerRankBadges() {
  const username = hackerrank.username
  const response = await fetch(
    `https://www.hackerrank.com/rest/hackers/${encodeURIComponent(username)}/badges?limit=100`,
    {
      headers: {
        Accept: 'application/json',
        Referer: hackerrank.href,
      },
    },
  )

  if (!response.ok) {
    throw new Error(`HackerRank request failed (${response.status})`)
  }

  const payload = await response.json()
  const models = payload?.models

  if (!Array.isArray(models)) {
    throw new Error('HackerRank badges were not found')
  }

  const badges = models
    .filter((badge) => Number(badge.stars) > 0)
    .map((badge) => ({
      name: displayName(badge),
      type: badge.badge_type,
      category: badge.category_name || null,
      stars: Number(badge.stars),
      totalStars: Number(badge.total_stars) || Number(badge.stars),
      solved: Number.isFinite(Number(badge.solved)) ? Number(badge.solved) : null,
      totalChallenges: Number.isFinite(Number(badge.total_challenges))
        ? Number(badge.total_challenges)
        : null,
    }))
    .sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name))

  return {
    username,
    href: hackerrank.href,
    badges,
  }
}
