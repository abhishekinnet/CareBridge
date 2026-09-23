import emailjs from '@emailjs/browser'
import { CONTACT_CONFIG } from '../config/contactConfig'
import { EMAIL_CONFIG, emailIsConfigured } from '../config/emailConfig'

export async function sendMedicalSaathiRequest(form) {
  if (!emailIsConfigured) return { delivered: false }

  await emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, {
    to_email: EMAIL_CONFIG.recipient || CONTACT_CONFIG.email,
    subject: 'New Medical Saathi Patient Support Request',
    request_title: 'NEW MEDICAL SAATHI SUPPORT REQUEST',
    patient_name: form.fullName,
    age: form.age,
    gender: form.gender,
    mobile: form.mobile,
    email: form.email,
    city: form.city,
    health_concern: form.concern,
    disease_description: form.description,
    duration: form.duration || 'Not specified',
    previous_treatment: form.previousTreatment || 'None provided',
    required_support: form.support.join(', '),
    preferred_date: form.preferredDate || 'Not specified',
    preferred_time: form.preferredTime || 'Any time',
    preferred_contact: form.contactMethod,
    additional_information: form.additionalInfo || 'None provided',
    primary_phone: CONTACT_CONFIG.primaryPhone,
    secondary_phone: CONTACT_CONFIG.secondaryPhone,
    support_email: CONTACT_CONFIG.email,
  }, EMAIL_CONFIG.publicKey)

  return { delivered: true }
}
