import { projects } from '../data'
import { Arrow, Code, GitHub } from './Icons'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" alt kicker="Projects" title="Things I've built">
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className="card project">
            <div className="project-top">
              <span className="project-icon">
                <Code />
              </span>
              <div className="project-links">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" aria-label="Source code">
                    <GitHub />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live site">
                    <Arrow />
                  </a>
                )}
              </div>
            </div>
            <h3>{p.name}</h3>
            <p className="project-meta">
              {p.role} · {p.period}
            </p>
            <p className="muted">{p.description}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
