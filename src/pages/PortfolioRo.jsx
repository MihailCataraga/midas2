import React from 'react'
import portfolio from '../data/portfolioRo'
import { Link } from 'react-router-dom'
import NavbarRo from '../components/NavbarRo'
import SecNavbarRo from '../components/SecNavbarRo'
import FooterRo from '../components/FooterRo'
import MiniNavbarRo from '../components/MiniNavbarRo'

export default function PortfolioRo() {
  return (
    <div className='portfolio'>
      <MiniNavbarRo path='/portfolio' />
      <NavbarRo path='/portfolio' />
      <main>
        <SecNavbarRo page='Portofoliu' />
        <h1>Portofoliu</h1>
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
      <FooterRo path='/ro' />
    </div>
  )
}
