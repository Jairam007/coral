import { useEffect, useState, type ReactNode } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, MoveUpRight } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from './data'

const navigation = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'],
  ['Projects', '/projects'], ['Process', '/process'], ['Journal', '/journal'], ['Contact', '/contact'],
]

export function Wordmark({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`wordmark${light ? ' wordmark-light' : ''}`} aria-label="Coral Interiors home">
    <span className="wordmark-mark" aria-hidden="true">C</span>
    <span className="wordmark-type"><span>CORAL</span><small>INTERIORS</small></span>
  </Link>
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])
  return <header className={`site-header${scrolled || location.pathname !== '/' ? ' is-scrolled' : ''}${open ? ' menu-is-open' : ''}`}>
    <div className="header-inner">
      <Wordmark />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(([label, href]) => <NavLink key={href} to={href} end={href === '/'} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
      </nav>
      <Link className="header-cta" to="/consultation">Book a consultation <ArrowUpRight size={14} /></Link>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <div className={`mobile-menu${open ? ' mobile-menu-open' : ''}`} aria-hidden={!open}>
      <div className="mobile-menu-inner">
        <Wordmark light />
        <nav aria-label="Mobile navigation">{navigation.map(([label, href], index) => <NavLink key={href} to={href} end={href === '/'} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowUpRight size={18} /></NavLink>)}</nav>
        <Link className="button button-outline mobile-menu-button" to="/consultation" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Book a consultation <ArrowRight size={16} /></Link>
        <p className="mobile-menu-social">BENGALURU, INDIA <span>Instagram&nbsp;&nbsp; Pinterest</span></p>
      </div>
    </div>
  </header>
}

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand"><Wordmark light /><p>Spaces with soul.</p><a href="mailto:hello@coralinteriors.in">hello@coralinteriors.in <ArrowUpRight size={14} /></a></div>
      <div className="footer-column"><span className="footer-label">EXPLORE</span><Link to="/projects">Projects</Link><Link to="/services">Services</Link><Link to="/about">About the studio</Link><Link to="/process">Our process</Link><Link to="/journal">Journal</Link><Link to="/careers">Careers</Link></div>
      <div className="footer-column"><span className="footer-label">SAY HELLO</span><p>Bengaluru, India<br />Monday — Saturday<br />10:00 am — 6:00 pm</p><span className="footer-phone">+91 XXXXX XXXXX</span><a href="https://instagram.com/coralinteriors" target="_blank" rel="noreferrer">Instagram <MoveUpRight size={13} /></a><a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest <MoveUpRight size={13} /></a></div>
      <form className="footer-newsletter" onSubmit={event => { event.preventDefault(); setSubscribed(true) }}>
        <span className="footer-label">A LETTER, NOW AND THEN</span><h3>Notes on design,<br />materials & living.</h3>
        <label className="newsletter-field"><span className="sr-only">Email address</span><input type="email" required placeholder="Your email address" /><button aria-label="Subscribe to newsletter" type="submit"><ArrowRight size={18} /></button></label>
        <p aria-live="polite">{subscribed ? 'Thank you. You’re on the list.' : 'A thoughtful note, never noise.'}</p>
      </form>
    </div>
    <div className="footer-bottom"><span>© 2026 Coral Interiors. Made with intention.</span><div><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><span>BENGALURU · INDIA</span></div></div>
  </footer>
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /><a className="whatsapp-float" href="https://wa.me/?text=Hello%20Coral%20Interiors" aria-label="Start a WhatsApp conversation with Coral Interiors" target="_blank" rel="noreferrer"><span className="whatsapp-dot" />Let’s talk</a></>
}

export function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} | Coral Interiors`
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.append(meta) }
    meta.setAttribute('content', description)
    for (const [property, content] of [['og:title', document.title], ['og:description', description]]) {
      let openGraph = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
      if (!openGraph) { openGraph = document.createElement('meta'); openGraph.setAttribute('property', property); document.head.append(openGraph) }
      openGraph.content = content
    }
    if (!document.querySelector('#coral-local-business')) {
      const schema = document.createElement('script')
      schema.id = 'coral-local-business'
      schema.type = 'application/ld+json'
      schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': ['InteriorDesigner', 'ProfessionalService'], name: 'Coral Interiors', description: 'A Bengaluru interior design studio creating thoughtful residential and commercial spaces.', url: window.location.origin, address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' }, areaServed: ['Bengaluru', 'Mysuru', 'Hyderabad', 'Chennai', 'Mumbai', 'Pune', 'Goa'] })
      document.head.append(schema)
    }
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
    canonical.href = window.location.origin + window.location.pathname
    return () => { canonical?.remove() }
  }, [title, description])
  return null
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text?: string }) {
  return <section className="page-intro"><div className="page-intro-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{text && <p>{text}</p>}</div><span className="intro-index" aria-hidden="true">C / 26</span></section>
}

export function SectionHeading({ eyebrow, title, text, link, href = '/projects', light = false }: { eyebrow: string; title: string; text?: string; link?: string; href?: string; light?: boolean }) {
  return <div className={`section-heading${light ? ' section-heading-light' : ''}`}><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>{link && <Link className="text-link" to={href}>{link}<ArrowRight size={16} /></Link>}</div>
}

export function ProjectTile({ project, index = 0 }: { project: typeof projects[number]; index?: number }) {
  return <motion.article className={`project-tile project-tile-${index % 3}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.65, delay: (index % 2) * 0.09 }}>
    <Link to={`/projects/${project.slug}`} className="project-image-link" aria-label={`View ${project.title}`}>
      <img src={project.image} alt={`${project.title}, an interior project in ${project.location}`} loading="lazy" />
      <span className="project-number">0{index + 1} <i /> {project.category.toUpperCase()}</span><span className="project-arrow"><ArrowUpRight size={20} /></span>
    </Link>
    <div className="project-caption"><div><h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3><span>{project.location} · {project.year}</span></div><span>{project.category}</span></div>
  </motion.article>
}

export function ProjectGrid({ items = projects }: { items?: typeof projects }) {
  return <div className="project-grid">{items.map((project, index) => <ProjectTile key={project.slug} project={project} index={index} />)}</div>
}

export function GreenCta() {
  return <section className="green-cta"><span className="cta-architecture" aria-hidden="true" /><div><span className="eyebrow">A GOOD PLACE TO BEGIN</span><h2>Have a space<br />in mind?</h2><p>Tell us a little about it. We’ll take it from there, together.</p><Link className="button button-light" to="/consultation">Start a conversation <ArrowRight size={17} /></Link></div><span className="cta-side-note">CORAL INTERIORS · BENGALURU</span></section>
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const onScroll = () => setVisible(window.scrollY > 650); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  return visible ? <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowDown size={16} /></button> : null
}

