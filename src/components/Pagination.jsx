// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Pagination({pageNo, handleNext, handlePrev}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div onClick={handleNext} className='px-8'><i className="fa-duotone fa-solid fa-arrow-right"></i></div>
        <div>{pageNo}</div>
        <div onClick={handlePrev} className='px-8'><i className="fa-solid fa-arrow-left"></i></div>
    </div>
  )
}

export default Pagination