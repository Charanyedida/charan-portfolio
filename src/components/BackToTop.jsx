import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-24 w-12 h-12 bg-neon-blue/20 border border-neon-blue rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <span className="text-neon-blue">↑</span>
    </button>
  );
};

export default BackToTop;
