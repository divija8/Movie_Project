// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function MovieCard({poster_path, name}) {
  return (
    <div className='h-[40vh] w-[200px] bg-cover bg-center flex items-end rounded-xl hover:scale-110 duration-300 hover:cursor-pointer'  
    style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path}`}}>  
    <div className="text-white rounded-xl text-xl w-full p-2 text-center bg-gray-900/60">
      {name}
    </div>
    </div>
  )
}

export default MovieCard