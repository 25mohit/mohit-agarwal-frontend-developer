import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import ToogleSwitch from '../../HOC/ToogleSwitch/ToogleSwitch'
import { useEffect, useState } from 'react'
import Button from '../../HOC/Button/Button'
import ProductCard from '../../Common/ProductCard/ProductCard'
import Pagination from '../../HOC/Pagination/Pagination'

const ProductListSection = () => {
  const [activeOption, setactiveOption] = useState('rocket')
  const [currentPage, setCurrentPage] = useState(1)
  const [startIndex, setStartIndex] = useState(0)
  let itemPerPage = 3

  const testData = [
    { rocketName: "Falcone 1"},
    { rocketName: "Falcone2"},
    { rocketName: "Falcone3"},
    { rocketName: "Falcone4"},
    { rocketName: "Falcone5"},
    { rocketName: "Falcone6"},
    { rocketName: "Falcone7"},
    { rocketName: "Falcone8"},
    { rocketName: "Falcone9"},
    { rocketName: "Falcone10"},
  ]
  const [rocketData, setRocketData] = useState(testData)

  useEffect(() => {
    if(currentPage !== null){
      setRocketData(testData?.slice(startIndex, startIndex + itemPerPage))
    }
  },[currentPage, startIndex])

  return (
    <ScreenLayout>
      <div className="list-ui flex flex-col gap-6 max-w-full">
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
        <Pagination itemPerPage={itemPerPage} setStartIndex={setStartIndex} data={rocketData} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <section className="flex gap-6">
          {
            rocketData?.map((data, inde) => <ProductCard key={inde} data={data} ind={inde}/>)
          }
        </section>
      </div>
    </ScreenLayout>
  )
}

export default ProductListSection