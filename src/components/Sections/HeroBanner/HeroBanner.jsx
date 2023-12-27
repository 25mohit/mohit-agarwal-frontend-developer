import React from 'react'
import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import Button from '../../Common/Button/Button'
import rocketImage from "../../../assets/images/space-rocket.png"
import DownArrow from '../../HOC/Icons/DownArrow'

const HeroBanner = () => {
  return (
    <ScreenLayout>
        <div className="flex flex-col items-start gap-6 w-3/5">
            <h1 className='text-white text-3xl tracking-widest'>You are just <b>3,84,400</b><small className='text-sm'>km</small> away from</h1>
            <h1 className='text-4xl font-semibold tracking-widest'>MOON</h1>
            <Button>refresh knowledge</Button>
            <p className='leading-10'>American spacecraft manufacturer, launch service provider, defense contractor and satellite communications company headquartered in Hawthorne, California</p>
        </div>
        <div className="hero-image w-2/5 flex justify-center">
            <img src={rocketImage} alt="Firing Rocket Image" loading='lazy' className='w-64'/>
        </div>
      <footer className='absolute bottom-4 cursor-pointer inset-x-2/4'>
        <DownArrow className="w-10"/>
      </footer>
    </ScreenLayout>
  )
}

export default HeroBanner