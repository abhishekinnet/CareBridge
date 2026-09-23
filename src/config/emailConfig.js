export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  recipient: import.meta.env.VITE_MEDICAL_SAATHI_EMAIL,
}

export const emailIsConfigured = Object.values(EMAIL_CONFIG).every(Boolean)
