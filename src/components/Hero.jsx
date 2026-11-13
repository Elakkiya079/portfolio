import { profile } from '../content.js'
import ResumeButton from './ResumeButton.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="kicker">
            <span className="kicker-dot" aria-hidden="true" />
            <span>{profile.role}</span>
            <span className="kicker-place">
              <span aria-hidden="true">· </span>
              {profile.location}
            </span>
          </p>
          <h1>{profile.name}</h1>
          <p className="lede">{profile.summary}</p>
          <div className="hero-actions">
            <ResumeButton />
            <a className="btn btn-line" href="#personal">
              Personal projects
            </a>
          </div>
          <ul className="link-row">
            {profile.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} rel="me noreferrer" target={link.href.startsWith('http') ? '_blank' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <aside className="glance" aria-label="Profile snapshot">
          <p className="glance-years">
            <span>{profile.years}</span>
            years building enterprise software
          </p>
          <dl>
            <div>
              <dt>Role</dt>
              <dd>Software Engineer</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
