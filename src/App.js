import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Whishlist from './pages/Whishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PrintOrder from './pages/PrintOrder';







const App = () => {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='whishlist' element={<Whishlist />}/>
          <Route path='Contact' element={<Contact />}/>
          <Route path='print' element={<PrintOrder />}/>
          <Route path='product' element={<OurStore />}/>
          <Route path='product/:id' element={<SingleProduct />}/>
          <Route path='About us' element={<About />}/>
          <Route path='login' element={<Login />}/>
          <Route path='forgot-password' element={<Forgotpassword />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='reset-password' element={<Resetpassword />}/>
          <Route path='privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='refund-policy' element={<RefundPolicy />}/>
          <Route path='Shipping-policy' element={<ShippingPolicy />}/>
          <Route path='terms-and-conditions' element={<TermsAndConditions />}/>
          <Route path='cart' element={<Cart />}/>
          <Route path='checkout' element={<Checkout />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App

