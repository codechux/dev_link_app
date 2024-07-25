import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // border: "hsl(var(--border))",
        border: "var(--border)",
        background: 'var(--background)',
        error: 'var(--error-text)',
        lightBg: 'var(--light-bg)',
        lightPurple: 'var(--light-purple)',
        github: 'var(--github-bg)',
        youtube: 'var(--youtube-bg)',
        linkedin: 'var(--linkedin-bg)',
        heading: 'var(--heading)',
        primaryText: 'var(--primary-text)',
        btn: {
          DEFAULT: 'var(--btn-bg)',
          hover: 'var(--btn-hover)',
          active: 'var(--active-btn-border)',
          shadow: 'var(--active-btn-shadow)'
        },
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      },
      boxShadow: {
        myShadow: 'var(--active-btn-shadow)',
        box: 'var(--box-shadow)'
      },
      borderRadius: {
        radius: '8px'
      }

    },
  },
  plugins: [],
  '.custom-flex': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default config;
