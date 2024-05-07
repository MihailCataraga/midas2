import React, { useEffect, useRef, useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [menu, setMenu] = useState(false)

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
                <FaInstagram className='icon' />
                <FaFacebookF className='icon' />
                <FaLinkedinIn className='icon' />
                <FaXTwitter className='icon' />
                <div className='line'></div>
                <FaWhatsapp className='icon' />
            </div>
            <IoIosMail className='iconMail icon' />
        </div>
    )
}
