import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import Banner from './components/Banner'


import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<><Banner/><Movies/></>}/>
        <Route path='/WatchList' element={<WatchList/>}/>
      </Routes> 
    </BrowserRouter> 
    </>
  )
}

export default App


// https://api.themoviedb.org/3/movie/popular?api_key=f566df1f6fd1988fc7a8243f61a68f20&language=en-US&page=1%27%20\