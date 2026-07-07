import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesBar from '../components/FeaturesBar';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import PlansList from '../components/PlansList';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import StayUpdated from '../components/StayUpdated';

export default function HomeView({ onSelectPlan, showToast }) {
  const handleOrderClick = () => {
    // Scroll to plans section
    const plansElem = document.getElementById('plans');
    if (plansElem) {
      plansElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewMenuClick = () => {
    // Scroll to menu section
    const menuElem = document.getElementById('menu');
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <HeroSection 
        onOrderClick={handleOrderClick} 
        onViewMenuClick={handleViewMenuClick} 
      />
      <FeaturesBar />
      <Services />
      <AboutUs />
      <PlansList onSelectPlan={onSelectPlan} />
      <Testimonials />
      <FAQ />
      <StayUpdated showToast={showToast} />
    </main>
  );
}
