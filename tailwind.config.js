/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  //src폴더 내 모든 react 파일에 적용하겠다.
  theme: {
    extend: {
      colors: {
        green: "#355E3B",
      },
    },
  },
  plugins: [],
}

