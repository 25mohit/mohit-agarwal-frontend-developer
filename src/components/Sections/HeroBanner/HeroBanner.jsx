import React, { useEffect, useState } from 'react'
import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import Button from '../../HOC/Button/Button'
import rocketImage from "../../../assets/images/space-rocket.png"
import Tooltip from '../../HOC/Tooltip/Tooltip'
import Stars from '../../HOC/Galaxy/Stars'
import MOONDATA from "../../../MOON_DATA.json"

const HeroBanner = () => {
  const [rocketActivated, setRocketActivated] = useState(false)
  const [newThought, setNewThought] = useState(MOONDATA?.space_facts?.[Math.round(Math.random() * MOONDATA?.space_facts?.length)]?.fact)

  useEffect(() => {
    if(rocketActivated){
      setTimeout(() => {
        setRocketActivated(false)
      },1200)
    }
  },[rocketActivated])
  
  const onRefreshHandler = () => {
    setNewThought(MOONDATA?.space_facts?.[Math.round(Math.random()* MOONDATA?.space_facts?.length)]?.fact)
  }

  return (
    <ScreenLayout showGalaxy={true}>
      <Stars />
      <div className="banner-section justify-center items-center ">
        <div className="flex flex-col gap-6">
            <h1 className='text-white text-3xl tracking-widest'>{newThought}</h1>
            <Button onClick={onRefreshHandler}>refresh knowledge</Button>
            <p className='leading-10'>American spacecraft manufacturer, launch service provider, defense contractor and satellite communications company headquartered in Hawthorne, California</p>
        </div>
        <div className="hero-image">
          <Tooltip content="Click me to FIRE !!">
            <img src={rocketImage} onClick={() => setRocketActivated(!rocketActivated)} alt="Firing Rocket Image" loading='lazy' className={`cursor-pointer w-64 ${rocketActivated ? "activated" : ""}`}/>
          </Tooltip>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default HeroBanner