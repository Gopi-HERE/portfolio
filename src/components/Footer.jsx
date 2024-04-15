import React from 'react'
import './css/Footer.css'
import ig from './instagram.svg'
import yt from './youtube.svg'
import li from './linkedin.svg'

export default function Footer() {
  return (
    <>
      <div className='foot'>
        <div className="conc">
          Gopikanta Mondal
          <br />
        </div>
        <div className="social">
          <a href="https://www.youtube.com/@hacker_0g" target='_blank'><img src={yt}/></a>
          <a href="https://instagram.com/__itz__gopi___/" target='_blank'><img src={ig}/></a>
          <a href="https://linkedin.com/in/gopikanta-mondal/" target='_blank'><img src={li}/></a>
        </div>
      </div>
    </>
  )
}
