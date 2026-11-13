import { personalProjects } from '../content.js'
import { IconArrow } from './Icons.jsx'

export default function Personal() {
  return (
    <section className="section" id="personal">
      <div className="shell">
        <div className="section-head">
          <p>03 — Personal projects</p>
          <h2>Work I own from idea to deployment.</h2>
        </div>
        <div className="personal-list">
          {personalProjects.map((project) => (
            <article className="personal-card" key={project.title}>
              <div>
                <p className="eyebrow">Personal · {project.period}</p>
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
              </div>
              <div className="deploy">
                <p>Deployed URL</p>
                <a href={project.url}>{project.url}</a>
                <a className="btn btn-solid" href={project.url}>
                  Open site
                  <IconArrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
