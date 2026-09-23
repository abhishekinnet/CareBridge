export const CONTACT_CONFIG = {
  primaryPhone: '9324252877',
  secondaryPhone: '918409772384',
  email: 'hello.carebridgesupport@gmail.com',
  whatsapp: '919324252877',
  location: 'Jaipur, Rajasthan, India',
}

export const primaryPhoneHref = `tel:+91${CONTACT_CONFIG.primaryPhone}`
export const secondaryPhoneHref = `tel:+91${CONTACT_CONFIG.secondaryPhone}`
export const emailHref = `mailto:${CONTACT_CONFIG.email}`
export const whatsappHref = (message) => `https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`
export const secondaryWhatsappHref = (message) => `https://wa.me/${CONTACT_CONFIG.secondaryPhone}?text=${encodeURIComponent(message)}`
