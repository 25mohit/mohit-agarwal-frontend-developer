import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import { useEffect, useState } from 'react'
import Button from '../../HOC/Button/Button'
import ProductCard from '../../Common/ProductCard/ProductCard'
import Pagination from '../../HOC/Pagination/Pagination'
import { getAllRocket } from '../../../API'
import InfoModal from '../../Common/InfoModal/InfoModal'
import Stars from '../../HOC/Galaxy/Stars'

const ProductListSection = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [rocketList, setRocketList] = useState([])
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [rocketData, setRocketData] = useState([])
  const [rocketID, setRocketID] = useState(null)
  const [selectedCard, setSelectedCard] = useState({})
  let itemPerPage = 3
  
  useEffect(() => {
    getAllRocket(setRocketList)
  },[])
  
  useEffect(() => {
    const startIdx = (currentPage - 1) * itemPerPage;
    const endIdx = startIdx + itemPerPage;
    setRocketData(rocketList.slice(startIdx, endIdx));
    setSelectedCard(rocketList?.[0])
  }, [currentPage, itemPerPage, rocketList]);  

  return (
    <ScreenLayout>
      <Stars />
      { showInfoModal && <InfoModal rocketID={rocketID} setShowInfoModal={setShowInfoModal}/> }
      <div className="list-ui flex flex-col gap-6 max-w-full">
        <div className='product-content flex flex-col gap-6'>
          <h1 className='text-5xl w-fit border-b-2 border-orange-400'>{selectedCard?.rocket_name}</h1>
          <p className='tracking-widest	leading-8 text-gray-400'>{selectedCard?.description}</p>
          <Button><a href={selectedCard?.wikipedia} target='_blank'>View Detail</a></Button>
        </div>
        <Pagination itemPerPage={itemPerPage} data={rocketList} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <section className="flex flex-wrap flex-row product-grid">
          {
            rocketData?.map((data, inde) => 
              <ProductCard setSelectedCard={setSelectedCard} ind={inde} key={inde} data={data} handeModal={setShowInfoModal} setRocketID={setRocketID}/>)
          }
        </section>
      </div>
    </ScreenLayout>
  )
}

export default ProductListSection