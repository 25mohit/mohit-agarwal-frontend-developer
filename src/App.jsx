import React from "react"
import './App.css'
import Navbar from "./components/HOC/Navbar/Navbar"
import Footer from "./components/HOC/Footer/Footer"
import HeroBanner from "./components/Sections/HeroBanner/HeroBanner"

function App() {

  return (
    <div className="bg-black">
      <Navbar />
      <HeroBanner />
      <Footer />
    </div>
  )
}

export default App
