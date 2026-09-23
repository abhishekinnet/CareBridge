import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MedicalSaathi from './pages/MedicalSaathi'
import ContactPage from './pages/ContactPage'
import './App.css'

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<LandingPage />} /><Route path="/how-we-help" element={<LandingPage />} /><Route path="/our-journey" element={<LandingPage />} /><Route path="/services" element={<LandingPage />} /><Route path="/about" element={<LandingPage />} /><Route path="/medical-saathi" element={<MedicalSaathi />} /><Route path="/contact" element={<ContactPage />} /></Routes></BrowserRouter>
}