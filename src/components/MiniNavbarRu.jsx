import React, { useEffect, useRef, useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function MiniNavbarRu(props) {
    const [menu, setMenu] = useState(false);

    // Menu ref
    const menuRef = useRef(null)
    //Scroll to top
    const scrollTop = () => {
        window.scrollTo({
            top: 0
        });
    }
    const showMiniMenu = () => {
        const elem = document.getElementById('miniMenu');
        elem.style.display = 'initial'
        elem.style.animation = 'showMiniMenu .5s linear';
        setTimeout(() => {
            elem.style.right = '-20px'
            elem.style.display = 'initial'
        }, 490) 
    }
    const closeMiniMenu = () => {
        const elem = document.getElementById('miniMenu');
        elem.style.animation = 'closeMiniMenu .5s linear';
        setTimeout(() => {
            elem.style.right = '-182px'
            elem.style.display = 'none'
        }, 490)
    }
    // Close menu when you Click outside it
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMiniMenu()
            setMenu(false)
        }
    };

    // Close menu when you scroll
    const scrollCloseMenu = () => {
        if(menu) {
            closeMiniMenu()
            setMenu(false)
        }
        
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
    <div className='miniNavbar'>
        <h1>Midas Group</h1>
        {
             menu 
            ? <IoClose className='icon' onClick={() => {setMenu(false), closeMiniMenu()}} />
            : <IoMenu className='icon' onClick={() => {setMenu(true), showMiniMenu()}} />
        }
        <div className='miniMenu' id='miniMenu' ref={menuRef}>
            <nav>
                <NavLink to='/ru' onClick={scrollTop} end>Домой</NavLink>
                <NavLink to='/ru/about' onClick={scrollTop} end>О нас</NavLink>
                <NavLink to='/ru/services' onClick={scrollTop} end>Услуги</NavLink>
                <NavLink to='/ru/portfolio' onClick={scrollTop} end>Портфолио</NavLink>
            </nav>
            <section className='socials'>
                <Link to='https://www.instagram.com/midasgroup.works/'><FaInstagram className='icon' /></Link>
                <Link to='https://www.facebook.com/profile.php?id=61559641946902'><FaFacebookF className='icon' /></Link>
                <Link to='https://www.linkedin.com/company/midasgroup-works/'><FaLinkedinIn className='icon' /></Link>
                <Link to='https://x.com/midasgroupworks'><FaXTwitter className='icon' /></Link>
                <Link to='https://wa.me/37368193004'><FaWhatsapp className='icon' /></Link>
                <Link to='mailto:info@midasgroup.works'><IoIosMail className='icon' /></Link>
                
            </section>
            <section className='lang'>
                <Link to={props.path} onClick={() => {document.cookie = "language" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;', document.cookie = "language=en;path=/; max-age=2592000", scrollTop()}}>EN</Link>
                <Link to={'/ro' + props.path} onClick={() => {document.cookie = "language" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;', document.cookie = "language=ro;path=/; max-age=2592000", scrollTop()}}>RO</Link>
                <Link to={'/ru' + props.path} onClick={() => {document.cookie = "language" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;', document.cookie = "language=ru;path=/; max-age=2592000", scrollTop()}}>RU</Link>
            </section>
        </div>
    </div>
  )
}
