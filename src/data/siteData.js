import {
  Activity,
  CalendarDays,
  ClipboardList,
  Heart,
  HeartHandshake,
  Home,
  Hospital,
  Leaf,
  MessageCircle,
  PersonStanding,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react'

export const supportOptions = [
  'Doctor Guidance',
  'Hospital Assistance',
  'Home Healthcare',
  'Nursing Support',
  'Physiotherapy',
  'Elderly Care',
  'Follow-up Support',
  'General Healthcare Guidance',
]

export const benefits = [
  { title: 'Human Assistance', text: 'Real people. Real support.', icon: Users },
  { title: 'Expert Guidance', text: 'Find the right care options.', icon: ShieldCheck },
  { title: 'End-to-End Support', text: 'From consultation to recovery.', icon: Heart },
  { title: 'Patient-First Approach', text: 'Your health. Our priority.', icon: Leaf },
]

export const challenges = [
  ['Who should we consult?', Stethoscope],
  ['Which specialist is right?', Activity],
  ['Which hospital should we consider?', Hospital],
  ['How do we coordinate appointments?', CalendarDays],
  ['What happens after consultation?', ClipboardList],
  ['Who helps with the next step?', MessageCircle],
]

export const solutionServices = [
  ['Doctor Guidance', Stethoscope], ['Hospital Assistance', Hospital],
  ['Home Care Support', Home], ['Nursing Support', HeartHandshake],
  ['Physiotherapy', Activity], ['Follow-up Support', ClipboardList],
]

export const journeySteps = [
  ['Patient Concern', 'Share what you are experiencing.'],
  ['Human Care Coordinator', 'We listen and understand.'],
  ['Healthcare Options', 'We help find the right options.'],
  ['Appointment Help', 'We assist in scheduling.'],
  ['Treatment Journey', 'Support through your journey.'],
  ['Follow-up & Recovery', 'We help you stay on track.'],
  ['Patient Support', 'Ongoing assistance when needed.'],
]

export const services = [
  ['Doctor Guidance', 'Find suitable specialists in your city.', Stethoscope],
  ['Hospital Assistance', 'Get information and coordination support.', Hospital],
  ['Home Healthcare', 'Support at home when you need it.', Home],
  ['Nursing Support', 'Professional nursing assistance.', HeartHandshake],
  ['Physiotherapy', 'Support for better recovery.', Activity],
  ['Elderly Care', 'Compassionate care for senior family members.', PersonStanding],
  ['Follow-up Support', 'Stay connected after your consultation.', ClipboardList],
]

export const testimonials = [
  ['"CareBridge helped us understand our options and coordinated everything so smoothly. Truly supportive."', 'Priya Sharma', 'Patient family (Example)'],
  ['"The team was very helpful and always available to answer our questions. Highly recommended."', 'Rahul Mehta', 'Patient (Example)'],
  ['"From consultation to follow-up, CareBridge stayed with us throughout the journey. Thank you!"', 'Anita Verma', 'Patient family (Example)'],
]

export const faqs = [
  ['What is CareBridge?', 'CareBridge is a human-centered healthcare support and coordination platform.'],
  ['How can CareBridge help me?', 'We help you understand care options and coordinate support such as guidance, hospitals, home healthcare and follow-up care.'],
  ['Does CareBridge provide medical treatment?', 'No. CareBridge provides coordination and support and does not replace professional medical advice.'],
  ['Can CareBridge help me find a suitable specialist?', 'Our coordinators can help you understand options and find appropriate next steps.'],
  ['Can I request healthcare assistance?', 'Yes. Start a Medical Saathi request and share what you are going through.'],
  ['How does Medical Saathi work?', 'You share your needs through a short form, then a Care Coordinator contacts you using your preferred method.'],
  ['Is Medical Saathi available for follow-up support?', 'Yes. Follow-up and recovery coordination are part of the support journey.'],
]
