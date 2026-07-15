/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: '#050505',
          secondary: '#0D0D0D'
        },
        surface: '#171717',
        card: '#202020',
        brand: {
          primary: '#FF6A00',
          secondary: '#FF8A1D',
          accent: '#FFC857',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#CFCFCF',
          muted: '#8B8B8B',
          disabled: '#555555'
        },
        ui: {
          border: '#2A2A2A',
          glass: 'rgba(255, 255, 255, 0.04)',
          glassBorder: 'rgba(255, 255, 255, 0.08)',
          divider: '#1A1A1A'
        },
        status: {
          success: '#00D26A',
          warning: '#F5B301',
          danger: '#FF3B30',
          info: '#3BA7FF'
        },
        done: {
          DEFAULT: '#FF6A00',
          dark: '#FF8A1D',
          glow: 'rgba(255, 106, 0, 0.3)',
        },
        abyss: '#000000',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, #050505 0%, #0D0D0D 40%, #171717 100%)',
        'gradient-cta': 'linear-gradient(90deg, #FF6A00 0%, #FF8A1D 50%, #FFC857 100%)',
        'gradient-button': 'linear-gradient(135deg, #FF6A00, #FF8A1D)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)'
      },
      boxShadow: {
        'orange-glow': '0 0 30px rgba(255, 106, 0, 0.15), inset 0 0 10px rgba(255, 106, 0, 0.05)',
        'blue-glow': '0 0 30px rgba(0, 217, 255, 0.15)',
        'purple-glow': '0 0 30px rgba(139, 92, 246, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}