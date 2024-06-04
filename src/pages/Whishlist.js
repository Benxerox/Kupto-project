import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import cross from '../images/icon/cross.png';
import yjumper from '../images/products/promotion-items/jumpers/yellow hoddy copy.png';
import Container from '../components/Container';

const Whishlist = () => {
  return (
    <>
      <Meta title='Whishlist'/>
      <BreadCrumb title='Whishlist'/>
      <Container class1='wishlist-wrapper banner-section-2'>
        <div className='col-26'>

          <div className='whishlist-card position-relative'>
          <img src={cross} alt='' width='20px' className='position-absolute cross'/>
            <div className='whishlist-card-image'>
              <img src={yjumper} alt='' className='w-100 prod-image' />
            </div>
            <div className='whish-des'>
            <strong>Hoody Jumper</strong>
            <p className='para-13'> which is customizable (printable)</p>
            <p className='price-style'><strong>UGX 60,000</strong></p>
            </div>
            
          </div>

          <div className='whishlist-card position-relative'>
          <img src={cross} alt='' width='20px' className='position-absolute cross'/>
            <div className='whishlist-card-image'>
              <img src={yjumper} alt='' className='w-100 prod-image' />
            </div>
            <div className='whish-des'>
            <strong>Hoody Jumper</strong>
            <p className='para-13'> which is customizable (printable)</p>
            <p className='price-style'><strong>UGX 60,000</strong></p>
            </div>
            
          </div>

          <div className='whishlist-card position-relative'>
          <img src={cross} alt='' width='20px' className='position-absolute cross'/>
            <div className='whishlist-card-image'>
              <img src={yjumper} alt='' className='w-100 prod-image' />
            </div>
            <div className='whish-des'>
            <strong>Hoody Jumper</strong>
            <p className='para-13'> which is customizable (printable)</p>
            <p className='price-style'><strong>UGX 60,000</strong></p>
            </div>
            
          </div>
          

        </div>
      </Container>

   
    </>
  )
}

export default Whishlist