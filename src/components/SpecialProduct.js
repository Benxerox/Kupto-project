import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const specialProduct = () => {
  return (
    
      <div className='special-product-card'>
        <div className='s-p'>
          <div className='pro-img'>
            <img src='images/products/promotion-items/shirts/maroon-t-shirt.jpg' alt='' className='s-p-img' />
            <div className='pro-small-img'>
             <img src='images/products/promotion-items/shirts/maroon-t-shirt.jpg' alt='' className='s-p-s-img' />

             <img src='images/products/promotion-items/shirts/maroon-t-shirt.jpg' alt='' className='s-p-s-img' />

             <img src='images/products/promotion-items/shirts/maroon-t-shirt.jpg' alt='' className='s-p-s-img' />
            </div>
          </div>

          <div className='special-product-content'>
            <h5>SHUTTLE</h5>
            <p className='des-special'>Cotton T-shirt which is customizable (printable)
            </p>

            <ReactStars
              count={5} 
              size={24} 
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className='price-style'><strong>UGX 25,000</strong> &nbsp; <strike>UGX 30,000</strike></p>
            <div className='discount-till'>
                <p>
                  <b>5 </b>days
                  </p>
                  <div className='dis-flex'>
                    <span className='badge-2'>1</span>:
                    <span className='badge-2'>1</span>:
                    <span className='badge-2'>1</span>
                    
                  </div>
                  
            </div>
            <div className='prod-count'>
                    <p>products: 5</p>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{'width':'25%'}}
                    aria-valuenow="25" 
                    aria-valuemin="0" 
                    aria-valuemax="100">
                      
                    </div>
                  </div>

                  </div>
                  <Link className='button-add' >Add to Cart</Link>
          </div>
        </div>
     </div>
  
    
  )
}

export default specialProduct