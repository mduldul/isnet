import Head from 'next/head'
import Navbar from '../components/navbar/navbar.js'
import Slider from '../components/slider/slider.js'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
    </div >
  )
}
