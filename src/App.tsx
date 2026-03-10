/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[var(--color-bg)] text-[var(--color-primary)] selection:bg-[var(--color-secondary)] selection:text-white overflow-x-hidden">
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
