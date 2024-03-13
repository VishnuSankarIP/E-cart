import React from 'react'
import Header from '../Component/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../REDUX/slices/wishlistSlice'
import { addToCart } from '../REDUX/slices/cartSlice'

function Wishlist() {
  const wishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cartReducer)

  
  const handleCart=(product)=>{
    const existingProduct=cart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
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
   
{wishlist?.length>0?
 <Row className='mt-5'>
  {wishlist?.map(product=>(<Col className='mt-5 mb-5 ms-5' sm={12} md={6} lg={4} xl={3}>
 <Card style={{width:"18rem"}} >
 <Card.Img style={{height:'250px'}} variant="top" src={product?.thumbnail} />
 <Card.Body>
   <Card.Title>{product?.title.slice(0,15)}...</Card.Title>
  <div className='d-flex justify-content-between'>
  <button onClick={()=>dispatch(removeWishlistItem(product?.id))}><i class="fa-solid fa-heart-circle-xmark"></i></button>
   <button onClick={()=>handleCart(product)}><i class="fa-solid fa-cart-plus"></i></button>
  </div>
   
   <div className="text-center"> <Link  to={'view/1'} variant="primary">View more</Link></div>
  
 </Card.Body>
</Card>
  </Col>))}
 
</Row>
:
<div className="container" style={{marginTop:'100px'}}>
 <div className="d-flex justify-content-center w-100">
  <img src='https://static.vecteezy.com/system/resources/previews/016/026/442/original/empty-shopping-cart-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg' style={{height:'400px'}}></img>
  
 </div>
 <h3 className='text-center'>Your Wishlist is Empty</h3>
   </div>

}
  
    </>
  

  )
}

export default Wishlist