import React from 'react'
import './Home.scss';
import Header from './../Header/Header';

import {images} from '../../Constants/index';

const Home = () => {
  return (
    <Header backgroundImg={images.header} />
  )
}

export default Home;