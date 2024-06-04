import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import ProductCart from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import { LuHeart } from "react-icons/lu";
import jumper from '../images/products/promotion-items/jumpers/red-hoody.png';
import Container from '../components/Container';
import { useParams } from 'react-router-dom';
import  { Detail }  from '../components/ProductDetails';



const SingleProduct = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = ({target: {value}})=> {
    setSelectedQuantity(value);
  };
  const getImage = (colour) => {
    const {attributes} = product;
    const image = attributes.images.data.find(image => image.attributes.name.includes(colour));
    return image.attributes.url || '';
  };

  useEffect(()=>{
    if (product && product.attributes) {
      const {attributes} = product;
      setSelectedColor(attributes.colours[0]);
      setSelectedSize(attributes.colours[0]);
    }
  },[product, setSelectedColor, setSelectedSize]);


  
 

  const props = {
    width: 500, 
    height: 500, 
    zoomWidth: 500, 
    img: 'imageurl'
  };

  const [orderedProduct, setorderedProduct] = useState(true);

  return (
    <>
      <Meta title={'Product Name'}/>
      <BreadCrumb title={'Product Name'}/>

      <Container class1='main-product-wrapper section-11'>
        <div className='container-xxl'>
            <div className='row bg-white'>
              <div className='col-6'>
                <div className='main-pic'>
                <div>
                  
                <ReactImageZoom  {...props} />
                </div>
                </div>
                <div className='other-product-images d-flex justify-content-between flex-wrap'>
                  <div>
                    <img src={jumper} className='w-100' alt='' />
                  </div>
                  <div>
                    <img src={jumper} className='w-100' alt='' />
                  </div>
                  <div>
                    <img src={jumper} className='w-100' alt='' />
                  </div>
                  <div>
                    <img src={jumper} className='w-100' alt='' />
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='main-product-details'>
                  <div className='border-bottom'>
                    <strong>{Detail.name}</strong>
                    <p className='mt-10'>{Detail.description}</p>
                  </div>
                    <div className='border-bottom'>
                      <p className='price-style font-s'><strong>{Detail.price}</strong></p>
                      <div className='d-flex align-items-center gap-10  mb-10'>
                       {Detail.stars}
                        <p className='para-14'>(2 Reviews)</p>
                      </div>
                      <a className='para-14' href='#review' >Write a Review</a>
                    </div>

                    <div className='border-bottom mt-10 mb-10'>
                      <h3 className='font-tt'>Size</h3>
                      <select className='sizes mt-10'>
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Large</option>
                      </select>
                    </div>

                    <div className='border-bottom'>
                      <h3 className='font-tt'>Color</h3>
                      
                      <ul className='colors mt-10'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                
                      </ul>
                      
                    </div>

                    <div className='border-bottom mt-10'>
                      <h3 className='font-tt mb-10'>Quantity</h3>
                      <input className='sizes number-pro' type="number" name='' min={1} id=''></input>
                    </div>

                    <div className='border-bottom mt-10'>
                      <h3 className='font-tt'>Upload For Printing</h3>
                      <p className='font-13 mb-10'>Printing on it will cost UGX 6000 more. DTF & Heat press print out</p>
                      <button className='choose-but'>Choose Files</button>
                      <p className='font-13'>The maximum file size is 30mb(Pdf,doc,eps,svg)</p>
                      
                    </div>
                    

                    
                    <button className='addcart-but mt-10 mb-10'>Add to Cart</button>

                    <div className='mt-10 d-flex align-items-center border-bottom'>
                      <a className='d-flex align-items-center gap-10 icon-link' href='#review' ><LuHeart className='fs-5' /> Add to Whishlist</a>
                    </div>

                    
                    
                  
                </div>
              </div>
            </div>
          </div>
      </Container>


      <Container class1='description-wrapper section-11'>
        <h4>Description</h4>
          <div className='bg-white p-30'>
            
            <p className='dees'>{Detail.descrlarge}</p>
          </div>
      </Container>


      <Container class1='reviews-wrapper section-11'>
        <h4 id='review'>Reviews</h4>
          <div className='row'>
            <div className='col-rev w-100 bg-white'>
              <div className='review-head'>
                <div>
                  <h4>Customer Reviews</h4>
                  <div className='d-flex gap-10 align-items-center'>
                    <ReactStars
                      count={5} 
                      size={24} 
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='mb-0'>Based on 2 Reviews</p>
                  </div>
                </div>
                  {
                    orderedProduct && 
                      (<div>
                        <a className='write-r' href='#review'>Write a Review</a>
                      </div>)
                    
                  }
                
              </div>
              <div  className='review-form'>
                <h4>Write A Review</h4>
                <form action='' className='formms'>
                <div>
                    <ReactStars
                      count={5} 
                      size={24} 
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                </div>
                  <div>
                    <textarea name='' id='' className='w-100 text-b' cols='30' rows='5'
                    placeholder='Comments'
                    ></textarea>
                  </div>
                </form>
                <div className='d-flex justify-content-end'>
                  <button className='button-cont'>Submit Review</button>
                </div>
              </div>
              <div className='reviews'>
                <div className='review'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h5 className='rev-t'>Navdeep</h5>
                    <ReactStars
                      count={5} 
                      size={24} 
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                    <p className='mt-10'>At Jumia Uganda, we've brought the entire shopping universe right to your fingertips. We're not just an online store; we're your ally in discovering the finest online sales, premium offers, captivating deals, and unparalleled discounts.</p>
                </div>
              </div>
            </div>
          </div>
      </Container>



      <Container class1='banner-section-3'>
        <h3 className='section-heading'>Our Popular Products</h3>
        <div className='blog'>
          <ProductCart />
          <ProductCart />
          <ProductCart />
          
        </div>
      </Container>





     
    </>
  )
}

export default SingleProduct
