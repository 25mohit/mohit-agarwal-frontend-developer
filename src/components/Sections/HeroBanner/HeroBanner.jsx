import React, { useEffect, useState } from 'react'
import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import Button from '../../HOC/Button/Button'
import rocketImage from "../../../assets/images/space-rocket.png"
import DownArrow from '../../HOC/Icons/DownArrow'
import Tooltip from '../../HOC/Tooltip/Tooltip'

const HeroBanner = () => {
  const [rocketActivated, setRocketActivated] = useState(false)
  useEffect(() => {
    if(rocketActivated){
      setTimeout(() => {
        setRocketActivated(false)
      },1200)
    }
  },[rocketActivated])
  return (
    <ScreenLayout>
      <div className="banner-section items-center justify-center">
          <div className="flex flex-col gap-6">
              <h1 className='text-white text-3xl tracking-widest flex flex-wrap gap-2'>You&nbsp;are&nbsp;just 
                <Tooltip content="This is the total distance from earth to moon"><b>3,84,400</b></Tooltip>
                <small className='text-sm'>km</small> away&nbsp;from</h1>
              <h1 className='text-4xl font-semibold tracking-widest'>MOON</h1>
              <Button>refresh knowledge</Button>
              <p className='leading-10'>American spacecraft manufacturer, launch service provider, defense contractor and satellite communications company headquartered in Hawthorne, California</p>
          </div>
          <div className="hero-image">
            <Tooltip content="Click me to FIRE !!">
              <img src={rocketImage} onClick={() => setRocketActivated(!rocketActivated)} alt="Firing Rocket Image" loading='lazy' className={`cursor-pointer w-64 ${rocketActivated ? "activated" : ""}`}/>
            </Tooltip>
          </div>
        </div>
        <footer className='absolute bottom-4 cursor-pointer inset-x-2/4'>
          <DownArrow className="w-10"/>
        </footer>
    </ScreenLayout>
  )
}

export default HeroBanner