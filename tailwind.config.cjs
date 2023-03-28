/** @type {import('tailwindcss').Config} */
module.exports = {
  
  // tailwindcss content
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // daisyUI randomize theme
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#80b709",
        
"secondary": "#974ad6",
        
"accent": "#ea9707",
        
"neutral": "#181826",
        
"base-100": "#F1EBF4",
        
"info": "#386FC7",
        
"success": "#29C28F",
        
"warning": "#EFC406",
        
"error": "#EA3968",
        },
      },
    ],
  },

  //daisyUI plugin
  plugins: [require("daisyui")],
}
