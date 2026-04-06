/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Approach from './components/Approach';
import VideoLoop from './components/VideoLoop';
import Competencies from './components/Competencies';
import Statistics from './components/Statistics';
import ServicesCategories from './components/ServicesCategories';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen font-sans bg-[var(--color-bg)] text-[var(--color-primary)] selection:bg-[var(--color-secondary)] selection:text-white overflow-x-hidden">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <VideoLoop />
      <Competencies />
      <Statistics />
      <ServicesCategories />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
