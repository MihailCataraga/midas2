import React, { useEffect, useRef, useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menu, setMenu] = useState(false)
    const [lang, setLang] = useState(false)

    // Menu ref
    const menuRef = useRef(null)

    // Close menu when you Click outside it
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu()
        }
    };

    // Close menu when you scroll
    const scrollCloseMenu = () => {
        closeMenu()
    }

    const closeMenu = () => {
        const elem = document.getElementById('menu')
        elem.style.animation = 'menuClose .5s linear'
        setTimeout(() => {
            setMenu(false)
        }, 450)
    }
    const closeLang = () => {
        const elem = document.getElementById('lang')
        elem.style.animation = 'langClose .5s linear'
        setTimeout(() => {
            setLang(false)
        }, 450)
    }

    // Pulse onClick
    const pulse = (param) => {
        const elem = document.getElementById(param)
        elem.style.color = '#a18900'
        setTimeout(() => {
            elem.style.color = '#ffd700'
            elem.addEventListener('mouseenter', function() {
                this.style.color = '#ffd700'; // Schimbă culoarea la hover
            });
            elem.addEventListener('mouseleave', function() {
                this.style.color = '#f7f7f7'; // Restabilește culoarea la ieșirea mouse-ului
            });
        }, 500)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('scroll', scrollCloseMenu);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', scrollCloseMenu);
        }
    })
    return (
        <div className='navbar'>
            {menu ? <IoClose className='icon iconActive' onClick={closeMenu} />
                : <IoMenu className='icon' onClick={() => setMenu(true)} />
            }
            {menu && <div className='menu' id='menu' ref={menuRef}>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                </nav>
            </div>
            }
            <div className='social'>
                <FaInstagram className='icon' id='instagram' onClick={() => pulse('instagram')} />
                <FaFacebookF className='icon' />
                <FaLinkedinIn className='icon' />
                <FaXTwitter className='icon' />
                <div className='line'></div>
                <FaWhatsapp className='icon' />
                <IoIosMail className='icon' />
            </div>
            <MdLanguage className={lang ? 'iconLang activeLang': 'iconLang'} onClick={lang ? closeLang : () => setLang(true)} />
            {lang && <div className='langBox' id='lang'>
                <Link to={'/'} onClick={() => {document.cookie = "language=en"}}>En</Link>
                <Link to={'/ro'} onClick={() => {document.cookie = "language=ro"}}>Ro</Link>
                <Link to={'/ru'} onClick={() => {document.cookie = "language=ru"}}>Ru</Link>
            </div>
            }
        </div>
    )
}
