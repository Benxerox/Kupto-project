import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

import { GiReceiveMoney } from "react-icons/gi";

export const services = [{
  image: <FaShippingFast className="fs-5 home-icon"/>,
  title: 'FREE SHIPPING',
  tagline: 'From all orders over $250'
},
{
  image: <BiSupport className="fs-5 home-icon"/>,
  title: '24/7 CUSTOMER SERVICE',
  tagline: 'Shop with an expert'
},

{
  image: <GiReceiveMoney className='fs-5 home-icon'/>,
  title: 'MONEY BACK GUARANTEE',
  tagline: '30-day money-back guarantee'
}]