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
        primary: {"50":"#f0f9ff","100":"#e0f2fe","200":"#bae6fd","300":"#7dd3fc","400":"#38bdf8","500":"#0ea5e9","600":"#0284c7","700":"#0369a1","800":"#075985","900":"#0c4a6e"}
      },
      backgroundImage: {
        raidBanner: "url('/src/lib/assets/raid-banner.png')",

        sieteBanner: "url('/src/lib/assets/siete-banner.png')",
        siegBanner: "url('/src/lib/assets/sieg-banner.png')",
        cosmosBanner: "url('/src/lib/assets/cosmos-banner.png')",
        mugenBanner: "url('/src/lib/assets/mugen-banner.png')",
        agastiaBanner: "url('/src/lib/assets/agastia-banner.png')",
        diasporaBanner: "url('/src/lib/assets/diaspora-banner.png')",

        pbhlBanner: "url('/src/lib/assets/pbhl-banner.png')",
        akashaBanner: "url('/src/lib/assets/akasha-banner.png')",
        gohlBanner: "url('/src/lib/assets/gohl-banner.png')",

        ewiyarBanner: "url('/src/lib/assets/ewiyar-banner.png')",
        wilnasBanner: "url('/src/lib/assets/wilnas-banner.png')",
        galleonBanner: "url('/src/lib/assets/galleon-banner.png')",
        wamdusBanner: "url('/src/lib/assets/wamdus-banner.png')",
        fedielBanner: "url('/src/lib/assets/fediel-banner.png')",
        luwohBanner: "url('/src/lib/assets/luwoh-banner.png')",

        bennuBanner: "url('/src/lib/assets/bennu-banner.png')",
        tefnutBanner: "url('/src/lib/assets/tefnut-banner.png')",
        raBanner: "url('/src/lib/assets/ra-banner.png')",
        horusBanner: "url('/src/lib/assets/horus-banner.png')",
        osirisBanner: "url('/src/lib/assets/osiris-banner.png')",
        atumBanner: "url('/src/lib/assets/atum-banner.png')"
      },
    }
  }
}

