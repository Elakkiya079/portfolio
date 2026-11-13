import { workProjects } from '../content.js'

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <p>02 — Selected work</p>
          <h2>Platforms shipped for healthcare, music, and licensing.</h2>
        </div>
        <div className="project-list">
          {workProjects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span className="index-no">{String(index + 1).padStart(2, '0')}</span>
                <p className="period">{project.period}</p>
              </div>
              <h3>{project.title}</h3>
              <p className="org">{project.subtitle}</p>
              <ul className="tags">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
