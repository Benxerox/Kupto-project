import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className='breadcrumb'>
      <div className='col-20'>
        <p className='center-t'><Link to='/' className='text-dark'>Home &nbsp;</Link>/ {title}</p>
      </div>
    </div>
  )
}

export default BreadCrumb