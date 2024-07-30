import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import Banner from './components/Banner'
import { useState, useEffect } from 'react'


import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  const [watchlist, setWatchList] = useState([]);

  const handleAddWatchList = (movieObj) =>{
    const newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList));
    setWatchList(newWatchList);

  }

  const handleRemoveFromWatchList = (movieObj) =>{
    const filteredWatchList = watchlist.filter((movie) =>{
      return movie.id != movieObj.id;
    })
    setWatchList(filteredWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
  }
  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<><Banner/><Movies handleAddWatchList={handleAddWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/></>}/>
        <Route path='/WatchList' element={<WatchList watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>}/>
      </Routes> 
    </BrowserRouter> 
    </>
  )
}

export default App