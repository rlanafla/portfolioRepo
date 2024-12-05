import { useEffect } from 'react';

const FadeInOnScroll = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
          observer.unobserve(entry.target);  
        }
      });
    }, {
      threshold: 0.5 
    });

    fadeInElements.forEach(element => observer.observe(element));
    
    return () => {
      observer.disconnect(); 
    };
  }, []);
  
  return null;
};
export default FadeInOnScroll;
