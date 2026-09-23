import { Mail, MessageCircle, Phone } from 'lucide-react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import { CONTACT_CONFIG, emailHref, primaryPhoneHref, secondaryPhoneHref, secondaryWhatsappHref, whatsappHref } from '../config/contactConfig'

const whatsappMessage = 'Hello Medical Saathi, I would like healthcare support. Please assist me.'

export default function ContactPage() {
  return <div className="site-page"><Navbar /><main className="contact-page"><p className="eyebrow">Get in touch</p><h1>Medical Saathi Support</h1><p className="contact-lede">A human Care Coordinator is here to help you understand the next step in your healthcare journey.</p><div className="contact-grid"><div className="contact-detail"><Phone size={22} /><span><small>Primary phone</small><a href={primaryPhoneHref}>{CONTACT_CONFIG.primaryPhone}</a></span></div><div className="contact-detail"><Phone size={22} /><span><small>Alternative</small><a href={secondaryPhoneHref}>+91 {CONTACT_CONFIG.secondaryPhone.slice(2)}</a></span></div><div className="contact-detail"><Mail size={22} /><span><small>Email</small><a href={emailHref}>{CONTACT_CONFIG.email}</a></span></div><div className="contact-detail"><small>Location</small><strong>{CONTACT_CONFIG.location}</strong></div></div><div className="contact-actions"><a className="primary-button" href={primaryPhoneHref}><Phone size={17} /> Call Medical Saathi</a><a className="outline-button" href={whatsappHref(whatsappMessage)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chat on WhatsApp</a><a className="outline-button" href={secondaryWhatsappHref(whatsappMessage)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp alternative</a><a className="outline-button" href={emailHref}><Mail size={17} /> Email Medical Saathi</a></div></main><Footer /></div>
}
