import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import location from '../images/icon/contact-1.png';
import phone from '../images/icon/contact-2.png';
import email from '../images/icon/contact-3.png';
import days from '../images/icon/contact-4.png';
import Container from '../components/Container';


const Contact = () => {
  return (
    <>
    <Meta title='Contact'/>
    <BreadCrumb title='Contact'/>

    <Container class1='contact-wrapper'>
      <div className='contact-row'>
          <div className='col-24 cont-map'>
          <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.75942933586!2d32.5806311747763!3d0.3113049996856476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd338f28854b%3A0x9204eefe6ff00768!2sLight%20Arcade%20Suite%20F15!5e0!3m2!1sen!2sug!4v1716965030993!5m2!1sen!2sug" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className='col-25'>
            <div className='cont-wrap'>
              <div>
                <h3 className='contact-title'>Contact</h3>
                <form action='' className='formms'>
                  <div>
                    <input type='text' className='form-c' placeholder='Name'/>
                  </div>
                  <div>
                    <input type='email' className='form-c' placeholder='Email'/>
                  </div>
                  <div>
                    <input type='tel' className='form-c' placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea name='' id='' className='w-100 text-b' cols='30' rows='5'
                    placeholder='Comments'
                    ></textarea>
                  </div>
                </form>
                <div>
                <button className='button-cont'>Submit</button>
              </div>
              </div>

              <div>
                <h3 className='contact-title'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='list-cont'><img src={location} alt=''width='28px'/>
                    <address className='addre'>P.O Box 9696 Nasser Road, Light Arcade, Room no. B14</address>
                    </li>
                    <li className='list-cont'><img src={phone} alt=''width='28px'/>
                    <a href='tel:+256 704116349' className='addre'>+256 704116349</a>
                    </li>
                    <li className='list-cont'><img src={email} alt=''width='28px'/>
                    <a href='mailto:kupto20@gmail.com' className='addre'>kupto20@gmail.com</a>
                    </li>
                    <li className='list-cont'><img src={days} alt=''width='28px'/>
                    <p className='addre'>Monday-Saturday 8:00 AM - 7:00 AM</p>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
    </Container>

    
    </>
  )
}

export default Contact