import { experience } from '../content.js'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className="section-head">
          <p>01 — Experience</p>
          <h2>Five years inside enterprise product teams.</h2>
        </div>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.role}-${job.period}`}>
              <div className="timeline-meta">
                <p className="period">{job.period}</p>
                <p className="place">{job.place}</p>
              </div>
              <div>
                <h3>{job.role}</h3>
                <p className="org">{job.company}</p>
                <ul className="points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
