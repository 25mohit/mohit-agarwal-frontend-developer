import React from "react"
import './App.css'
import Navbar from "./components/HOC/Navbar/Navbar"
import Footer from "./components/HOC/Footer/Footer"
import HeroBanner from "./components/Sections/HeroBanner/HeroBanner"
import SearchSection from "./components/Sections/HeroBanner/SearchSection/SearchSection"

function App() {

  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroBanner />
      <SearchSection />
      <Footer />
    </div>
  )
}

export default App
