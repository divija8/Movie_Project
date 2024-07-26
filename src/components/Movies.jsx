// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import { useEffect } from 'react'
import Pagination from './Pagination';


function Movies() {

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () =>{
    if(pageNo === 1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1);
    }
  }
  const handleNext = () =>{
      setPageNo(pageNo+1);
    
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f566df1f6fd1988fc7a8243f61a68f20&language=en-US&page=${pageNo}%27%20`)
    .then((res) => {
      setMovies(res.data.results);
    });
    }, [pageNo])

  
  return (
    <div className='p-5'>
       <div className='text-2xl m-5 font-bold text-center'>
         Trending movies
       </div>
       <div className="flex flex-row flex-wrap justify-around gap-8">
            {movies.map((movieObj, index)=>{
              return <MovieCard key={index} poster_path={movieObj.poster_path} name={movieObj.original_title}/>
            })}
       </div>

       <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies