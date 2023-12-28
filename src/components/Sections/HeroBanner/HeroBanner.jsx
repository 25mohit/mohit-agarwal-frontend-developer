import React from 'react'
import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import Button from '../../HOC/Button/Button'
import rocketImage from "../../../assets/images/space-rocket.png"
import DownArrow from '../../HOC/Icons/DownArrow'

const HeroBanner = () => {
  return (
    <ScreenLayout>
      <div className="banner-section items-center justify-center">
          <div className="flex flex-col gap-6">
              <h1 className='text-white text-3xl tracking-widest'>You are just <b>3,84,400</b><small className='text-sm'>km</small> away from</h1>
              <h1 className='text-4xl font-semibold tracking-widest'>MOON</h1>
              <Button>refresh knowledge</Button>
              <p className='leading-10'>American spacecraft manufacturer, launch service provider, defense contractor and satellite communications company headquartered in Hawthorne, California</p>
          </div>
          <div className="hero-image flex justify-center">
              <img src={rocketImage} alt="Firing Rocket Image" loading='lazy' className='w-64'/>
          </div>
        </div>
        <footer className='absolute bottom-4 cursor-pointer inset-x-2/4'>
          <DownArrow className="w-10"/>
        </footer>
    </ScreenLayout>
  )
}

export default HeroBanner