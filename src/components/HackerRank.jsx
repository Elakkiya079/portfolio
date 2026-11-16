import { useEffect, useState } from 'react'
import { hackerrank } from '../content.js'
import { IconArrow } from './Icons.jsx'

export default function HackerRank() {
  const [data, setData] = useState({
    badges: [],
    status: 'loading',
  })

  useEffect(() => {
    const controller = new AbortController()

    fetch(`/api/hackerrank?t=${Date.now()}`, {
      cache: 'no-store',
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error('Unable to load HackerRank badges')
        return response.json()
      })
      .then((payload) => {
        if (!Array.isArray(payload.badges)) {
          throw new Error('HackerRank badges were incomplete')
        }
        setData({ badges: payload.badges, status: 'ready' })
      })
      .catch((error) => {
        if (error.name === 'AbortError') return
        setData((current) => ({ ...current, status: 'error' }))
      })

    return () => controller.abort()
  }, [])

  const earned = data.status === 'ready' ? data.badges.length : null

  return (
    <section className="section" id="hackerrank">
      <div className="shell">
        <div className="leetcode-panel">
          <div>
            <p className="eyebrow light">06 — HackerRank</p>
            <h2>Badges earned in public.</h2>
            <p className="panel-copy">
              Skill badges on the profile <strong>{hackerrank.username}</strong>. These load
              from the public profile each time this page opens.
            </p>
            <a className="btn btn-sand" href={hackerrank.href} target="_blank" rel="noreferrer">
              View HackerRank profile
              <IconArrow />
            </a>
          </div>
          <div className="leetcode-stats" aria-busy={data.status === 'loading'}>
            <p className="solved">
              <span>{earned ?? '…'}</span>
              {earned === 1 ? 'badge earned' : 'badges earned'}
            </p>
            {data.status === 'error' ? (
              <p className="stat-status">
                Current badges could not be loaded. The profile link opens the live page.
              </p>
            ) : null}
            {data.status === 'ready' && data.badges.length === 0 ? (
              <p className="stat-status">No earned badges on this profile yet.</p>
            ) : null}
            {data.badges.length > 0 ? (
              <ul>
                {data.badges.map((badge) => (
                  <li key={badge.type || badge.name}>
                    <div className="stat-label">
                      <span>{badge.name}</span>
                      <strong>
                        {badge.stars}/{badge.totalStars}
                      </strong>
                    </div>
                    <div className="bar" aria-hidden="true">
                      <span style={{ width: `${(badge.stars / badge.totalStars) * 100}%` }} />
                    </div>
                    <p className="badge-meta">
                      {badge.category ? `${badge.category} · ` : ''}
                      {badge.stars} of {badge.totalStars} stars
                      {badge.solved != null ? ` · ${badge.solved} solved` : ''}
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
