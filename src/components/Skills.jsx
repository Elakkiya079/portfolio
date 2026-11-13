import csharp from '../assets/skills/csharp.svg'
import ping from '../assets/skills/ping.svg'
import sqlserver from '../assets/skills/sqlserver.svg'
import angular from 'simple-icons/icons/angular.svg'
import bootstrap from 'simple-icons/icons/bootstrap.svg'
import cplusplus from 'simple-icons/icons/cplusplus.svg'
import css from 'simple-icons/icons/css.svg'
import dotnet from 'simple-icons/icons/dotnet.svg'
import fastapi from 'simple-icons/icons/fastapi.svg'
import git from 'simple-icons/icons/git.svg'
import github from 'simple-icons/icons/github.svg'
import graphql from 'simple-icons/icons/graphql.svg'
import html5 from 'simple-icons/icons/html5.svg'
import javascript from 'simple-icons/icons/javascript.svg'
import jira from 'simple-icons/icons/jira.svg'
import jsonwebtokens from 'simple-icons/icons/jsonwebtokens.svg'
import mongodb from 'simple-icons/icons/mongodb.svg'
import nodedotjs from 'simple-icons/icons/nodedotjs.svg'
import oauth from '../assets/skills/oauth.svg'
import postgresql from 'simple-icons/icons/postgresql.svg'
import postman from 'simple-icons/icons/postman.svg'
import python from 'simple-icons/icons/python.svg'
import react from 'simple-icons/icons/react.svg'
import tailwindcss from 'simple-icons/icons/tailwindcss.svg'
import typescript from 'simple-icons/icons/typescript.svg'
import { skillGroups } from '../content.js'

const marks = {
  'C#': { icon: csharp, color: '#68217A' },
  'C++': { icon: cplusplus, color: '#00599C' },
  Python: { icon: python, color: '#3776AB' },
  JavaScript: { icon: javascript, color: '#F7DF1E', glyph: '#111318' },
  TypeScript: { icon: typescript, color: '#3178C6' },
  HTML: { icon: html5, color: '#E34F26' },
  CSS: { icon: css, color: '#2965F1' },
  React: { icon: react, color: '#087EA4' },
  AngularJS: { icon: angular, color: '#DD0031' },
  Bootstrap: { icon: bootstrap, color: '#7952B3' },
  'Tailwind CSS': { icon: tailwindcss, color: '#06B6D4' },
  GraphQL: { icon: graphql, color: '#E10098' },
  'Node.js': { icon: nodedotjs, color: '#339933' },
  FastAPI: { icon: fastapi, color: '#009688' },
  '.NET MVC': { icon: dotnet, color: '#512BD4' },
  'SQL Server': { icon: sqlserver, color: '#CC2927' },
  PostgreSQL: { icon: postgresql, color: '#336791' },
  MongoDB: { icon: mongodb, color: '#47A248' },
  Git: { icon: git, color: '#F05032' },
  GitHub: { icon: github, color: '#181717' },
  Jira: { icon: jira, color: '#0052CC' },
  Postman: { icon: postman, color: '#FF6C37' },
  'Ping Identity': { icon: ping, color: '#E2231A' },
  'OAuth 2.0': { icon: oauth, color: '#2454E6' },
  JWT: { icon: jsonwebtokens, color: '#111318' },
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="shell">
        <div className="section-head">
          <p>04 — Skills</p>
          <h2>The tools I use to ship production software.</h2>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((name) => {
                  const mark = marks[name]
                  return (
                    <li key={name}>
                      <span className="skill-mark" style={{ background: mark.color }}>
                        <span
                          className="skill-glyph"
                          style={{
                            background: mark.glyph ?? '#fff',
                            maskImage: `url("${mark.icon}")`,
                            WebkitMaskImage: `url("${mark.icon}")`,
                          }}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="skill-name">{name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
