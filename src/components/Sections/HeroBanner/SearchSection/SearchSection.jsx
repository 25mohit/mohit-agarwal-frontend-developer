import DownArrow from '../../../HOC/Icons/DownArrow'
import SearchInput from '../../../HOC/SearchInput/SearchInput'
import ScreenLayout from '../../../Layout/ScreenLayout/ScreenLayout'

const SearchSection = () => {
  return (
    <ScreenLayout noPadding={true}>
        <div className="banner-img-container">
            <SearchInput />
        </div>
    </ScreenLayout>
  )
}

export default SearchSection