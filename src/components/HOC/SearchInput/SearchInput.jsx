const SearchInput = ({ currentState }) => {
  return (
    <div className='search-pannel p-4 flex items-center justify-evenly'>
        <input type="text" placeholder={`${currentState} name`}/>
        <span className="text-3xl select-none">/</span>
        <input type="text" placeholder="status"/>
        <span className="text-3xl select-none">/</span>
        <input type="text" placeholder="launch"/>
        <span className="text-3xl select-none">/</span>
        <input type="text" placeholder="type"/>
    </div>
  )
}

export default SearchInput