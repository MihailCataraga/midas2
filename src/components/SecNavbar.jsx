import React from 'react'
import { HashLink } from 'react-router-hash-link';

export default function SecNavbar(props) {
  return (
    <div className='secNavbar'>
        <div className='left'>
            <p className='logo'>Midas Group</p>
            <p className='page'>{props.page}</p>
            <HashLink to='/'>Contacts</HashLink>
        </div>
        <div className='right'>
            <p>Website for</p>
            <p id='secP'>your Business</p>
        </div>
        
    </div>
  )
}
