import React from 'react'
import { HashLink } from 'react-router-hash-link';

export default function SecNavbarRu(props) {
  return (
    <div className='secNavbar'>
        <div className='left'>
            <p className='logo'>Midas Group</p>
            <p className='page'>{props.page}</p>
            <HashLink to='/ru/#sec-2'>Контакты</HashLink>
        </div>
        <div className='right'>
            <p>Веб-сайт для</p>
            <p id='secP'>вашего бизнеса</p>
        </div>
        
    </div>
  )
}
