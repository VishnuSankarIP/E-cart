import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deQuantity, emptyCart, inQuantity, removeCartItem } from '../REDUX/slices/cartSlice'


function Cart() {
  const cartItems = useSelector(state => state.cartReducer)
  const [cartTotal, setCardTotal] = useState(0)
  const dispatch=useDispatch()

  useEffect(() => {
    if (cartItems?.length > 0) {
      setCardTotal(cartItems?.map(item => item.totalPrice).reduce((t1, t2) => t1 + t2))
    }
    else {
      setCardTotal(0)
    }
  }, [cartItems])

  const handleDecrementQuantity=(product)=>{
if(product.quantity>1)
{
   dispatch(deQuantity(product.id))
}
else{

  dispatch(removeCartItem(product.id))
}
  }
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: '100px' }}>

        {
          cartItems?.length > 0 ?
            <div className="pt-5 ms-5">
              <h1>Cart summary</h1>
              <div className="row">
                <div className="col-lg-8">
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>...</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems?.map((product, index) => (<tr>
                          <td>{index + 1}</td>
                          <td>{product.title.slice(0, 16)}...</td>
                          <td><img src={product.thumbnail} width={'60px'} height={'60px'}></img></td>
                          <td>
                            <div className="d-flex">
                              <button onClick={()=>handleDecrementQuantity(product)} className='btn'>-</button>
                              <input value={product.quantity} className='form-control' placeholder='0' readOnly type='text' style={{ width: '50px' }}></input>
                              <button onClick={()=>dispatch(inQuantity(product.id))} className='btn'>+</button>
                            </div>

                          </td>
                          <td>{product.totalPrice}</td>
                          <td><i onClick={()=>dispatch(removeCartItem(product.id))} class="fa-solid fa-trash" style={{ color: 'red' }}></i></td>
                        </tr>))
                      }
                    </tbody>
                  </table>
                  <div className="d-flex " style={{ justifyContent: 'flex-end' }}>
                    <button onClick={()=>dispatch(emptyCart())} className='p-1 btn btn-warning me-2 rounded'>EMPTY CART</button>
                    <button className='p-1 btn btn-primary'>Shop More</button>
                  </div>
                </div>
                <div className="col-lg-4 mt-2">
                  <div className="container border rounded">
                    <h4>Items:{cartItems?.length}</h4>
                    <h3>Total Price:{cartTotal}</h3>
                    <button className='btn btn-success w-100 mb-5 mt-5 p-1'>Check out</button>
                  </div>
                </div>
              </div>
            </div>

            :
            <div className="d-flex justify-content-center w-100 flex-column align-items-center">
              <img src='https://static.vecteezy.com/system/resources/previews/016/026/442/original/empty-shopping-cart-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg' style={{ height: '400px' }}></img>
              <h3>Your Wishlist is Empty</h3>
            </div>
        }



      </div>


    </>

  )
}

export default Cart