import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import { json, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItem } from '../REDUX/slices/wishlistSlice'
import { addToCart } from '../REDUX/slices/cartSlice'

function View() {
  
  const[product,setProduct]=useState()
  const{id}=useParams()

  const wishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()

  const cart=useSelector(state=>state.cartReducer)



  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts=JSON.parse
      (sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])

  const handleWishlist=(product)=>{
    if(wishlist?.includes(product)){
      alert("Item alredy in your Wishlist!!")
    }
    else{
      dispatch(addWishlistItem(product))
    }
  }

  const handleCart=(product)=>{
    const existingProduct=cart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("Products added to cart")
    }
    else{
      dispatch(addToCart(product))
      alert("product added to  your cart!!")
    }
  }


  return (
    <>
    <Header/>
  <div className=" container" style={{marginTop:'100px'}}>
    <div className="row">
      <div className="col-lg-6">
        <img  src={product?.thumbnail} className='w-50' style={{height:'300px'}}></img>
      </div>
      <div className="col-lg-6">
        <h5>PID:{product?.id}</h5>
        <h2>{product?.title}</h2>
        <h3>{product?.price}</h3>
        <h5>{product?.description}</h5>
        <div className="d-flex mt-5">
          <button onClick={()=>handleWishlist(product)} className='me-4 p-1'><i class="fa-solid fa-heart me-2" style={{color:"red"}} ></i>Add to Wishlist</button>
          <button onClick={()=>handleCart(product)} className='p-1'><i class="fa-solid fa-cart-shopping me-2" style={{color:"orange"}}></i>Add to cart</button>

        </div>
      </div>
    </div>
  </div>
    </>
    
  )
}

export default View