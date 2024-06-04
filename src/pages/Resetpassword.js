import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import Container from '../components/Container';
import Custominput from '../components/Custominput';

const Resetpassword = () => {
  return (
    <>
      <Meta title='Reset Password'/>
      <BreadCrumb title='Reset Password'/>
      <Container class1='login-wrapper banner-section-2'>
        <div className='col-27'>
          <div className='auth-card'>
            <h3>Reset Password</h3>
            
                <form action='' className='formms-log'>
                  <Custominput type='password' name='password' placeholder='Password'/>

                  <Custominput type='password' name='confpassword' placeholder='Confirm Password'/>
              
                 

                  <div>
                  
                    <div className='d-flex justify-content-center align-items-center gap-15'>
                      <button className='button-cont' type='submit'>Ok
                      </button>
                      

                    </div>
                  </div>
                  
                  
                </form>
          
          </div>
        </div>
      </Container>
    
    </>
  )
}

export default Resetpassword