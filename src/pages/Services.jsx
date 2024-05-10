import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'
import card from '../data/servicesCard'

export default function Services() {
    const [value, setValue] = useState(0)
    const test = () => {
        const elem = document.getElementById('serviceCard')
        const rect = elem.getBoundingClientRect()
        setValue(rect)
        if(rect > 0) {
            elem.scrollTo({
                top: 400, behavior: 'smooth'
            })
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', test);

        return () => {
            document.removeEventListener('scroll', test);
        }
    })
    // const [cardNum, setCardNum] = useState(0);
    
    // const dot = () => {
    //     const elem = document.getElementById(`card1`)
    //     // elem.style.animationDelay = '5s'
    //     elem.style.animation = 'none'
    //     elem.style.marginTop = `calc(-60vh * ${cardNum})`
    // }

    // useEffect(() => {
    //     const testElement = document.getElementById('test');
    //     testElement.style.transition = '1s'
    //     let scrollPosition = 0;
    //     const interval = setInterval(() => {
    //         // Actualizăm poziția scroll-ului
    //         scrollPosition += 400;

    //         // Dacă am ajuns la sfârșitul conținutului, revenim la început
    //         if (scrollPosition >= testElement.scrollHeight - testElement.clientHeight) {
    //             scrollPosition = 0;
    //         }

    //         // Setăm noua poziție a scroll-ului
    //         testElement.scrollTop = scrollPosition;
    //     }, 2000)

    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])

    // useEffect(() => {
    //     dot()
    //     const time = cardNum === 7 ? 0 : 5000
    //     const timeout = setTimeout(() => {

    //         const elem = document.getElementById(`card1`)
    //         elem.style.animation = '35s card linear infinite'
    //         // elem.style.marginTop = `calc(-60vh * ${cardNum})`
    //     }, time)
        
    //     console.log(cardNum)
    //     return () => {
    //         clearTimeout(timeout)
    //     }
    // }, [cardNum])
  return (
    <div className='services'>
        <Navbar />
        <main>
            <SecNavbar page='Services' />
            <section className='sec-1'>
                <h1>What types of websites do we realize?</h1>
                <div className='servicesType'>
                    <div className='serviceCard' id='serviceCard'>
                        {card.map((i) => {
                            return (
                                <div className={`card card${i.id}`} id={`card${i.id}`} key={i.id} style={{backgroundImage: `url(${i.img})`}}>
                                    <p className='title'>{i.title}</p>
                                    <p>{i.text}</p>
                                </div>
                            )
                        })}
                        
                    </div>
                    {/* <div className='dotsLine'>
                        <div className='dots'>
                            {card.map((i) => {
                                return(
                                    <div key={i.id} className={`dot dot${i.id}`} onClick={() => {setCardNum(i.id)}}>

                                    </div>
                                )
                            })}
                        </div>
                        <div className='line'></div>
                    </div> */}
                </div>
            </section>
            <div className='test' id='test'>
                <div className='div1'>

                </div>
                <div className='div2'>

                </div>
                <div className='div3'>

                </div>
                <div className='div4'>

                </div>
                <div className='div5'>

                </div>
            </div>
        </main>
    </div>
  )
}
