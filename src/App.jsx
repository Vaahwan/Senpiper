import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/navbar/Navbar'
import Form from './pages/form/Form'
import Table from './pages/table/AllReviews'
import {Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     hello world
     <Navbar/>
     <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/table' element={<Table/>} />
     </Routes>
    </>
  )
}

export default App
