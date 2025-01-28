/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_green: '#3D5D6C',
        lime_yellow: '#FFFB8B',
        default_blue: '#65BDAB'
      },
    },
  },
  plugins: [],
};
