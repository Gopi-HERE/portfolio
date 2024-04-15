import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './About.css'
import gopi from './gopi.jpg'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <h1>About Me</h1>
        <div className="introduction section">
          <span>
            Welcome to my corner of the internet! I'm Gopikanta Mondal, a 'Web Developer', 'Gamer', 'Video Editor', 'Photo Editor' passionate about Gaming and Web Develpoing. With a blend of skills, creativity, and a love for development, I strive to be the best in my field.
            Let's connect, collaborate, and create something extraordinary together!Socials are below...
          </span>
          <img src={gopi} alt="gopi" />
        </div>
        <div className="gaming section">
          <iframe src="https://www.youtube.com/embed/J0cbI3wurkI?si=0MVGwTGojxEk0n0d" mute />
          <span>
            Gaming has been a significant part of my life for as long as I can remember. From the adrenaline-pumping matches in FIFA to the intense battles in BGMI, I find joy, excitement, and sometimes even lessons in every gaming session.<br/><br />
            As a passionate gamer, I bring the strategic thinking, quick decision-making, and teamwork skills honed through countless hours of gameplay into every aspect of my work.
          </span>
        </div>
      </div>
      <Footer />
    </>
  )
}
