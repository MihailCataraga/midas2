import React from 'react'
import { HashLink } from 'react-router-hash-link';

export default function SecNavbarRo(props) {
  return (
    <div className='secNavbar'>
        <div className='left'>
            <p className='logo'>Midas Group</p>
            <p className='page'>{props.page}</p>
            <HashLink to='/ro/#sec-4'>Contacte</HashLink>
        </div>
        <div className='right'>
            <p>Site-ul web</p>
            <p id='secP'>pentru afacerea dvs</p>
        </div>
        
    </div>
  )
}
