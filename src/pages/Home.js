import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import SpecialProduct from '../components/SpecialProduct';
import ProductCart from '../components/ProductCard';
import mainbanner from '../images/banner/main banner-img.jpg';
import otherbanner1 from '../images/banner/other-banners-2.jpg';
import otherbanner2 from '../images/banner/other-banners-3.jpg';
import otherbanner3 from '../images/banner/other-banners-4.jpg';
import strip from '../images/banner/strip.jpg'
import Container from '../components/Container';
import {services} from '../utils/Data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCardHome from '../components/ProductCardHome';
import { productData } from '../components/ProductDetails';
import post1 from '../images/banner/posts-1.jpg';
import post2 from '../images/banner/posts-2.jpg';

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const product = productData.map((item)=>(
    <ProductCardHome name={item.name} url={item.imageurl} price={item.price} stars={item.stars} description={item.description} descrlarge={item.descrlarge}/>
    
  ));
  return (
    <>
    <Container class1='home-banner-section'>
          <div className='d-flex gap-10 flex-wrap'>

      <div className='main-banner'>
        <img src={mainbanner} alt='' className='w-100 slide'/>
        <div className='main-banner-content'>
          <h4>SHOP WITH US NOW.</h4>
          <h5>For all your <br />Stationery</h5>
          <p>Machinery and Printing.<br/>Save upto 30%*</p>
          <Link to='print' className='print'>PRINT NOW</Link>
        </div>
      </div>

      <div className='other-banners d-flex flex-column gap-9'>
        <div className='top-banners d-flex gap-10'>
          <div>
            <img src={otherbanner1} alt='' className='w-100' />
          </div>
          <div>
            <img src={otherbanner2} alt='' className='w-100' />
          </div>
        </div>

        <div>
          <img src={otherbanner3} alt='' className='w-100' />
        </div>
      </div>

          </div>
    </Container>

    <Container class1='banner-section-2'>
      <div className='container-fe'>
            <div className='services'>
              {
                services?.map((i,j) => {
                  return(
                    <div className='serv' key={j}>
                      {i.image}
                      <div>
                        <h6>{i.title}</h6>
                        <p>{i.tagline}</p>
                      </div>
                    </div>
                  )
                })
              }
             

            </div>
          
        
      </div>
    </Container>
  
    <Container class1='strip-des'>
       <img src={strip} alt='' className='w-100'/>
    </Container>
    
    
    
    <Container class1='banner-section-3'>
      <h3 className='section-heading'>Featured Collection</h3>
        
          
        <Carousel showDots={true} itemClass='mb-20' className='blog' responsive={responsive}>
        
          {product}
          
        </Carousel>
        

    </Container>

    <Container class1='banner-section-3'>
    <div>
        <div className='categories'>
          <div className='cat'>
            <div>
              <h6>Cameras & Videos</h6>
              <p>10 Items</p>
            </div>
            <img src='images/icon/category-05.jpg' alt='' className='cat-img'/>
          </div>

          <div className='cat'>
            <div>
              <h6>Cameras & Videos</h6>
              <p>10 Items</p>
            </div>
            <img src='images/icon/category-02.jpg' alt='' className='cat-img'/>
          </div>

          <div className='cat'>
            <div>
              <h6>Cameras & Videos</h6>
              <p>10 Items</p>
            </div>
            <img src='images/icon/category-03.jpg' alt='' className='cat-img'/>
          </div>

          <div className='cat'>
            <div>
              <h6>Cameras & Videos</h6>
              <p>10 Items</p>
            </div>
            <img src='images/icon/category-04.jpg' alt='' className='cat-img'/>
          </div>
        </div>

        <div className='categories'>
          <div className='cat'>
            <div>
              <h6>Cameras & Videos</h6>
              <p>10 Items</p>
            </div>
            <img src='images/icon/category-01.jpg' alt='' className='cat-img'/>
          </div>

          <div className='cat'>
            <div>
              <h6>Cameras & Videos</h6>
              <p>10 Items</p>
            </div>
            <img src='images/icon/category-06.jpg' alt='' className='cat-img'/>
          </div>

          <div className='cat'>
            <div>
              <h6>Cameras & Videos</h6>
              <p>10 Items</p>
            </div>
            <img src='images/icon/category-07.jpg' alt='' className='cat-img'/>
          </div>

          <div className='cat'>
            <div>
              <h6>Cameras & Videos</h6>
              <p>10 Items</p>
            </div>
            <img src='images/icon/category-08.jpg' alt='' className='cat-img'/>
          </div>
        </div>
      </div>
    </Container>

    <Container class1='special-wrapper'>
      <h3 className='section-heading'>Special Products</h3>
        <div className='prod-s'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          
          
        </div>
    </Container>

    <Container class1='descrip-section'>
      <div className='des-cont'>
          <div className='desss color-w'>
            <div className='des-doc'>
              <div className='position-absolute'>
              <h6>BIG SCREEN</h6>
              <h4>Smart Watch Series</h4>
              <p>From $399 or $16.62/mo. for 24mo*</p>
              </div>
              <img src='images/banner/pro-advert-1.jpg' alt='' className='descrip-photo' />
            </div>
          </div>

          <div className='desss'>
            <div className='des-doc'>
              <div className='position-absolute'>
              <h6>BIG SCREEN</h6>
              <h4>Smart Watch Series</h4>
              <p>From $399 or $16.62/mo. for 24mo*</p>
              </div>
              <img src='images/banner/pro-advert-4.jpg' alt='' className='descrip-photo' />
            </div>
          </div>

          <div className='desss'>
            <div className='des-doc'>
              <div className='position-absolute'>
              <h6>BIG SCREEN</h6>
              <h4>Smart Watch Series</h4>
              <p>From $399 or $16.62/mo. for 24mo*</p>
              </div>
              <img src='images/banner/pro-advert-3.jpg' alt='' className='descrip-photo' />
            </div>
          </div>

          <div className='desss'>
            <div className='des-doc'>
              <div className='position-absolute'>
              <h6>BIG SCREEN</h6>
              <h4>Smart Watch Series</h4>
              <p>From $399 or $16.62/mo. for 24mo*</p>
              </div>
              <img src='images/banner/pro-advert-2.jpg' alt='' className='descrip-photo' />
            </div>
          </div>
          
          
        </div>
    </Container>

    

    <Container class1='banner-section-3'>
      <h3 className='section-heading'>Our Popular Products</h3>
        <div className='blog'>
          
            <div className='col-9'>
              <div>
                <img src={post1} alt='' className='w-100 mb-10' />
              </div>
              <div>
                <p className='post-p'>GET GREAT IDEAS TO</p>
                <h2>GROW <span>YOUR</span></h2>
                <h2>BUSINESS</h2>
                
              </div>
            </div>
            <div className='col-10'>
              <div>
                <img src={post2} alt='' className='w-100 mb-10' />
              </div>
              <div>
              <p className='post-p'>GET GREAT IDEAS TO</p>
                <h2>GROW <span>YOUR</span></h2>
                <h2>BUSINESS</h2>
              </div>
            </div>
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          
        </div>
    </Container>

    <Container class1='blog-wrapper'>
      <h3 className='section-heading'>Our Latest Blogs</h3>
        <div className='blog'>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
    </Container>


   



    </>
  )
}

export default Home
