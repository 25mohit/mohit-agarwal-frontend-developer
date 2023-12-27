import { useState } from 'react'
import DownArrow from '../../../HOC/Icons/DownArrow'
import SearchInput from '../../../HOC/SearchInput/SearchInput'
import ToogleSwitch from '../../../HOC/ToogleSwitch/ToogleSwitch'
import ScreenLayout from '../../../Layout/ScreenLayout/ScreenLayout'
import Button from '../../../HOC/Button/Button'

const SearchSection = () => {
  const [activeOption, setActiveOption] = useState('rocket')

  return (
    <ScreenLayout noPadding={true}>
        <div className="banner-img-container flex-col flex items-center justify-center">
          <div className='flex flex-col gap-6'>
            <ToogleSwitch currentState={activeOption} changeState={setActiveOption}/>
            <div className='flex gap-10'>
              <SearchInput currentState={activeOption}/>
              <Button>Search</Button>
            </div>
          </div>
        </div>
    </ScreenLayout>
  )
}

export default SearchSection