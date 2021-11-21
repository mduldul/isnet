const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    backgroundImage: {
      'uzaktan-calisma': "url('/slider_bg/uzaktan-calisma.png')",
      'bluuty-slider': "url('/slider_bg/bluuty-slider.jpeg')",
      'el-birligi-dijital-donusum': "url('/slider_bg/ElBirligi_DijitalDonusumKredisi.jpeg')",
      'ssl-vpn': "url('/slider_bg/ssl-vpn.png')",
      'bulut-santral-cozumleri': "url('/slider_bg/bulut-santral-cozumleri-isnet.png')",
      'e-donusum-min': "url('/slider_bg/e-donusum-min.png')",
      'uydu-erisim': "url('/slider_bg/uydu-erisimi.png')",
      'isnet-veeam-cloud': "url('/slider_bg/isnet-veeam-cloud-connect-slider.png')",
      'robotik-surec': "url('/slider_bg/robotik-surec-otomasyonu-isnet.png')",
      'veri-guvenligi': "url('/slider_bg/veri-guvenliginizi-kvkk-cozumlerimizle-saglayin.jpeg')"
    },
    extend: {
      width: {
        145: '145%',
      },
      height: {
        slider: '600px'
      },
      fontFamily: {
        Montserrat: ['Montserrat']
      },
      textColor: {
        'featureIconBlue': '#2574A9',
        'featureTextBlue': '#044A67',
      },
      backgroundColor: {
        'featureBgGray': '#f0f0f0',
        'featureBgBlue': '#2574A9'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
