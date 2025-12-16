import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import ProblemSection from './components/ProblemSection'
import FounderSection from './components/FounderSection'
import CaseStudySection from './components/CaseStudySection'
import ProcessSection from './components/ProcessSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("General Consultation");

  const handleOpenModal = (interest = "General Consultation") => {
    setSelectedInterest(interest);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInterest("");
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Header onOpenModal={() => handleOpenModal('General Consultation')} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <TrustedBy />
        <ProblemSection />
        <FounderSection onOpenModal={() => handleOpenModal('General Consultation')} />
        <CaseStudySection />
        <TestimonialsSection />
        <ProcessSection />
        <PricingSection onOpenModal={handleOpenModal} />
        <FAQSection />
        <CTASection onOpenModal={handleOpenModal} />
      </main>
      <Footer onOpenModal={() => handleOpenModal('General Consultation')} />

      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPlan={selectedInterest}
      />
    </div>
  )
}

export default App
