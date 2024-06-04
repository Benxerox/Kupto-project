import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import jumper from '../images/products/promotion-items/jumpers/red-hoody.png';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Container from '../components/Container';



const Cart = () => {
  return (
    <>
    <Meta title='Cart'/>
      <BreadCrumb title='Cart'/>
      <Container class1='cart-wrapper section-11'>
        <div className='cart-header d-flex align-items-center justify-content-between mb-10'>
            <h3 className='cart-col-1'>PRODUCT</h3>
            <h3 className='cart-col-2'>PRICE</h3>
            <h3 className='cart-col-3'>QUANTITY</h3>
            <h3 className='cart-col-4'>TOTAL</h3>
          </div>

          <div className='cart-data d-flex align-items-center justify-content-between'>
            <div className='cart-col-1 d-flex align-items-center gap-10'>
            <div className='cart-dis'>
              <img src={jumper} alt='' className='w-100'/>
            </div>
            <div className='cart-des'>
              <p>Jumper (Hoodie) that can be customized (your own Design).</p>
              <p>Size: Large</p>
              <p>Color: Red</p>
            </div>
            </div>

            <div className='cart-col-2'>
            <p className='price-style'><strong>UGX 60,000</strong></p>
            </div>
            <div className='cart-col-3 d-flex align-items-center gap-10'>
                <div>
                  <input type='number' min={1} name='' id='' className='cart-form'/>
                </div>
                <div>
                  <RiDeleteBin6Line className='fs-4' />
                </div>
            </div>
            <div className='cart-col-4'>
              <p className='price-style'><strong>UGX 60,000</strong></p>
            </div>
          </div>

          <div className='cart-data d-flex align-items-center justify-content-between'>
            <div className='cart-col-1 d-flex align-items-center gap-10'>
            <div className='cart-dis'>
              <img src={jumper} alt='' className='w-100'/>
            </div>
            <div className='cart-des'>
              <p>Jumper (Hoodie) that can be customized (your own Design).</p>
              <p>Size: Large</p>
              <p>Color: Red</p>
            </div>
            </div>

            <div className='cart-col-2'>
            <p className='price-style'><strong>UGX 60,000</strong></p>
            </div>
            <div className='cart-col-3 d-flex align-items-center gap-10'>
                <div>
                  <input type='number' min={1} name='' id='' className='cart-form'/>
                </div>
                <div>
                  <RiDeleteBin6Line className='fs-4' />
                </div>
            </div>
            <div className='cart-col-4'>
              <p className='price-style'><strong>UGX 60,000</strong></p>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <Link to='/product' className='button'>Continue Shopping</Link>

            <div className='d-flex flex-column align-items-end'>
              <h3 className='mb-10'>SubTotal: UGX 60,000</h3>
              <p>Taxes and Shipping (Delivery) calculated at checkout</p>
              <Link to='/checkout' className='button check-size mt-10'>Checkout</Link>
            </div>
          </div>
      </Container>
     
      
    </>
  )
}

export default Cart
