import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './brain.png'
import './logo.css'

const Logo = () => {
    return(
        <div className='ma4 mt0'>
        <Tilt>
        <div style={{ height: '100px',width:'100px',  backgroundImage: 'linear-gradient(to right orange, green, blue)'}}>
          <img src={Brain} alt='brain'></img>
        </div>
      </Tilt>
      </div>
    )
}
export default Logo;