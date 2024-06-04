import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import a0 from '../images/banner/a0-01.png';
import { Link } from 'react-router-dom';


const PrintOrder = () => {
  return (
    <>
      <Meta title='Order Form'/>
      <BreadCrumb title='Order Form'/>
      <Container>
    <div className='main-b'>
        <div className='print-form'>
        <div className='font-w black-b'>
          
          <div className='print-des'>
            <h3 className='sub-t-p'>PRINT ORDER FORM</h3>
            <h1 className='st-fonts'>STANDARD</h1>
            <p className='q-font'>QUALITY</p>
            <h1 className='st-font'>CONTROL</h1>
            <p className='para-14'>
              Business cards / Flyers / Brochures /
              Magazines / Posters / <br /> Envelopes / 
              Calendars / Folders / Menus / Postcards / <br /> Invitation cards Etc.
            </p>
           
            <Link to='/product' className='button-p'>Continue Shopping</Link>
            </div>
        </div>

          <div className='form-print-input'>
              <form action='' className='formms'>
                                    <div>
                                      <input type='text' className='form-p' placeholder='Name' />
                                    </div>
                                    <div>
                                    
                                      <input type='email' className='form-p' placeholder='Email'/>
                                    </div>
                                    <div>
                                    
                                      <input type='email' className='form-p' placeholder='Confirm Email'/>
                                    </div>
                                    <div>
                                    <div>
                                      
                                      <input type='tel' className='form-p' placeholder='Mobile Number'/>
                                    </div>
                                    <div className='mt-10'>
                                      <p>Paper Stock</p>
                                      <div className='d-flex gap-10 mt-10'>
                                          <input 
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id=''
                                          
                                            /> Glossy
                                        
                                      
                                          <input 
                                            className='mrform-check-input'
                                            type='checkbox'
                                            value=''
                                            id=''
                                        
                                          /> Matte
                                        </div>
                                      </div>    
                                    </div>
                                    <div>
                                      <p>Paper Thickness</p>
                                      <select name='' defaultValue={'manual'} className='form-p'
                                      id=''
                                      >
                                      
                                        <option value='manual'>300gsm</option>
                                        <option value='best-selling'>250gsm</option>
                                        <option value='title-ascending'>200gsm</option>
                                        <option value='title-descending'>170gsm</option>
                                        <option value='price-ascending'>150gsm</option>
                                        <option value='price-descending'>130gsm</option>
                                        <option value='created-ascending'>100gsm (Bond)</option>
                                        <option value='created-descending'>80gsm (Bond)</option>
                                        <option value='created-descending'>70gsm (Bond)</option>
                                      </select>
                                    </div>

                                    <div>
                                      <p>Lamination</p>
                                      <select name='' defaultValue={'manual'} className='form-p'
                                      id=''
                                      >
                                      
                                        <option value='manual'>None</option>
                                        <option value='best-selling'>Glossy</option>
                                        <option value='title-ascending'>Matte</option>
                                        <option value='title-descending'>Volvet</option>
                                
                                      </select>
                                    </div>
                                    
                                    <div>
                                      <p>Number of Copies</p>
                                      <input type='number' className='form-p'/>
                                    </div>
                                    <div>
                                      <p>Upload for Printing</p>
                                      <button className='up-but'>Choose Files</button>
                                    </div>
                                    <div>
                                      <p>Instructions</p>
                                      <textarea name='' id='' className='text-b w-100' cols='30' rows='5'
                                      
                                      ></textarea>
                                    </div>
                                    <Link to='/' className='button-submit'>Submit</Link>
                                    
                  </form>
            </div>
                </div>


                  <div>
            <img src={a0} alt='' className='a0-img' />
          </div>
          <div className='print-descrip'>
            <h3 className='mb-10'>PAPER SIZES INCLUDE;</h3>
            <p className='para-14'>A0= 33.1 x 46.8 in 84.1 x 118.8 cm</p>
            <p className='para-14'>A1= 23.4 x 33.1 in 59.4 x 84.1 cm</p>
            <p className='para-14'>A2= 16.5 x 23.4 in 42.0 x 59.4 cm</p>
            <p className='para-14'>A3= 11.7 x 16.5 in 29.7 x 42.0 cm</p>
            <p className='para-14'>A4= 8.3 x 11.7 in 21 x 29.7 cm</p>
            <p className='mt-10'>Fill in the form to get your work printed.</p>
            </div>
      </div>
      </Container>
    </>
  )
}

export default PrintOrder
