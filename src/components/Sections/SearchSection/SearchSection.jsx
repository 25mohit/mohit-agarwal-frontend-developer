import { useEffect, useState } from 'react'
import SearchInput from '../../HOC/SearchInput/SearchInput'
import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import Button from '../../HOC/Button/Button'
import { getCapsuleByFilter } from '../../../API'
import CapsuleCard from '../../Common/CapsuleCard/CapsuleCard'
import Pagination from '../../HOC/Pagination/Pagination'

const SearchSection = () => {
  const [filterOption, setFilterOption] = useState({
    status:'',
    original_launch:'',
    type:''
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [startIndex, setStartIndex] = useState(0)
  const [capsuleLists, setCapsuleLists] = useState([])
  let itemsPerPage = 4;
  const [filteredData, setFilteredData] = useState(null)

  const onSearchHandler = () => {
    getCapsuleByFilter(filterOption, setFilteredData)
  }
  
    useEffect(() => {
      if(filteredData!== null) setCapsuleLists(filteredData)
    },[filteredData])
  
    useEffect(() => {
      if(currentPage !== null){
        setCapsuleLists(filteredData?.slice(startIndex, startIndex + itemsPerPage))
      }
    },[currentPage, startIndex, filteredData])
    
  console.log("capsuleLists", capsuleLists, filteredData);
  return (
    <ScreenLayout noPadding={true}>
        <div className="banner-img-container flex-col flex items-center justify-center">
          <div className='flex gap-10 flex-wrap'>
              <SearchInput setFilterOption={setFilterOption} filterOption={filterOption}/>
              <Button onClick={onSearchHandler}>Search</Button>
          </div>
          {
            filteredData !== null && (filteredData?.length > 0 ? 
              <div className="flex flex-col gap-4 mt-6">
              <Pagination dark data={filteredData} itemPerPage={itemsPerPage} currentPage={currentPage} setStartIndex={setStartIndex} setCurrentPage={setCurrentPage}/>
              <section className="capsules-grid flex gap-4 justify-center flex-wrap">
                  {
                    capsuleLists?.map((data, ind) => <CapsuleCard data={data} key={ind}/>)
                  }
                </section>
            </div> :
            <div>
              <span>No Data Avaiable</span>
            </div>)
          }
        </div>
    </ScreenLayout>
  )
}

export default SearchSection