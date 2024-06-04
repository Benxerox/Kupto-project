import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Custominput from '../components/Custominput';

const Forgotpassword = () => {
  return (
    <>
    <Meta title='Forgot Password'/>
    <BreadCrumb title='Forgot Password'/>
    
    <Container class1='login-wrapper banner-section-2'>
      <div className='col-27'>
          <div className='auth-card'>
            <h3>Reset Your Password</h3>
            <p className='reset-p'>We will send you an email to reset your password</p>
            
                <form action='' className='formms-log'>
                  <Custominput type='email' name='email' placeholder='Email'/>
                  
                

                  <div>
                    
                    <div className='d-flex justify-content-center align-items-center gap-15 flex-column'>
                      <button className='button-cont' type='submit'>Submit</button>
                      <Link className='marg' to='/login'>Cancel</Link>

                    </div>
                  </div>
                  
                  
                </form>
          
          </div>
        </div>
    </Container>
   
    </>
  )
}

export default Forgotpassword