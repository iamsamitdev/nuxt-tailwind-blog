/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"], // เลือกธีมที่ต้องการใช้ ได้แก่ light, dark, cupcake, cyberpunk, dracula, forest, halloween, aqua, sky, winter, synthwave, neon, luxe, emerald, corporate
  }
}

