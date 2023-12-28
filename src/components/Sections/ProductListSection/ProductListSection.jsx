import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import ToogleSwitch from '../../HOC/ToogleSwitch/ToogleSwitch'
import { useEffect, useState } from 'react'
import Button from '../../HOC/Button/Button'
import ProductCard from '../../Common/ProductCard/ProductCard'
import Pagination from '../../HOC/Pagination/Pagination'
import { getAllRocket } from '../../../API'
import InfoModal from '../../Common/InfoModal/InfoModal'

const ProductListSection = () => {
  const [activeOption, setactiveOption] = useState('rocket')
  const [currentPage, setCurrentPage] = useState(1)
  const [startIndex, setStartIndex] = useState(0)
  const [rocketList, setRocketList] = useState([])
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [rocketData, setRocketData] = useState()
  const [rocketID, setRocketID] = useState(null)
  let itemPerPage = 3
  
  useEffect(() => {
    getAllRocket(setRocketList)
  },[])

  useEffect(() => {
    setRocketData(rocketList)
  },[rocketList])
  
  useEffect(() => {
    if(currentPage !== null){
      setRocketData(rocketList?.slice(startIndex, startIndex + itemPerPage))
    }
  },[currentPage, startIndex])

  return (
    <ScreenLayout>
      { showInfoModal && <InfoModal rocketID={rocketID} setShowInfoModal={setShowInfoModal}/> }
      <div className="list-ui flex flex-col gap-6 max-w-full">
        <nav>
          <ToogleSwitch currentState={activeOption} changeState={setactiveOption}/>
        </nav>
        <div className='product-content flex flex-col gap-6'>
          <h1 className='text-5xl w-fit border-b-2 border-orange-400'>{rocketData?.[0]?.rocket_name}</h1>
          <p className='tracking-widest	leading-8 text-gray-400'>{rocketData?.[0]?.description}</p>
        <Button><a href={rocketData?.[0]?.wikipedia} target='_blank'>View Detail</a></Button>
        </div>
        <Pagination itemPerPage={itemPerPage} setStartIndex={setStartIndex} data={rocketData} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <section className="flex flex-wrap flex-row product-grid">
          {
            rocketData?.map((data, inde) => 
              <ProductCard key={inde} data={data} handeModal={setShowInfoModal} setRocketID={setRocketID}/>)
          }
        </section>
      </div>
    </ScreenLayout>
  )
}

export default ProductListSection