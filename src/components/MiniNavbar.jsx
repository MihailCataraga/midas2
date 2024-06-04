import React from 'react'
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export default function MiniNavbar() {
    //Scroll to top
    const scrollTop = () => {
        window.scrollTo({
            top: 0
        });
    }
  return (
    <div className='miniNavbar'>
        <h1>Midas Group</h1>
        <IoMenu className='icon' />
        <div className='miniMenu'>
            <nav>
                <NavLink to='/' onClick={scrollTop} end>Home</NavLink>
                <NavLink to='/about' onClick={scrollTop} end>About Us</NavLink>
                <NavLink to='/services' onClick={scrollTop} end>Services</NavLink>
                <NavLink to='/portfolio' onClick={scrollTop} end>Portfolio</NavLink>
            </nav>
        </div>
    </div>
  )
}
