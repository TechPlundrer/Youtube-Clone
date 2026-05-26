import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/video/:categoryId/:videoId' element={<video/>} />
          
       </Routes>
    </div>
  )
}

export default App