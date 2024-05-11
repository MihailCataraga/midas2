import React from 'react'
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/img/logo.webp'

export default function SecNavbar(props) {
  return (
    <div className='secNavbar'>
        <div className='left'>
            <p className='logo'>Midas Group</p>
            {/* <img src={logo} width={'200px'} alt='logo' /> */}
            <p className='page'>{props.page}</p>
            <HashLink to='/#sec-2'>Contacts</HashLink>
        </div>
        <div className='right'>
            <p>Website for</p>
            <p id='secP'>your Business</p>
        </div>
        
    </div>
  )
}
