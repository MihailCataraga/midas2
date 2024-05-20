import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'

export default function Portfolio() {
  return (
    <div className='portfolio'>
        <Navbar />
        <main>
            <SecNavbar page='Portfolio' />
            
        </main>
        <Footer path='' />
    </div>
  )
}
