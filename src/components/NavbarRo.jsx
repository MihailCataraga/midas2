import React, { useEffect, useRef, useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NavbarRo() {
    const [menu, setMenu] = useState(false)
    const [lang, setLang] = useState(false)

    //Scroll to top
    const scrollTop = () => {
        window.scrollTo({
            top: 0
        });
    }

    // Menu ref
    const menuRef = useRef(null)
    const langRef = useRef(null)

    // Close menu when you Click outside it
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu()
        }
        // Close lang when you Click outside it
        if (langRef.current && !langRef.current.contains(event.target)) {
            closeLang()
        }
    };

    // Close menu when you scroll
    const scrollCloseMenu = () => {
        closeMenu()
    }
    // Close lang when you scroll
    const scrollCloseLang = () => {
        closeLang()
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
        elem.style.color = '#fff4b4'
        
        const timeout = setTimeout(() => {
            elem.style.color = '#ffd700'
            elem.addEventListener('mouseenter', function() {
                this.style.color = '#ffd700'; // Schimbă culoarea la hover
            });
            elem.addEventListener('mouseleave', function() {
                this.style.color = '#f7f7f7'; // Restabilește culoarea la ieșirea mouse-ului
            });
        }, 300)
        elem.addEventListener('mouseleave', () => {
            clearTimeout(timeout)
        })
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('scroll', scrollCloseMenu);
        document.addEventListener('scroll', scrollCloseLang);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', scrollCloseMenu);
            document.removeEventListener('scroll', scrollCloseLang);
        }
    })
    return (
        <div className='navbar'>
            {menu ? <IoClose className='icon iconActive' id='close' onClick={() => {setTimeout(() => {setMenu(false)}, 300), closeMenu(), pulse('close')}} />
                : <IoMenu className='icon' id='open' onClick={() => {setTimeout(() => {setMenu(true)}, 300), pulse('open')}} />
            }
            {menu && <div className='menu' id='menu' ref={menuRef}>
                <nav>
                    <NavLink to='/ro' onClick={scrollTop}>Acasă</NavLink>
                    <NavLink to='/ro/about' onClick={scrollTop}>Despre noi</NavLink>
                    <NavLink to='/ro/services' onClick={scrollTop}>Servicii</NavLink>
                    <NavLink to='/ro/portfolio' onClick={scrollTop}>Portofoliu</NavLink>
                </nav>
            </div>
            }
            <div className='social'>
                <FaInstagram className='icon' />
                <FaFacebookF className='icon' />
                <FaLinkedinIn className='icon' />
                <FaXTwitter className='icon' />
                <div className='line'></div>
                <FaWhatsapp className='icon' />
                <IoIosMail className='icon' />
            </div>
            <MdLanguage className={lang ? 'iconLang activeLang': 'iconLang'} id='langIcon' onClick={lang ? () => {closeLang(), pulse('langIcon')} : () => {setLang(true), pulse('langIcon')}} />
            {lang && <div className='langBox' id='lang' ref={langRef}>
                <Link to={'/'} onClick={() => {document.cookie = "language=en", scrollTop()}}>EN</Link>
                <Link to={'/ro'} onClick={() => {document.cookie = "language=ro", scrollTop()}}>RO</Link>
                <Link to={'/ru'} onClick={() => {document.cookie = "language=ru", scrollTop()}}>RU</Link>
            </div>
            }
        </div>
    )
}
