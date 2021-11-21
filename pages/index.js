import Head from 'next/head'
import Features from '../components/features/features.js'
import Navbar from '../components/navbar/navbar.js'
import Navigation from '../components/navbar/navigation.js'
import Slider from '../components/slider/slider.js'

export default function Home() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      {/* <Navbar /> */}
      <Navigation />
      <Slider />
      <Features />
    </div >
  )
}
