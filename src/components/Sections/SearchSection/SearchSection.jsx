import { useEffect, useState } from 'react'
import SearchInput from '../../HOC/SearchInput/SearchInput'
import ScreenLayout from '../../Layout/ScreenLayout/ScreenLayout'
import Button from '../../HOC/Button/Button'
import { getCapsuleByFilter } from '../../../API'

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

  console.log("filteredData", filteredData);
  return (
    <ScreenLayout noPadding={true}>
        <div className="banner-img-container flex-col flex items-center justify-center">
          <div className='flex gap-10 flex-wrap'>
              <SearchInput setFilterOption={setFilterOption} filterOption={filterOption}/>
              <Button onClick={onSearchHandler}>Search</Button>
          </div>
        </div>
    </ScreenLayout>
  )
}

export default SearchSection