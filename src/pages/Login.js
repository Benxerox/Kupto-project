import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Custominput from '../components/Custominput';

const Login = () => {
  return (
    <>
    <Meta title='Login'/>
    <BreadCrumb title='Login'/>

    <Container class1='login-wrapper banner-section-2'>
      <div className='col-27'>
          <div className='auth-card'>
            <h3>Login</h3>
            
                <form action='' className='formms-log'>
                  <Custominput type='email' name='email' placeholder='Email'/>

                  <Custominput type='password' name='password' placeholder='Password'/>

                 

                  <div>
                    <Link className='marg' to='/forgot-password'>Forgot Password?</Link>
                    <div className='d-flex justify-content-center align-items-center gap-15'>
                      <button className='button-cont' type='submit'>Login</button>
                      <Link to='/signup' className='button-cont signup'>SignUp</Link>

                    </div>
                  </div>
                  
                  
                </form>
          
          </div>
        </div>
    </Container>
    
    </>
  )
}

export default Login