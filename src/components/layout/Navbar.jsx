import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, HeartHandshake, Menu, Phone, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { primaryPhoneHref } from '../../config/contactConfig'

const links = [
  ['Home', '/'],
  ['How We Help', '/how-we-help#challenge'],
  ['Our Journey', '/our-journey#journey'],
  ['Services', '/services#services'],
  ['About', '/about#solution'],
  ['Contact', '/contact'],
]

const motionTransition = { duration: 0.2, ease: 'easeOut' }

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 16)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    if (!location.hash) return undefined
    const scrollToSection = window.setTimeout(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => window.clearTimeout(scrollToSection)
  }, [location.hash, location.pathname])

  const isActive = (href) => {
    const [path, hash] = href.split('#')
    if (hash) return location.pathname === path && location.hash === `#${hash}`
    return location.pathname === path && !location.hash
  }

  return <motion.header className={scrolled ? 'navbar scrolled' : 'navbar'} animate={{ minHeight: scrolled ? 68 : 78 }} transition={motionTransition}>
    <Link className="brand" to="/" aria-label="CareBridge home">
      <motion.span className="brand-mark" whileHover={{ scale: 1.04, rotate: -2 }} transition={motionTransition}><HeartHandshake size={24} /></motion.span>
      <span><strong>CareBridge</strong><small>Bridging Care. Building Healthier Lives.</small></span>
    </Link>
    <nav className="nav-links" aria-label="Main navigation">{links.map(([label, href]) => <Link className={isActive(href) ? 'active' : ''} key={label} to={href} onClick={() => setOpen(false)}>{label}{isActive(href) && <motion.span className="active-indicator" layoutId="navbar-active" transition={motionTransition} />}</Link>)}</nav>
    <div className="nav-actions"><button className="icon-button search-button" aria-label="Search" type="button"><Search size={18} /></button><a className="call-button" href={primaryPhoneHref}><Phone size={15} /> <span>Call Now</span></a><Link className="help-button" to="/medical-saathi"><span>Get Help</span><motion.span whileHover={{ x: 4 }} transition={motionTransition}><ArrowRight size={15} /></motion.span></Link></div>
    <button className="menu-button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} type="button" onClick={() => setOpen((current) => !current)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    <AnimatePresence>{open && <motion.nav className="mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, y: -10, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .98 }} transition={{ duration: .2 }}>{links.map(([label, href]) => <Link className={isActive(href) ? 'active' : ''} key={label} to={href} onClick={() => setOpen(false)}>{label}</Link>)}<a href={primaryPhoneHref} onClick={() => setOpen(false)}><Phone size={16} /> Call Medical Saathi</a><Link className="mobile-help" to="/medical-saathi" onClick={() => setOpen(false)}>Get Healthcare Support <ArrowRight size={16} /></Link></motion.nav>}</AnimatePresence>
  </motion.header>
}
