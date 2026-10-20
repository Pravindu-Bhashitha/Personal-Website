import { profile, stats } from '../data'
import { Download, GitHub, LinkedIn, Mail, Pin } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          {profile.openToWork && (
            <span className="badge">
              <span className="dot" /> Available for new opportunities
            </span>
          )}
          <p className="hello">Hello, I'm</p>
          <h1>
            <span className="grad">{profile.name}</span>
          </h1>
          <p className="role">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#projects">
              View my work
            </a>
            <a className="btn btn-outline" href={profile.cv} download="Pravindu_Bhashitha_CV.pdf">
              <Download /> Download CV
            </a>
          </div>
          <div className="socials-row">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedIn />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail />
            </a>
            <span className="loc">
              <Pin /> {profile.location}
            </span>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-ring">
            <img src={profile.photo} alt={profile.name} />
          </div>
          <div className="float-card fc1">
            <b>2+ yrs</b>
            <span>Full-stack experience</span>
          </div>
          <div className="float-card fc2">
            <b>React · Node · AWS</b>
            <span>Core stack</span>
          </div>
        </div>
      </div>

      <div className="container stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
