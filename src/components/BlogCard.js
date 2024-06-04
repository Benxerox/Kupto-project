import React from 'react'
import { Link } from 'react-router-dom'


const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='card-image'>
        <img src='images/products/blog-1.jpg' alt='' className='image-c'/>
      </div>
      <div className='blog-content'>
        <p className='date'>11 JUNE,2024</p>
        <h5 className='title'>A Beautiful Sunday Morning Renalssance</h5>
        <p className='description'>You're only As good As Your Last Collection, Which is An Enormous Pressure. I Think There is Something About</p>
        <Link to='/' className='button'>READ MORE</Link>
      </div>
    </div>
  )
}

export default BlogCard