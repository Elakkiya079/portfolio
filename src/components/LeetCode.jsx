import { leetcode } from '../content.js'
import { IconArrow } from './Icons.jsx'

export default function LeetCode() {
  const max = Math.max(...leetcode.breakdown.map((item) => item.count), 1)

  return (
    <section className="section" id="leetcode">
      <div className="shell">
        <div className="leetcode-panel">
          <div>
            <p className="eyebrow light">05 — LeetCode</p>
            <h2>Practice in public.</h2>
            <p className="panel-copy">
              Algorithm practice on the profile <strong>{leetcode.username}</strong>.
              The counts below are from the public profile, and the link opens the live page.
            </p>
            <a className="btn btn-sand" href={leetcode.href} target="_blank" rel="noreferrer">
              View LeetCode profile
              <IconArrow />
            </a>
          </div>
          <div className="leetcode-stats">
            <p className="solved">
              <span>{leetcode.solved}</span>
              problems solved
            </p>
            <ul>
              {leetcode.breakdown.map((item) => (
                <li key={item.label}>
                  <div className="stat-label">
                    <span>{item.label}</span>
                    <strong>{item.count}</strong>
                  </div>
                  <div className="bar" aria-hidden="true">
                    <span style={{ width: `${(item.count / max) * 100}%` }} />
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
