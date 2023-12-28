const SearchInput = ({ setFilterOption, filterOption }) => {

  const getCurrentUTCTimestamp = () => {
    const currentDate = new Date();
    const utcTimestamp = currentDate.toISOString();

    return utcTimestamp;
  };

  const handleDateChange = () => {
    const utcTimestamp = getCurrentUTCTimestamp();
    setFilterOption({ ...filterOption, 'original_launch': utcTimestamp });
  };

  return (
    <div className='search-pannel flex items-center justify-evenly'>
        {/* <input type="text" placeholder={`${currentState} name`}/>
        <span className="text-3xl select-none">/</span> */}
        <select name="" id="" className="input" style={{fontSize:'1.5rem', width:'fit-content'}} onChange={e => setFilterOption({...filterOption, 'status': e.target.value})}>
          <option value="">status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <span className="text-3xl select-none">/</span>
        <input type="date" placeholder="launch" style={{fontSize:'1.5rem', width:'fit-content'}}  className="input" onChange={handleDateChange}/>
        <span className="text-3xl select-none">/</span>
        <input type="text" placeholder="type" className="input" onChange={e => setFilterOption({...filterOption, 'type': e.target.value})}/>
    </div>
  )
}

export default SearchInput