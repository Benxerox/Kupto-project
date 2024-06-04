import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import Container from '../components/Container';
import ProductCard from '../components/ProductCard';




const OurStore = () => {
  const [grid, setGrid] = useState(3);
  
 

  return (
  <>
  <Meta title='Our Store'/>
  <BreadCrumb title='Our Store'/>

  <Container class1='store-wrapper'>
    <div className='d-flex gap-10 flex-1'>
      <div className='col-21'>
          <div className='filter-card'>
            <h3 className='filter-title'>Shop By Category</h3>
            <div>
              <ul>
                <li>Promotion items</li>
                <li>Printing</li>
                <li>Branding</li>
                <li>Stationery</li>
              </ul>
            </div>
          </div>
          <div className='filter-card'>
            <h3 className='filter-title'>Filter By</h3>
            <div>
              <h5 className='sub-title'>Availability</h5>
              <div className='form-check'>
                <input color='secondary'
                className='form-check-input'
                type='checkbox'
                value=''
                id=''
                />
                <label className='form-check-label' htmlFor=''>
                  In Stock {1}
                </label>
              </div>

              <div className='form-check'>
                <input 
                className='form-check-input'
                type='checkbox'
                value=''
                id=''
              
                />
                <label className='form-check-label' htmlFor=''>
                  Out of Stock {0}
                </label>
              </div>
              <h5 className='sub-title'>Price</h5>
              <div className='price-form'>

              <div className="form-floating">
                <input 
                type="email" 
                className="form-control-2" 
                id="floatingInput" 
                placeholder="From"/>
                
              </div>

              <div className="form-floating">
                <input 
                type="email" 
                className="form-control-2" 
                id="floatingInput1" 
                placeholder="To"/>
              
              </div>
              </div>
              <h5 className='sub-title'>Colors</h5>
              <div>
                <div>
                  <ul className='colors'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>

                </div>
              </div>
              <h5 className='sub-title'>Size</h5>
              <div>

                <div className='form-check'>
                  <input color='secondary'
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='color-1'
                  />
                  <label className='form-check-label' htmlFor='color-1'>
                    S (2)
                  </label>
                </div>

                <div className='form-check'>
                  <input color='secondary'
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='color-2'
                  />
                  <label className='form-check-label' htmlFor='color-2'>
                    M (0)
                  </label>
                </div>

                <div className='form-check'>
                  <input color='secondary'
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='color-3'
                  />
                  <label className='form-check-label' htmlFor='color-3'>
                    L (0)
                  </label>
                </div>

                <div className='form-check'>
                  <input color='secondary'
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='color-4'
                  />
                  <label className='form-check-label' htmlFor='color-4'>
                    XL (0)
                  </label>
                </div>

                <div className='form-check'>
                  <input color='secondary'
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='color-5'
                  />
                  <label className='form-check-label' htmlFor='color-5'>
                    XXL (0)
                  </label>
                </div>

              </div>
            </div>
          </div>
          <div className='filter-card'>
            <h3 className='filter-title'>Product Tags</h3>
            <div className='product-tags'>
              <span className='badge-span'>HeadPhones</span>
              <span className='badge-span'>Laptop</span>
              <span className='badge-span'>Mobile</span>
              <span className='badge-span'>Speeker</span>
              <span className='badge-span'>Tablet</span>
              <span className='badge-span'>Wire</span>
              <span className='badge-span'>Vivo</span>
            </div>
          </div>
          <div className='filter-card'>
            <h3 className='filter-title'>Random Product</h3>
            <div>
              <div className='random-prod'>
                <div className='w-25'>
                  <img src='images/products/promotion-items/jumpers/black_hoodie copy.png' alt='' className='rando-img' />
                </div>

                <div className='w-75'>
                  <strong>Hoody Jumper</strong>
                  <p> which is customizable
                  </p>
                  <ReactStars
                    count={5} 
                    size={24} 
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className='price-style'><strong>UGX 60,000</strong>
                  </p>
                </div>

              </div>

              <div className='random-prod'>
                <div className='w-25'>
                  <img src='images/products/promotion-items/jumpers/black_hoodie copy.png' alt='' className='rando-img' />
                </div>

                <div className='w-75'>
                <strong>Hoody Jumper</strong>
                  <p> which is customizable
                  </p>
                  <ReactStars
                    count={5} 
                    size={24} 
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className='price-style'><strong>UGX 60,000</strong></p>
                </div>

              </div>
            </div>
          </div>
          
        </div>

        <div className='col-22'>
          <div className='filter-sort-grid'>
            <div className='sort-grid-dis'>
              <div className='filter-display'>
                <p>Sort By:</p>
                <select name='' defaultValue={'manual'} className='form-cont'
                id=''
                >
                 
                  <option value='manual'>Featured</option>
                  <option value='best-selling'>Best Selling</option>
                  <option value='title-ascending'>Alphabetically, A-Z</option>
                  <option value='title-descending'>Alphabetically Z-A</option>
                  <option value='price-ascending'>Price, low to high</option>
                  <option value='price-descending'>Price, high to low</option>
                  <option value='created-ascending'>Date, old to new</option>
                  <option value='created-descending'>Date, new to old</option>
                </select>
              </div>
              <div className='right-dis'>
                <p className='totalproducts'>21 Products</p>
                <div className='right-dis'>
                  <img onClick={()=>{
                    setGrid(3);
                  }} 
                  src='images/icon/bar-1.png' alt='grid' className='bar-icon dark' />
                  <img onClick={()=>{
                    setGrid(4);
                  }} 
                  src='images/icon/bar-2.png' alt='grid' className='bar-icon' />
                  <img onClick={()=>{
                    setGrid(6);
                  }} 
                  src='images/icon/bar-3.png' alt='grid' className='bar-icon' />
                  <img onClick={()=>{
                    setGrid(12);
                  }} 
                  src='images/icon/bar-4.png' alt='grid' className='bar-icon' />
                </div>
              </div>
            </div>
            
          </div>
          <div className='products-list'>
          <ProductCard grid={grid}/>
            
          </div>
        </div>
      </div>
  </Container>
  
   

  
  </>
    
  )
}

export default OurStore