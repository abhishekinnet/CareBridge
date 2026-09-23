import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, CheckCircle2, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { useForm, useWatch } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import { CONTACT_CONFIG, emailHref, primaryPhoneHref, secondaryPhoneHref, whatsappHref } from '../config/contactConfig'
import { supportOptions } from '../data/siteData'
import { sendMedicalSaathiRequest } from '../services/emailService'
import '../styles/medical-saathi.css'

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  age: z.coerce.number().min(1, 'Enter a valid age.').max(120, 'Enter a valid age.'),
  gender: z.string().min(1, 'Please choose an option.'),
  mobile: z.string().min(8, 'Enter a valid mobile number.'),
  email: z.string().email('Enter a valid email address.'),
  city: z.string().min(2, 'Please enter your city.'),
  concern: z.string().min(2, 'Tell us your health concern.'),
  description: z.string().min(10, 'Please share a little more detail.'),
  duration: z.string().optional(),
  previousTreatment: z.string().optional(),
  support: z.array(z.string()).min(1, 'Choose at least one support option.'),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  contactMethod: z.string().min(1),
  additionalInfo: z.string().optional(),
})

const defaults = { fullName: '', age: '', gender: '', mobile: '', email: '', city: '', concern: '', description: '', duration: '', previousTreatment: '', support: [], preferredDate: '', preferredTime: '', contactMethod: 'Phone', additionalInfo: '' }
const steps = [['Patient Information', ['fullName', 'age', 'gender', 'mobile', 'email', 'city']], ['Health Concern', ['concern', 'description']], ['Required Support', ['support']], ['Preferred Contact', ['preferredDate', 'preferredTime', 'contactMethod']], ['Review & Submit', []]]

export default function MedicalSaathi() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [deliveryReady, setDeliveryReady] = useState(false)
  const { control, register, handleSubmit, trigger, setValue, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema), defaultValues: defaults, mode: 'onTouched' })
  const form = useWatch({ control })
  const next = async () => { if (await trigger(steps[step][1])) setStep((current) => Math.min(current + 1, 4)) }
  const toggleSupport = (item) => setValue('support', form.support.includes(item) ? form.support.filter((support) => support !== item) : [...form.support, item], { shouldValidate: true })
  const submit = async (values) => { const result = await sendMedicalSaathiRequest(values); setDeliveryReady(result.delivered); setSubmitted(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const whatsappMessage = 'Hello Medical Saathi, I would like healthcare support. Please assist me.'
  const whatsappLink = whatsappHref(whatsappMessage)

  if (submitted) return <div className="site-page"><Navbar /><main className="saathi-main"><section className="saathi-success"><div className="success-icon"><CheckCircle2 size={43} /></div><p className="eyebrow">Request received</p><h1>Thank you for reaching out to Medical Saathi.</h1><p>{deliveryReady ? 'Our care team will review your request and contact you using your preferred contact method.' : 'Your request is ready. Add the EmailJS environment keys to deliver it to the support team, or contact Medical Saathi directly below.'}</p><div className="success-actions"><a className="primary-button" href={primaryPhoneHref}><Phone size={17} /> Call Medical Saathi</a><a className="outline-button" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp Medical Saathi</a><a className="outline-button" href={emailHref}><MessageCircle size={17} /> Email Medical Saathi</a><Link className="text-link" to="/">Back to Home <ArrowRight size={15} /></Link></div><p className="secondary-contact">Alternative: <a href={secondaryPhoneHref}>+91 {CONTACT_CONFIG.secondaryPhone.slice(2)}</a> · {CONTACT_CONFIG.email}</p></section></main><Footer /></div>

  return <div className="site-page"><Navbar /><main className="saathi-main"><section className="saathi-intro"><p className="eyebrow">Medical Saathi</p><h1>Healthcare support,<br /><em>with someone by your side.</em></h1><p>Tell us what you are going through. A human Care Coordinator will help you understand the next step.</p><div className="safety-note"><ShieldCheck size={18} /><span>Medical Saathi provides healthcare coordination and support. It does not replace professional medical advice or emergency services.</span></div></section><section className="form-card"><div className="stepper">{steps.map(([title], index) => <div className={index <= step ? 'step active' : 'step'} key={title}><span>{index < step ? <Check size={14} /> : index + 1}</span><small>{title}</small></div>)}</div><form onSubmit={handleSubmit(submit)}>
    {step === 0 && <fieldset><legend>Patient information</legend><div className="field-grid"><Field label="Full name" error={errors.fullName}><input {...register('fullName')} placeholder="e.g. Priya Sharma" /></Field><Field label="Age" error={errors.age}><input {...register('age')} type="number" min="1" max="120" placeholder="Age" /></Field><Field label="Gender" error={errors.gender}><select {...register('gender')}><option value="">Select gender</option><option>Female</option><option>Male</option><option>Non-binary</option><option>Prefer not to say</option></select></Field><Field label="Mobile number" error={errors.mobile}><input {...register('mobile')} type="tel" placeholder="+91 00000 00000" /></Field><Field label="Email address" error={errors.email}><input {...register('email')} type="email" placeholder="you@example.com" /></Field><Field label="City" error={errors.city}><input {...register('city')} placeholder="Your city" /></Field></div></fieldset>}
    {step === 1 && <fieldset><legend>Health concern</legend><div className="field-grid"><Field label="Disease / health concern" error={errors.concern}><input {...register('concern')} placeholder="What do you need help with?" /></Field><Field label="Duration"><select {...register('duration')}><option value="">Select duration</option><option>Less than a week</option><option>1–4 weeks</option><option>1–6 months</option><option>More than 6 months</option><option>Ongoing / not sure</option></select></Field><Field label="Disease description" error={errors.description} wide><textarea {...register('description')} rows="5" placeholder="Tell us what you are experiencing..."></textarea></Field><Field label="Previous treatment" wide><textarea {...register('previousTreatment')} rows="4" placeholder="Any doctor visits, medicines or tests"></textarea></Field></div></fieldset>}
    {step === 2 && <fieldset><legend>Required healthcare support</legend><p className="form-help">Choose everything that would be useful. You can select more than one.</p><div className="support-options">{supportOptions.map((item) => <label className={form.support.includes(item) ? 'support-option selected' : 'support-option'} key={item}><input type="checkbox" checked={form.support.includes(item)} onChange={() => toggleSupport(item)} /><span className="checkmark"><Check size={15} /></span>{item}</label>)}</div>{errors.support && <p className="error-message">{errors.support.message}</p>}</fieldset>}
    {step === 3 && <fieldset><legend>Preferred contact</legend><div className="field-grid"><Field label="Preferred date"><input {...register('preferredDate')} type="date" /></Field><Field label="Preferred time"><select {...register('preferredTime')}><option value="">Any time</option><option>Morning (9am–12pm)</option><option>Afternoon (12pm–4pm)</option><option>Evening (4pm–7pm)</option></select></Field><Field label="Additional information" wide><textarea {...register('additionalInfo')} rows="5" placeholder="Anything else we should know?"></textarea></Field></div><div className="contact-choice"><p>How should we contact you?</p>{['Phone', 'WhatsApp', 'Email'].map((method) => <label key={method}><input type="radio" value={method} {...register('contactMethod')} />{method}</label>)}</div></fieldset>}
    {step === 4 && <fieldset><legend>Review your request</legend><div className="review-grid">{[['Patient', `${form.fullName}, ${form.age}`], ['Contact', `${form.mobile} · ${form.email}`], ['Location', form.city], ['Concern', form.concern], ['Required support', form.support.join(', ')], ['Preferred contact', `${form.contactMethod}, ${form.preferredDate || 'any date'}`]].map(([label, value]) => <div key={label}><small>{label}</small><strong>{value || 'Not specified'}</strong></div>)}</div><p className="safety-note compact"><ShieldCheck size={17} /> If you are experiencing a medical emergency, contact your local emergency medical service or visit the nearest emergency department.</p></fieldset>}
    <div className="form-navigation">{step > 0 && <button className="back-button" type="button" onClick={() => setStep((current) => current - 1)}><ArrowLeft size={16} /> Back</button>}{step < 4 ? <button className="primary-button" type="button" onClick={next}>Continue <ArrowRight size={16} /></button> : <button className="primary-button" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Submit Request'} <ArrowRight size={16} /></button>}</div>
  </form></section></main><Footer /></div>
}

function Field({ label, error, wide, children }) { return <label className={wide ? 'full-width' : ''}>{label}{children}{error && <span className="error-message">{error.message}</span>}</label> }
