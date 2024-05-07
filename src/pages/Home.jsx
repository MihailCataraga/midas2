import React from 'react'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'

export default function Home() {
  return (
    <div className='home'>
        <Navbar />
        <SecNavbar page='Home' />
        <main>
            <h1>Midas Group</h1>
            <h2>Transformăm visele în web site-uri funcționale</h2>
            <div className='line' id='line1'></div>
            <div className='line' id='line2'></div>
            <div className='line' id='line3'></div>
            <div className='line' id='line4'></div>
            <div className='line' id='line5'></div>
            <div className='line' id='line6'></div>
        </main>
    </div>
  )
}
