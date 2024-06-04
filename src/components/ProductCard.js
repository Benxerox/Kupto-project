import React from 'react'
import { useLocation } from 'react-router-dom';
import whish from '../images/icon/wish.svg';
import { Detail } from './ProductDetails';
import { Link } from 'react-router-dom';


const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  
  

  return (
    <>
    {
      Detail.map((curElm)=>{
        return(
        <>
        
        <div  className={`${location.pathname ==='/product'? `gr-${grid}`:'col-4'}`} key={curElm.id}>

      
        <Link to={`/product/${curElm.id}`} 
            className='product-card'>

          <div className='product-image'>
          <img src={curElm.imageurl} alt=''className='prod-img'/>
          </div>
          <div className='product-details'>
          {curElm.stars}
          <strong>{curElm.name}</strong>
          <p>{curElm.description}</p>
          <p className={`descript ${grid === 12 ? 'd-block': 'd-none'}`}>{curElm.descrlarge}</p>
          <p className='price-style'><strong>{curElm.price}</strong></p>
          <div className='wish'>
            <button className='border-0 bg-transparent'><img src={whish} alt='' /></button>
          </div>
          
          </div>

        </Link>
        </div>
        
        </>
        )
      })
    }
    





    </>
  )
}

export default ProductCard;
//
// {`${location.pathname==='/'
 //? '/product/:id'
 //:location.pathname ==='/product/:id'
 //?'/product/:id':':id'}`}

// {`/product/:${curElm.id}`}