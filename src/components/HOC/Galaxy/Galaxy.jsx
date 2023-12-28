import sun from "../../../assets/images/planets/p1.png"

const Galaxy = () => {
  return (
    <div className="galaxy">
        <div class="sun">
            {/* <img src={sun} alt="" /> */}
        </div>
        <div class="mercury"></div>
        <div class="venus"></div>
        <div class="earth">
            <div class="moon"></div>
        </div>
        <div class="mars"></div>
        <div class="jupiter"></div>
        <div class="saturn"></div>
        <div class="uranus"></div>
        <div class="neptune"></div>
        <div class="pluto"></div>
    </div>
  )
}

export default Galaxy