import React from 'react'
import './pattern.css';
import img1 from '../src/image/image1.jpg';
import img2 from '../src/image/image2.jpg';
import img3 from '../src/image/image3.jpg';
import img4 from '../src/image/image4.jpg';
import img5 from '../src/image/image5.jpg';
import img6 from '../src/image/images6.jpg';
import Footer from './Footer';
import Header from './Header'
export default function Pattern() {
  return (

    <>
    <Header/>
   
      <div className='downtxt1'>Select any pattern to your choice</div>
      <div>
        <img className='image1' src={img1} />
        <img className='image2' src={img2} />
        <img className='image3' src={img3} />
      </div>
      <div>
        <img className='image4' src={img4} />
        <img className='image5' src={img5} />
        <img className='images6' src={img6} />
      </div>
      <Footer/>
    </>
  )
}
