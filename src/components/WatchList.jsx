// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useState } from 'react';
import genreids from '../Utility/genre'


// eslint-disable-next-line react/prop-types
function WatchList({watchlist, setWatchList, handleRemoveFromWatchList}) {

  const [search, setSearch] = useState(' ');
  const [genrelist, setGenres]  = useState(['All genres'])
  const [currGenre, setCurreGenre] = useState('All Genres')
  
  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }
  const handleFilter = (genre) => {
      setCurreGenre(genre)
  }
  const sortIncreasing = () => {
      // eslint-disable-next-line react/prop-types
      const sortedInc = watchlist.sort((movieA, movieB) =>{
        return movieA.vote_average - movieB.vote_average
      })
      setWatchList([...sortedInc]);
  }
  const sortDecreasing = () => { 
    // eslint-disable-next-line react/prop-types
    const sortDecr = watchlist.sort((movieA, movieB) =>{
      return movieB.vote_average - movieA.vote_average
    })

    setWatchList([...sortDecr]);
    
  }

  useEffect(() =>{
    // eslint-disable-next-line react/prop-types
    let temp = watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp);
    setGenres(['All genres', ...temp])
  },[watchlist])



  return (
    <>
    <div className='flex justify-center flex-wrap m-4 gap-4'>
      {genrelist.map((genre) =>{
         // eslint-disable-next-line react/jsx-key
         return (<div 
         onClick={() => handleFilter(genre)} 
         className={ currGenre === genre ? 'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4'
           :'flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-semibold'}>
          {genre}
        </div>
         );
      })}
      </div>
    <div className='flex justify-center my-4'>
       <input onChange={handleSearch} value={search} type='text' placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-200 px-4'/>
    </div>
    <div className="border border-gray-200 m-5 rounded-lg overflow-hidden">
      <table className="w-full text-gray-500 text-center">
        <thead className="border-b-3 text-gray-800 bg-gray-200">
          <tr>
            <th>Name</th>
            <th className='flex justify-center'>
              <div onClick={sortIncreasing} className='p-2'><i className="fa-solid fa-arrow-up"></i></div>
              <div className='p-2'>Ratings</div>
              <div onClick={sortDecreasing} className='p-2'><i className="fa-solid fa-arrow-down"></i></div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
         {watchlist.filter((movieObj) =>{
           if(currGenre === 'All Genres') {
               return true;
           } else {
              return genreids[movieObj.genre_ids[0]]===currGenre;
           }
         })
         .filter((movieObj) =>{
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
         }).map((movieObj)=>{
            // eslint-disable-next-line react/jsx-key
            return <tr className='border-b-2'>
            <td className='flex-items-center px-6 py-4'>
            <img className="h-[6rem] w-auto" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
              <div className='mx-4'>{movieObj.original_title}</div>
            </td>
            <td>{movieObj.vote_average}</td>
            <td>{movieObj.popularity}</td>
            <td>{genreids[movieObj.genre_ids[0]]}</td>
            <td onClick={()=>handleRemoveFromWatchList(movieObj)} className='text-red-800'>Delete</td>
          </tr>
         })}
          
        </tbody>
      </table>
    </div>
    </>
  ) 
}

export default WatchList