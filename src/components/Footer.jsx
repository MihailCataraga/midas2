import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const toUp = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    return (
        <footer>
            <div className='top'>
                <p>Midas Group</p>
                <div className='links'>
                    <Link to={'/'} onClick={toUp}>Home</Link>
                    <Link to={'/about'} onClick={toUp}>About Us</Link>
                    <Link to={'/services'} onClick={toUp}>Services</Link>
                    <Link to={'/portfolio'} onClick={toUp}>Portfolio</Link>
                    <Link to={'/privacypolicy'} onClick={toUp}>Privacy policy</Link>
                    <Link to={'/cookies'} onClick={toUp}>Cookies</Link>
                </div>
                <div className='contacts'>
                    <p>+ 373 61234567</p>
                    <p>info@midasgroup.works</p>
                </div>
            </div>
            <div className='bottom'>
                <p>Midas Group © 2024</p>
            </div>
        </footer>
    )
}
