import { profile } from '../content.js'
import ResumeButton from './ResumeButton.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p>
            {profile.role} · {profile.location}
          </p>
        </div>
        <ul className="link-row">
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
          </li>
          {profile.links
            .filter((link) => link.href.startsWith('http'))
            .map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="me noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
        <ResumeButton variant="line" />
      </div>
    </footer>
  )
}
