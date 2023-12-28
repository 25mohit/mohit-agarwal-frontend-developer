import React, { useState } from "react"
import './App.css'
import Navbar from "./components/HOC/Navbar/Navbar"
import Footer from "./components/HOC/Footer/Footer"
import HeroBanner from "./components/Sections/HeroBanner/HeroBanner"
import SearchSection from "./components/Sections/SearchSection/SearchSection"
import ProductListSection from "./components/Sections/ProductListSection/ProductListSection"
import Galaxy from "./components/HOC/Galaxy/Galaxy"

function App() {

  const [isSearchSectionVisible, setIsSearchSectionVisible] = useState(false)

  console.log("isSearchSectionVisible", isSearchSectionVisible);
  return (
    <div className="bg-black text-white">
      <Navbar isSearchSectionVisible={isSearchSectionVisible}/>
      <HeroBanner />
      <SearchSection manageObserver={setIsSearchSectionVisible}/>
      <ProductListSection />
      {/* <Galaxy /> */}
      <Footer />
    </div>
  )
}

export default App
