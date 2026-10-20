import { useReveal } from '../utils'

export default function Section({ id, kicker, title, alt, children }) {
  const [ref, shown] = useReveal()
  return (
    <section id={id} ref={ref} className={`section reveal ${alt ? 'alt' : ''} ${shown ? 'in' : ''}`}>
      <div className="container">
        <p className="kicker">{kicker}</p>
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}
