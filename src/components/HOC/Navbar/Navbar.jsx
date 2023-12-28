import { useState, useEffect, useRef } from "react";
import spaceXLogo from "../../../assets/spaceX-logo.png"

const Navbar = ({isSearchSectionVisible}) => {
  const navbarRef = useRef(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 40;

      setIsNavbarVisible(scrollPosition < threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav ref={navbarRef}  className={`navbar fixed w-screen flex flex-wrap items-center justify-between text-white ${isNavbarVisible ? 'show' : 'hide'}`}>
      <img src={spaceXLogo} alt="SpaceX Logo" loading="lazy" className="w-72 cursor-pointer"/>
      {isSearchSectionVisible && <p className="text-black text-lg">Search for SpaceX Capsules</p>}
    </nav>
  )
}

export default Navbar