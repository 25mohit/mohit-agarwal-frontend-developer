const Pagination = ({ data, currentPage, setCurrentPage , itemPerPage, dark }) => {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemPerPage);
    const onPageChangeHandler = (no) => {
        // setStartIndex(no * itemPerPage )
        setCurrentPage(no + 1)
    }
    
    const handlePrevious = () => {
        if (currentPage > 1) {
          const newPage = currentPage - 1;
          // setStartIndex((newPage - 1) * itemPerPage);
          setCurrentPage(newPage);
        }
      };

    const onNextHandler = () => {
        if(currentPage < totalPages){
            onPageChangeHandler(currentPage)
        }
    }
    
  return (
    <div className="flex justify-end overflow-x-auto">
        <div className={`pagination flex justify-between border rounded ${dark && 'dark'}`}>
            <button className="pg-bt" onClick={handlePrevious}>&lt;</button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`pg-bt ${currentPage === index + 1 ? 'text-white' : 'text-gray-500'}`}
                onClick={() => onPageChangeHandler(index)}
              >
                {index + 1}
              </button>
            ))}
            <button className="pg-bt" onClick={onNextHandler}>&gt;</button>
        </div>
    </div>
  )
}

export default Pagination