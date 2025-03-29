import Header from './components/header/Header'
import "./App.css"
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Meal from './components/meal/Meal'
import { Route, Routes } from 'react-router'

function App () {

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:dishName' element={<Meal/>}/>
      </Routes>
    </div>
  )
}

export default App
