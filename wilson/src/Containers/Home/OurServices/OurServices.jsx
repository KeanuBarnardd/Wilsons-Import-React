import React from 'react'
import './OurServices.scss';

import {images} from '../../../Constants/index';

const OurServices = () => {
  return (
    <div className="services__background-img app__flex" style={{ backgroundImage: `url(${images.trucksBirdsEyeview})` }}>
      <div className="services__content app__container-width">
        <h1 className='services__title'>Our services</h1>
        <div className="services__content-grid">
          <div className="services__card">
            <i className='fa-solid fa-truck'></i>
            <div className="services__card-content">
              <h1>Transport</h1>
              <p>We transport your needs all around the country.</p>
            </div>
          </div>
          <div className="services__card">
            <i className='fa-solid fa-boxes-stacked'></i>
            <div className="services__card-content">
              <h1>Storage</h1>
              <p>We store your need so you don't have to worry.</p>
            </div>
          </div>
          <div className="services__card">
            <i className='fa-solid fa-headphones'></i>
            <div className="services__card-content">
              <h1>Consulting</h1>
              <p>We love consulting for logistics like any expert.</p>
            </div>
          </div>
          <div className="services__card">
            <i className='fa-solid fa-truck'></i>
            <div className="services__card-content">
              <h1>Trucking</h1>
              <p>We provide local trucking based on your needs.</p>
            </div>
          </div>
          <div className="services__card">
            <i className='fa-solid fa-truck-fast'></i>
            <div className="services__card-content">
              <h1>Deliveries</h1>
              <p>We provide door to door deliveries for any product.</p>
            </div>
          </div>
          <div className="services__card">
            <i className='fa-solid fa-cube'></i>
            <div className="services__card-content">
              <h1>Packaging</h1>
              <p>We will cover your products with solid packaging.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default OurServices