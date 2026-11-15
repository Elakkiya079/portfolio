const USERNAME = 'Elakkiya_Raja'

const QUERY = `query userProfile($username: String!) {
  matchedUser(username: $username) {
    submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
      }
    }
  }
}`

export async function getLeetCodeStats() {
  const response = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Referer: `https://leetcode.com/u/${USERNAME}/`,
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { username: USERNAME },
    }),
  })

  if (!response.ok) {
    throw new Error(`LeetCode request failed (${response.status})`)
  }

  const payload = await response.json()
  const counts = payload?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum

  if (!Array.isArray(counts)) {
    throw new Error('LeetCode profile was not found')
  }

  const byDifficulty = Object.fromEntries(counts.map((item) => [item.difficulty, item.count]))

  return {
    username: USERNAME,
    href: `https://leetcode.com/u/${USERNAME}/`,
    solved: byDifficulty.All ?? 0,
    breakdown: [
      { label: 'Easy', count: byDifficulty.Easy ?? 0 },
      { label: 'Medium', count: byDifficulty.Medium ?? 0 },
      { label: 'Hard', count: byDifficulty.Hard ?? 0 },
    ],
  }
}
