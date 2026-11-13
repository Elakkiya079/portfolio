import { achievement, certifications, education } from '../content.js'
import { IconArrow } from './Icons.jsx'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="shell">
        <div className="section-head">
          <p>06 — Education</p>
          <h2>Study, certifications, and mentoring.</h2>
        </div>
        <div className="edu-layout">
          <div className="edu-list">
            {education.map((item) => (
              <article key={item.school}>
                <p className="period">{item.period}</p>
                <h3>{item.school}</h3>
                <p>{item.detail}</p>
                <p className="meta">{item.meta}</p>
              </article>
            ))}
          </div>
          <div className="edu-side">
            <article>
              <h3>Certifications</h3>
              <ul className="cert-list">
                {certifications.map((item) => (
                  <li key={item.title}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      <span>{item.title}</span>
                      <IconArrow />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <h3>Mentoring</h3>
              <p>{achievement}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
