import React from 'react'
import {product, FooterBanner, HeroBanner} from '../components';

const Home = () => {
  return (
    <>
      Hero Banner
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-heading'>
        {['product 1','product 2'].map(
          (product) => product)}
      </div>
      Footer
    </>
  )
}

export default Home