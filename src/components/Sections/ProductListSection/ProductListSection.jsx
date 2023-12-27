import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import ToogleSwitch from '../../HOC/ToogleSwitch/ToogleSwitch'
import { useState } from 'react'
import Button from '../../HOC/Button/Button'
import ProductCard from '../../Common/ProductCard/ProductCard'

const ProductListSection = () => {
  const [activeOption, setactiveOption] = useState('rocket')

  return (
    <ScreenLayout>
      <div className="list-ui flex flex-col gap-6">
        <nav>
          <ToogleSwitch currentState={activeOption} />
        </nav>
        <div className='flex flex-col gap-6 w-3/5'>
          <h1 className='text-5xl border-b-2 border-orange-400'>Falcon 1 Rocket</h1>
          <p className='tracking-widest	leading-8 text-gray-400'>The Falcon 1 was an expendable launch system privately developed and manufactured
by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first
privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.</p>
        <Button>View Detail</Button>
        </div>
        <section className="flex gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </div>
    </ScreenLayout>
  )
}

export default ProductListSection