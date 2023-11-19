/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      },
      backgroundImage: {
        revansBanner: "url('/src/lib/assets/revans-banner.png')",
        sieteBanner: "url('/src/lib/assets/siete-banner.png')",
        siegBanner: "url('/src/lib/assets/sieg-banner.png')",
        cosmosBanner: "url('/src/lib/assets/cosmos-banner.png')",
        mugenBanner: "url('/src/lib/assets/mugen-banner.png')",
        agastiaBanner: "url('/src/lib/assets/agastia-banner.png')"
      },
    }
  }
}

