import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import Container from '../components/Container';
import Custominput from '../components/Custominput';



const signup = () => {
  return (
    <>
      <Meta title='Sign Up'/>
      <BreadCrumb title='Sign Up'/>
      <Container class1='login-wrapper banner-section-2'>
        <div className='col-27'>
          <div className='auth-card'>
            <h3>Sign UP</h3>
            
                <form action='' className='formms-log'>
                  <Custominput type='text' 
                    name='name' 
                    placeholder='Name'/> 

                  <Custominput type='email' name='email' placeholder='Email'/>

                  <Custominput type='tel' name='mobile' placeholder='Mobile Number'/>

                  <Custominput type='password' name='password' placeholder='Password'/>
                

                  <div>
                  
                    <div className='d-flex justify-content-center align-items-center gap-15'>
                      <button className='button-cont' type='submit'>Login</button>
                      

                    </div>
                  </div>
                  
                  
                </form>
          
          </div>
        </div>
      </Container>
    
    </>
  )
}

export default signup