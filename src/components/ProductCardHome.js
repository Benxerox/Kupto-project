import React from 'react'
import whish from '../images/icon/wish.svg';
import { Link } from 'react-router-dom';

const ProductCardHome = (props) => {
  return (
    <>
    <div className='col-4'>

    
      <Link to={`/product/:id:${props.id}`} className='product-card'>

        <div className='product-image'>
        <img src={props.url} alt=''className='prod-img'/>
        </div>
        <div className='product-details'>
        {props.stars}
        <strong>{props.name}</strong>
        <p>{props.description}</p>
        
        <p className='price-style'><strong>{props.price}</strong></p>
        <div className='wish'>
          <button className='border-0 bg-transparent'><img src={whish} alt='' /></button>
        </div>

        </div>

      </Link>
    </div>

    </>
  )
}

export default ProductCardHome
