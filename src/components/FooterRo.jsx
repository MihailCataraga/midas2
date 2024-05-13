import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterRo(props) {
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
                    <Link to={props.path + '/'} onClick={toUp}>Acasă</Link>
                    <Link to={props.path + '/about'} onClick={toUp}>Despre noi</Link>
                    <Link to={props.path + '/services'} onClick={toUp}>Servicii</Link>
                    <Link to={props.path + '/portfolio'} onClick={toUp}>Portofoliu</Link>
                    <Link to={props.path + '/privacypolicy'} onClick={toUp}>Politica de confidențialitate</Link>
                    <Link to={props.path + '/cookies'} onClick={toUp}>Cookies</Link>
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
