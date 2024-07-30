// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function MovieCard({movieObj, poster_path, name, handleAddWatchList, handleRemoveFromWatchList, watchlist}) {
  function doesContain(movieObj) {
    // eslint-disable-next-line react/prop-types
    for (let i = 0; i < watchlist.length; i++) {
      // eslint-disable-next-line react/prop-types
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
  style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 p-1 flex justify-center h-8 w-8 rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddWatchList(movieObj)}
          className="m-4 p-1 flex justify-center h-8 w-8 rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}
     <div className="text-white rounded-xl text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  )
}

export default MovieCard