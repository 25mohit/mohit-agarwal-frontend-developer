import spaceXLogo from "../../../assets/spaceX-logo.png"

const Navbar = () => {
  return (
    <nav className="navbar fixed flex items-center justify-between text-white">
      <img src={spaceXLogo} alt="SpaceX Logo" loading="lazy" className="w-72 cursor-pointer"/>
      <p>ad</p>
    </nav>
  )
}

export default Navbar