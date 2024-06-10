import React from 'react'
import portfolio from '../data/portfolioRu'
import { Link } from 'react-router-dom'
import NavbarRu from '../components/NavbarRu'
import SecNavbarRu from '../components/SecNavbarRu'
import FooterRu from '../components/FooterRu'
import MiniNavbarRu from '../components/MiniNavbarRu'

export default function PortfolioRu() {
  return (
    <div className='portfolio'>
      <MiniNavbarRu path='/portfolio' />
      <NavbarRu path='/portfolio' />
      <main>
        <SecNavbarRu page='Портфолио' />
        <h1>Портфолио</h1>
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
      <FooterRu path='/ru' />
    </div>
  )
}
