
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import View from './Pages/View'
import Home from './Pages/Home'
function App() {


  return (
   <>
 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>



    </Routes>
    <Footer/>
 
    </>
  )
}

export default App
