import { useEffect, useState } from 'react'
import { leetcode } from '../content.js'
import { IconArrow } from './Icons.jsx'

const emptyBreakdown = [
  { label: 'Easy', count: null },
  { label: 'Medium', count: null },
  { label: 'Hard', count: null },
]

export default function LeetCode() {
  const [stats, setStats] = useState({
    solved: null,
    breakdown: emptyBreakdown,
    status: 'loading',
  })

  useEffect(() => {
    const controller = new AbortController()

    fetch(`/api/leetcode?t=${Date.now()}`, {
      cache: 'no-store',
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error('Unable to load LeetCode stats')
        return response.json()
      })
      .then((data) => {
        if (typeof data.solved !== 'number' || !Array.isArray(data.breakdown)) {
          throw new Error('LeetCode stats were incomplete')
        }
        setStats({
          solved: data.solved,
          breakdown: data.breakdown,
          status: 'ready',
        })
      })
      .catch((error) => {
        if (error.name === 'AbortError') return
        setStats((current) => ({ ...current, status: 'error' }))
      })

    return () => controller.abort()
  }, [])

  const counts = stats.breakdown
    .map((item) => item.count)
    .filter((count) => typeof count === 'number')
  const max = Math.max(...counts, 1)

  return (
    <section className="section" id="leetcode">
      <div className="shell">
        <div className="leetcode-panel">
          <div>
            <p className="eyebrow light">05 — LeetCode</p>
            <h2>Practice in public.</h2>
            <p className="panel-copy">
              Algorithm practice on the profile <strong>{leetcode.username}</strong>.
              These counts load from the public profile each time this page opens.
            </p>
            <a className="btn btn-sand" href={leetcode.href} target="_blank" rel="noreferrer">
              View LeetCode profile
              <IconArrow />
            </a>
          </div>
          <div className="leetcode-stats" aria-busy={stats.status === 'loading'}>
            <p className="solved">
              <span>{stats.status === 'ready' ? stats.solved : '…'}</span>
              problems solved
            </p>
            {stats.status === 'error' ? (
              <p className="stat-status">
                Current stats could not be loaded. The profile link opens the live page.
              </p>
            ) : null}
            <ul>
              {stats.breakdown.map((item) => (
                <li key={item.label}>
                  <div className="stat-label">
                    <span>{item.label}</span>
                    <strong>{item.count ?? '…'}</strong>
                  </div>
                  <div className="bar" aria-hidden="true">
                    <span
                      style={{
                        width: item.count == null ? '0%' : `${(item.count / max) * 100}%`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
