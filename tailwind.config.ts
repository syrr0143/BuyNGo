import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		 borderRadius: {
        'sm': '0.125rem',    // equivalent to rounded-sm
        'default': '0.25rem', // equivalent to rounded (default border-radius)
        'md': '0.375rem',    // equivalent to rounded-md
        'lg': '0.5rem',      // equivalent to rounded-lg
        'xl': '0.75rem',     // equivalent to rounded-xl
        '2xl': '1rem',       // equivalent to rounded-2xl
        '3xl': '1.5rem',     // equivalent to rounded-3xl
        'full': '9999px',    // equivalent to rounded-full
        // Custom values for specific corners:
        'tl-none': '0 0 0 0',   // No rounding on the top-left corner
        'tr-sm': '0 0 0 0.125rem', // Small rounding on the top-right corner
        'br-lg': '0 0 0.5rem 0',   // Large rounding on the bottom-right corner
        'bl-xl': '0 0 0 0.75rem',  // Extra-large rounding on the bottom-left corner
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
