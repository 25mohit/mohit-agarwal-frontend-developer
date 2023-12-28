import { useState } from 'react'
import SearchInput from '../../HOC/SearchInput/SearchInput'
import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import Button from '../../HOC/Button/Button'
import { getCapsuleByFilter } from '../../../API'
import CapsuleCard from '../../Common/CapsuleCard/CapsuleCard'

const SearchSection = () => {
  const [filterOption, setFilterOption] = useState({
    status:'',
    original_launch:'',
    type:''
  })
  const [filteredData, setFilteredData] = useState(null)

  const onSearchHandler = () => {
    getCapsuleByFilter(filterOption, setFilteredData)
  }

  return (
    <ScreenLayout noPadding={true}>
        <div className="banner-img-container flex-col flex items-center justify-center">
          <div className='flex gap-10 flex-wrap'>
              <SearchInput setFilterOption={setFilterOption} filterOption={filterOption}/>
              <Button onClick={onSearchHandler}>Search</Button>
          </div>
          {
            filteredData !== null && (filteredData?.length > 0 ? 
              <div className="capsules-grid flex gap-4 justify-center flex-wrap mt-6">
                {
                  filteredData?.map((data, ind) => <CapsuleCard data={data} key={ind}/>)
                }
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