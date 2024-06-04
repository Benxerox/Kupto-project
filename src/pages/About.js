import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import Container from '../components/Container';
import aboutImg from '../images/banner/about-img-1.jpg';
import { DiIllustrator } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import cmyk from '../images/banner/cymk.png';
import { MdOutlineFormatListBulleted } from "react-icons/md";
import sectionImage from '../images/banner/kupto-about.jpg';
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import aboutLarge from '../images/banner/about-large.png';
import aboutMachines from '../images/banner/about-machines.jpg';
import aboutShirt from '../images/banner/about-shirt.png';
import aboutStation from '../images/banner/about-station.png';

const About = () => {
  return (
    <>
    <Meta title='About us'/>
    <BreadCrumb title='About us'/>
    <Container class1=''>
      <div className='about-wrapper black-bck'>
      <div className='about-all'>
        <div className='about-icons'>
            <div className='border-yellow'>

            </div>
            <div>
              <DiIllustrator className='icon-ai'/>
            </div>
            <div>
              <DiPhotoshop className='icon-ai'/>
            </div>
            <div className='cmyk-box'>
              <img src={cmyk} alt='' className='w-100'/>
              <p className='color-gray'>CMY</p>
              </div>
          </div>
        <div>
          <img src={aboutImg} alt='' className='about-img' />
        </div>

        <div className='about-des'>
          
            <div>
              <h3 className='faint-f'> MISSION</h3>
              <h3 className='main-f'> MISSION</h3>
            </div>
              
              
          <p>
            Our mission is to ensure our customers
            receive quality products and services
            in a timely manner.
          </p>

          <div>
              <h3 className='faint-f'> VISSION</h3>
              <h3 className='main-f'> VISSION</h3>
            </div>
              
              
          <p>
            To be a leader in Quality, Efficiency and
            customer satisfaction
          </p>

          <div>
              <h3 className='faint-f'> VALUES</h3>
              <h3 className='main-f'> VALUES</h3>
            </div>
              
              
          <p>
            Our core values are <br />
            <MdOutlineFormatListBulleted /> &nbsp;
            Integrity <br />
            <MdOutlineFormatListBulleted />&nbsp;
            Customer satisfaction <br />
            <MdOutlineFormatListBulleted />&nbsp;
            Reliability

          </p>
        </div>
      </div>
      </div>

      <div className='section2-about'>
         <div className='intro-img'>
          <img src={sectionImage} alt='' className='w-100'/>
         </div>
         <div>
          <p className='intro-des'>
            <strong>Kupto</strong> offers a full range of services including: Graphic Designing.
            Printing. Branding, and General Supplies. We take a detail oriented approach,
            giving attention to every aspect of each design, Printing and Branding project, from
            paper choice to materials used.
          </p>

          <p className='intro-des'>
            <strong>Our main objective</strong> is to give value for money to our customers through provision
            of quality products at best prices within reasonable timeframe.<br /> <br />
            We see ourselves as valuable additions to our client's team and are proud of our
            relationships with them.
          </p>

          <p className='intro-des'>
            <strong>Our Philosophy</strong> <br /> Our approach is premised on customer satisfaction through tailor made services
            as per customer requirements. <br /> <br />
            In what has became a sea of sameness, we ensure our customer initiatives standout from the crowd and deliver business value.
          </p>
         </div>
      </div>

      

      <div className='section4-about'>
      <div className='des-print'>
        <div className='digital'>
            <h2 className='graphic-st'>DIGITAL</h2>
            <p className='des-st'>PRINT</p>
            <p className=''>
              Business cards / Flyers / Brochures /<br /> Magazines / Posters /Envelopes / Calendars /<br /> Folders / Menus / Postcards / Invitation cards / <br />Packaging &  Design Etc.
            </p>
        </div>

        <div className='offset'>
            <h2 className='graphic-st'>OFFSET</h2>
            <p className='des-st'>PRINT</p>
            <p className=''>
            We print in BULK with our speed-master offset <br />Machines such as; Brochures / Flyers / Booklets / <br />Magazines / Calendars / Labels / Newsletters / <br />Examinations Etc.
            </p>
        </div>
        
      </div>
        <div className='intro-img'>
          <img src={aboutMachines} alt='' className='w-100'/>
        </div>
        
      </div>

      <div className='section3-about'>
      <div className='intro-img'>
          <img src={aboutLarge} alt='' className='w-100'/>
        </div>
        <div className='descrip-des'>
          
          <div>
            <h2 className='graphic-st'>LARGE FORMAT</h2>
              <p className='des-st'>PRINT</p>
              
            <div className='d-flex gap-60 text-align-start'>
              
              <p>
                <MdOutlinePlaylistAddCheckCircle /> Banners <br/>
                <MdOutlinePlaylistAddCheckCircle /> Stickers <br/>
                <MdOutlinePlaylistAddCheckCircle /> Wall Papers <br/>
                <MdOutlinePlaylistAddCheckCircle /> Vehicle Image Wraps <br/>
                <MdOutlinePlaylistAddCheckCircle /> Backdrops <br/>
                <MdOutlinePlaylistAddCheckCircle /> Tear drops <br/>
                <MdOutlinePlaylistAddCheckCircle /> Pull up Banner etc <br/>
              </p>
             
            
            </div>
          </div>
        </div>
        
      </div>

      <div className='section5-about'>
        <div className='intro-shirt'>
          <img src={aboutShirt} alt='' className='w-100'/>
        </div>
        <div>
            <h2 className='graphic-st color-w'>T-SHIRTS</h2>
            <p className='des-st color-w'>DETAILS</p>
            <p className='color-w'>Collar/polo, round-neck, V-neck and for ladies <br/>
            - Screen print or embroidery
            </p>
        </div>
      </div>

      <div className='section4-about'>
      <div className='des-print'>
        

        <div className='offset'>
            <h2 className='graphic-st'>BRANDING</h2>
            <p className='des-st'>DETAILS</p>
            <p>
                <MdOutlinePlaylistAddCheckCircle /> Branded Cups <br/>
                <MdOutlinePlaylistAddCheckCircle /> Diaries <br/>
                <MdOutlinePlaylistAddCheckCircle /> Cd Branding <br/>
                <MdOutlinePlaylistAddCheckCircle /> Travel Mugs <br/>
                <MdOutlinePlaylistAddCheckCircle /> Mouse Pads <br/>
                <MdOutlinePlaylistAddCheckCircle /> Gift Bags <br/>
                <MdOutlinePlaylistAddCheckCircle /> Key Holders <br/>
                <MdOutlinePlaylistAddCheckCircle /> Water Bottles <br/>
                <MdOutlinePlaylistAddCheckCircle /> Umbrellas <br/>
                <MdOutlinePlaylistAddCheckCircle /> Paper Bags <br/>
                <MdOutlinePlaylistAddCheckCircle /> Branded Helmets <br/>
                <MdOutlinePlaylistAddCheckCircle /> Pens etc. <br/>
              </p>
        </div>
        
      </div>
        <div className='intro-img'>
          <img src={aboutStation} alt='' className='w-100'/>
        </div>
        
      </div>
      
      

    </Container>
    
    </>
  )
}

export default About