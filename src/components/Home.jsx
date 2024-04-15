import React from 'react'
import dev from './dev.png'
import './css/Home.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Typed from 'typed.js';


export default function Home() {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Developer', 'Gamer', 'Video Editor', 'Photo Editor'],
            backSpeed: 60,
            typeSpeed: 60,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <Navbar />
            <div className='Home'>
                <div className="intro">
                    <div className="name">
                        Hey there, I am <span>Gopi</span>
                        <br />
                        I am a Passionate
                        <br />
                        <span className='skills' ref={el} />
                    </div>
                    <img src={dev} />
                </div>
                <hr />
                <div className="heading">
                    Expertises
                </div>
                <div className="main">
                    <div className="leftContent">
                        <span>
                            Full Stack MERN Developer
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Node JS</li>
                                <li>React JS</li>
                                <li>Express JS</li>
                                <li>MongoDB</li>
                                <li>Deploying Websites</li>
                            </ul>
                        </span>
                    </div>
                    
                    <div className="rightContent">
                        <span>
                            {'<'}coder{'>'}
                            <ul>
                                <li>DSA</li>
                                <li>LeetCode 150+ questions Solved</li>
                                <li>Java Specialist</li>
                            </ul>
                            {'<'}coder{'/>'}
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
