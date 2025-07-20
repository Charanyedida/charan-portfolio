import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-neon-blue to-purple-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
    >
      <span className="text-2xl">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeToggle;
