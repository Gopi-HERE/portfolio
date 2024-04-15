import './css/Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const tgl = () => {
        document.querySelector('.hamburger').classList.toggle('change');
        document.querySelector('.sidebar').classList.toggle('show');
    }
    return (
        <header>
            <nav>
                <div className="left">
                    <Link to="/">Gopi's Portfolio</Link>
                </div>
                <div className="right">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/projects"><li>Projects</li></Link>
                        <Link to="/contact"><li>Contact Me</li></Link>
                    </ul>
                </div>
                <div className="hamburger" onClick={tgl}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </nav>
                <div className="sidebar">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/projects"><li>Projects</li></Link>
                        <Link to="/contact"><li>Contact Me</li></Link>

                </div>
        </header>
    )
}
