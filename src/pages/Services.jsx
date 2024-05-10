import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'
import card from '../data/servicesCard'

export default function Services() {

  return (
    <div className='services'>
        <Navbar />
        <main>
            <SecNavbar page='Services' />
            <section className='sec-1'>
                <h1 id='h1'>What types of websites do we realize?</h1>
                <div className='servicesType'>
                    <div className='serviceCard'>
                        {card.map((i) => {
                            return (
                                <div className={`card card${i.id}`} id={`card${i.id}`} key={i.id} style={{backgroundImage: `url(${i.img})`}}>
                                    <p className='title'>{i.title}</p>
                                    <p>{i.text}</p>
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className='dotsLine'>
                        <div className='dots'>
                            {card.map((i) => {
                                return(
                                    <div key={i.id} className={`dot dot${i.id}`} onClick={() => {setCardNum(i.id)}}>

                                    </div>
                                )
                            })}
                        </div>
                        <div className='line'></div>
                    </div>
                </div>
            </section>
            <section className='sec-2'>
                fdgsbdfgs
            </section>
        </main>
    </div>
  )
}
