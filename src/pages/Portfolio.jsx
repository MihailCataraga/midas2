import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'
import portfolio from '../data/portfolio'
import { Link } from 'react-router-dom'
import MiniNavbar from '../components/MiniNavbar'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <MiniNavbar path='/portfolio' />
      <Navbar path='/portfolio' />
      <main>
        <SecNavbar page='Portfolio' />
        <h1>Portfolio</h1>
        <section className='sec-1'>
          {
            portfolio.map((item) => {
              return (
                <Link to={item.link} className='project' key={item.title}>
                  <img src={item.img} alt={item.title} />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </Link>
              )
            })
          }
        </section>
      </main>
      <Footer />
    </div>
  )
}
