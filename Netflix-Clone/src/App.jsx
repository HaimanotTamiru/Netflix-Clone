import { useState } from 'react'
import './App.css'
import Row from './Components/Row/Row'
import requests from './Components/APIKey/Requests'
import Home from './pages/Home/Home'
function App() {


  return (
    <div className="App">
      {/* <Row title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now"
      fetchUrl={requests.fetchTrending}/> */}
      <Home/>
    </div>
  )
}

export default App
