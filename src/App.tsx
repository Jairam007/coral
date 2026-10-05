import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { BackToTop, SiteFrame } from './components'
import './App.css'

const HomePage = lazy(() => import('./pages').then(page => ({ default: page.HomePage })))
const AboutPage = lazy(() => import('./pages').then(page => ({ default: page.AboutPage })))
const ServicesPage = lazy(() => import('./pages').then(page => ({ default: page.ServicesPage })))
const ProjectsPage = lazy(() => import('./pages').then(page => ({ default: page.ProjectsPage })))
const ProjectDetailPage = lazy(() => import('./pages').then(page => ({ default: page.ProjectDetailPage })))
const ProcessPage = lazy(() => import('./pages').then(page => ({ default: page.ProcessPage })))
const JournalPage = lazy(() => import('./pages').then(page => ({ default: page.JournalPage })))
const ArticlePage = lazy(() => import('./pages').then(page => ({ default: page.ArticlePage })))
const ContactPage = lazy(() => import('./pages').then(page => ({ default: page.ContactPage })))
const ConsultationPage = lazy(() => import('./pages').then(page => ({ default: page.ConsultationPage })))
const CareersPage = lazy(() => import('./pages').then(page => ({ default: page.CareersPage })))
const FaqPage = lazy(() => import('./pages').then(page => ({ default: page.FaqPage })))
const LegalPage = lazy(() => import('./pages').then(page => ({ default: page.LegalPage })))
const NotFoundPage = lazy(() => import('./pages').then(page => ({ default: page.NotFoundPage })))

function App() {
  return <BrowserRouter><MotionConfig reducedMotion="user"><SiteFrame><Suspense fallback={<div className="page-loading" role="status">CORAL&nbsp; / &nbsp;INTERIORS</div>}><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/projects/:slug" element={<ProjectDetailPage />} />
    <Route path="/process" element={<ProcessPage />} />
    <Route path="/journal" element={<JournalPage />} />
    <Route path="/journal/:slug" element={<ArticlePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/consultation" element={<ConsultationPage />} />
    <Route path="/careers" element={<CareersPage />} />
    <Route path="/faq" element={<FaqPage />} />
    <Route path="/privacy" element={<LegalPage type="privacy" />} />
    <Route path="/terms" element={<LegalPage type="terms" />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></Suspense></SiteFrame><BackToTop /></MotionConfig></BrowserRouter>
}

export default App
