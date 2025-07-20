/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00ffff',
        'neon-purple': '#8b5cf6',
        'dark-bg': '#0a0a0a',
        'glass-bg': 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        cyber: ['Orbitron', 'monospace'],
        futura: ['Futura', 'sans-serif'],
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
          '50%': { boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          from: { textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' },
          to: { textShadow: '0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff' },
        },
      },
    },
  },
  plugins: [],
}
