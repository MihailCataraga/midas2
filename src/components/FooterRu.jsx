import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterRu(props) {
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
                    <Link to={props.path + '/'} onClick={toUp}>Дом</Link>
                    <Link to={props.path + '/about'} onClick={toUp}>О нас</Link>
                    <Link to={props.path + '/services'} onClick={toUp}>Услуги</Link>
                    <Link to={props.path + '/portfolio'} onClick={toUp}>Портфолио</Link>
                    <Link to={props.path + '/privacyPolicy'} onClick={toUp}>Политика конфиденциальности</Link>
                    <Link to={props.path + '/cookies'} onClick={toUp}>Cookies</Link>
                </div>
                <div className='contacts'>
                    <p>+ 373 68193004</p>
                    <p>info@midasgroup.works</p>
                </div>
            </div>
            <div className='bottom'>
                <p>Midas Group © 2024</p>
            </div>
        </footer>
    )
}
