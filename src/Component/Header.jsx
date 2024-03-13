import React from 'react'
import { Badge, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const cartCount=useSelector(state=>state.cartReducer).length
  const wishlistCount= useSelector(state=>state.wishlistReducer).length
  return (
    <>
      <Navbar style={{backgroundColor:"#6610F2",zIndex:'10'}} data-bs-theme="light" className='position-fixed w-100 top-0'>
        <Container>
          <Navbar.Brand ><Link to={'/'} style={{fontSize:"30px",color:'white',textDecoration:'none'}}><i class="fa-solid fa-truck me-2 "  ></i>E Cart</Link></Navbar.Brand>


         <div className="midDiv ms-auto ">
            <Form.Control
            type="text"
            placeholder="Search Products!!"
            className=" mr-sm-2"
          /></div>
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'}  style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-heart me-2" style={{color:"white"}}></i>Wishlist<Badge bg="light rounded ms-2">{wishlistCount}</Badge></Link> </Nav.Link>
            <Nav.Link><Link to={'/cart'}  style={{ color:'white',textDecoration:'none'}}><i class="fa-solid fa-cart-shopping me-2" style={{color:"white"}}></i>Cart<Badge bg="light rounded ms-2">{cartCount}</Badge></Link> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header