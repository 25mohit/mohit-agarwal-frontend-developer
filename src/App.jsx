import React from "react"
import './App.css'
import Navbar from "./components/HOC/Navbar/Navbar"
import Footer from "./components/HOC/Footer/Footer"
import HeroBanner from "./components/Sections/HeroBanner/HeroBanner"
import SearchSection from "./components/Sections/SearchSection/SearchSection"
import ProductListSection from "./components/Sections/ProductListSection/ProductListSection"

function App() {

  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroBanner />
      <SearchSection />
      <ProductListSection />
      <Footer />
    </div>
  )
}

export default App
