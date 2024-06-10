import React, { useEffect, useState } from 'react'
import card from '../data/servicesCardRu'
import NavbarRu from '../components/NavbarRu'
import SecNavbarRu from '../components/SecNavbarRu'
import site from '../data/siteTypeRu'
import { GoDotFill } from "react-icons/go";
import GoToUp from '../components/GoToGo'
import FooterRu from '../components/FooterRu'
import MiniNavbarRu from '../components/MiniNavbarRu'

export default function ServicesRu() {
    const dot1 = () => {
        if (window.innerWidth > 1440) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        if (window.innerWidth <= 1440 && window.innerWidth >= 834) {
            window.scrollTo({
                top: 100,
                behavior: 'smooth'
            })
        }
    }
    const dot2 = () => {
        if (window.innerWidth > 1440) {
            window.scrollTo({
                top: 1200,
                behavior: 'smooth'
            })
        }
        if (window.innerWidth <= 1440 && window.innerWidth >= 834) {
            window.scrollTo({
                top: 1200,
                behavior: 'smooth'
            })
        }
    }
    const dot3 = () => {
        if (window.innerWidth > 1440) {
            window.scrollTo({
                top: 2400,
                behavior: 'smooth'
            })
        }
        if (window.innerWidth <= 1440 && window.innerWidth >= 834) {
            window.scrollTo({
                top: 2300,
                behavior: 'smooth'
            })
        }
    }
    const dot4 = () => {
        if (window.innerWidth > 1440) {
            window.scrollTo({
                top: 3600,
                behavior: 'smooth'
            })
        }
        if (window.innerWidth <= 1440 && window.innerWidth >= 834) {
            window.scrollTo({
                top: 3300,
                behavior: 'smooth'
            })
        }
    }
    const dot5 = () => {
        if (window.innerWidth > 1440) {
            window.scrollTo({
                top: 4800,
                behavior: 'smooth'
            })
        }
        if (window.innerWidth <= 1440 && window.innerWidth >= 834) {
            window.scrollTo({
                top: 4400,
                behavior: 'smooth'
            })
        }
    }
    const dot6 = () => {
        if (window.innerWidth > 1440) {
            window.scrollTo({
                top: 6000,
                behavior: 'smooth'
            })
        }
        if (window.innerWidth <= 1440 && window.innerWidth >= 834) {
            window.scrollTo({
                top: 5400,
                behavior: 'smooth'
            })
        }
    }
    const dot7 = () => {
        if (window.innerWidth > 1440) {
            window.scrollTo({
                top: 7100,
                behavior: 'smooth'
            })
        }
        if (window.innerWidth <= 1440 && window.innerWidth >= 834) {
            window.scrollTo({
                top: 6450,
                behavior: 'smooth'
            })
        }
    }
    const handleScroll = () => {
        const scroll = window.scrollX || document.documentElement.scrollTop;
        if (window.innerWidth > 1440) {
            if (scroll >= 900) {
                const elem5 = document.getElementById('dot5')
                elem5.style.background = '#979797'
                const elem4 = document.getElementById('dot4')
                elem4.style.background = '#757575'
                const elem3 = document.getElementById('dot3')
                elem3.style.background = '#616161'
                const elem2 = document.getElementById('dot2')
                elem2.style.border = '5px solid #c54cc6'
                elem2.style.background = '#383838'
                const elem1 = document.getElementById('dot1')
                elem1.style.border = '5px solid #f7f7f7'
                elem1.style.background = '#616161'
            } else if (scroll < 900) {
                const elem2 = document.getElementById('dot2')
                elem2.style.border = '5px solid #f7f7f7'
                elem2.style.background = '#616161'
                const elem1 = document.getElementById('dot1')
                elem1.style.border = '5px solid #c54cc6'
                elem1.style.background = '#383838'
                const elem7 = document.getElementById('dot7')
                elem7.style.background = '#b8b8b8'
                const elem6 = document.getElementById('dot6')
                elem6.style.background = '#b8b8b8'
                const elem5 = document.getElementById('dot5')
                elem5.style.background = '#b8b8b8'
                const elem4 = document.getElementById('dot4')
                elem4.style.background = '#979797'
                const elem3 = document.getElementById('dot3')
                elem3.style.background = '#757575'
            }
            if (scroll >= 2100) {
                const elem7 = document.getElementById('dot7')
                elem7.style.background = '#b8b8b8'
                const elem6 = document.getElementById('dot6')
                elem6.style.background = '#979797'
                const elem5 = document.getElementById('dot5')
                elem5.style.background = '#757575'
                const elem4 = document.getElementById('dot4')
                elem4.style.background = '#616161'
                const elem1 = document.getElementById('dot1')
                elem1.style.background = '#757575'
                const elem3 = document.getElementById('dot3')
                elem3.style.border = '5px solid #c54cc6'
                elem3.style.background = '#383838'
                const elem2 = document.getElementById('dot2')
                elem2.style.border = '5px solid #f7f7f7'
                elem2.style.background = '#616161'
            } else if (scroll < 2100) {
                const elem = document.getElementById('dot3')
                elem.style.border = '5px solid #f7f7f7'
            }
            if (scroll >= 3300) {
                const elem7 = document.getElementById('dot7')
                elem7.style.background = '#979797'
                const elem6 = document.getElementById('dot6')
                elem6.style.background = '#757575'
                const elem5 = document.getElementById('dot5')
                elem5.style.background = '#616161'
                const elem2 = document.getElementById('dot2')
                elem2.style.background = '#757575'
                const elem1 = document.getElementById('dot1')
                elem1.style.background = '#979797'
                const elem4 = document.getElementById('dot4')
                elem4.style.border = '5px solid #c54cc6'
                elem4.style.background = '#383838'
                const elem3 = document.getElementById('dot3')
                elem3.style.border = '5px solid #f7f7f7'
                elem3.style.background = '#616161'
            } else if (scroll < 3300) {
                const elem = document.getElementById('dot4')
                elem.style.border = '5px solid #f7f7f7'
            }
            if (scroll >= 4500) {
                const elem7 = document.getElementById('dot7')
                elem7.style.background = '#757575'
                const elem6 = document.getElementById('dot6')
                elem6.style.background = '#616161'
                const elem3 = document.getElementById('dot3')
                elem3.style.background = '#757575'
                const elem2 = document.getElementById('dot2')
                elem2.style.background = '#979797'
                const elem1 = document.getElementById('dot1')
                elem1.style.background = '#b8b8b8'
                const elem5 = document.getElementById('dot5')
                elem5.style.border = '5px solid #c54cc6'
                elem5.style.background = '#383838'
                const elem4 = document.getElementById('dot4')
                elem4.style.border = '5px solid #f7f7f7'
                elem4.style.background = '#616161'
            } else if (scroll < 4500) {
                const elem = document.getElementById('dot5')
                elem.style.border = '5px solid #f7f7f7'
            }
            if (scroll >= 5700) {
                const elem7 = document.getElementById('dot7')
                elem7.style.background = '#616161'
                const elem4 = document.getElementById('dot4')
                elem4.style.background = '#757575'
                const elem3 = document.getElementById('dot3')
                elem3.style.background = '#979797'
                const elem2 = document.getElementById('dot2')
                elem2.style.background = '#b8b8b8'
                const elem1 = document.getElementById('dot1')
                elem1.style.background = '#b8b8b8'
                const elem6 = document.getElementById('dot6')
                elem6.style.border = '5px solid #c54cc6'
                elem6.style.background = '#383838'
                const elem5 = document.getElementById('dot5')
                elem5.style.border = '5px solid #f7f7f7'
                elem5.style.background = '#616161'
            } else if (scroll < 5700) {
                const elem = document.getElementById('dot6')
                elem.style.border = '5px solid #f7f7f7'
            }
            if (scroll >= 6900) {
                const elem5 = document.getElementById('dot5')
                elem5.style.background = '#757575'
                const elem4 = document.getElementById('dot4')
                elem4.style.background = '#979797'
                const elem3 = document.getElementById('dot3')
                elem3.style.background = '#b8b8b8'
                const elem2 = document.getElementById('dot2')
                elem2.style.background = '#b8b8b8'
                const elem1 = document.getElementById('dot1')
                elem1.style.background = '#b8b8b8'
                const elem7 = document.getElementById('dot7')
                elem7.style.border = '5px solid #c54cc6'
                elem7.style.background = '#383838'
                const elem6 = document.getElementById('dot6')
                elem6.style.border = '5px solid #f7f7f7'
                elem6.style.background = '#616161'
            } else if (scroll < 6900) {
                const elem = document.getElementById('dot7')
                elem.style.border = '5px solid #f7f7f7'
            }
        }
        if (window.innerWidth <= 1440 && window.innerWidth >= 768) {
            console.log(scroll)
            if (scroll > 6450) {
                const h1 = document.getElementById('h1')
                h1.style.position = 'initial'
            }
            if (scroll <= 6450) {
                const h1 = document.getElementById('h1')
                h1.style.position = 'sticky'
            }
            if (scroll >= 1200) {
                const elem5 = document.getElementById('dot5')
                elem5.style.background = '#979797'
                const elem4 = document.getElementById('dot4')
                elem4.style.background = '#757575'
                const elem3 = document.getElementById('dot3')
                elem3.style.background = '#616161'
                const elem2 = document.getElementById('dot2')
                elem2.style.border = '5px solid #c54cc6'
                elem2.style.background = '#383838'
                const elem1 = document.getElementById('dot1')
                elem1.style.border = '5px solid #f7f7f7'
                elem1.style.background = '#616161'
            } else if (scroll < 1200) {
                const elem2 = document.getElementById('dot2')
                elem2.style.border = '5px solid #f7f7f7'
                elem2.style.background = '#616161'
                const elem1 = document.getElementById('dot1')
                elem1.style.border = '5px solid #c54cc6'
                elem1.style.background = '#383838'
                const elem7 = document.getElementById('dot7')
                elem7.style.background = '#b8b8b8'
                const elem6 = document.getElementById('dot6')
                elem6.style.background = '#b8b8b8'
                const elem5 = document.getElementById('dot5')
                elem5.style.background = '#b8b8b8'
                const elem4 = document.getElementById('dot4')
                elem4.style.background = '#979797'
                const elem3 = document.getElementById('dot3')
                elem3.style.background = '#757575'
            }
            if (scroll >= 2300) {
                const elem7 = document.getElementById('dot7')
                elem7.style.background = '#b8b8b8'
                const elem6 = document.getElementById('dot6')
                elem6.style.background = '#979797'
                const elem5 = document.getElementById('dot5')
                elem5.style.background = '#757575'
                const elem4 = document.getElementById('dot4')
                elem4.style.background = '#616161'
                const elem1 = document.getElementById('dot1')
                elem1.style.background = '#757575'
                const elem3 = document.getElementById('dot3')
                elem3.style.border = '5px solid #c54cc6'
                elem3.style.background = '#383838'
                const elem2 = document.getElementById('dot2')
                elem2.style.border = '5px solid #f7f7f7'
                elem2.style.background = '#616161'
            } else if (scroll < 2300) {
                const elem = document.getElementById('dot3')
                elem.style.border = '5px solid #f7f7f7'
            }
            if (scroll >= 3300) {
                const elem7 = document.getElementById('dot7')
                elem7.style.background = '#979797'
                const elem6 = document.getElementById('dot6')
                elem6.style.background = '#757575'
                const elem5 = document.getElementById('dot5')
                elem5.style.background = '#616161'
                const elem2 = document.getElementById('dot2')
                elem2.style.background = '#757575'
                const elem1 = document.getElementById('dot1')
                elem1.style.background = '#979797'
                const elem4 = document.getElementById('dot4')
                elem4.style.border = '5px solid #c54cc6'
                elem4.style.background = '#383838'
                const elem3 = document.getElementById('dot3')
                elem3.style.border = '5px solid #f7f7f7'
                elem3.style.background = '#616161'
            } else if (scroll < 3300) {
                const elem = document.getElementById('dot4')
                elem.style.border = '5px solid #f7f7f7'
            }
            if (scroll >= 4400) {
                const elem7 = document.getElementById('dot7')
                elem7.style.background = '#757575'
                const elem6 = document.getElementById('dot6')
                elem6.style.background = '#616161'
                const elem3 = document.getElementById('dot3')
                elem3.style.background = '#757575'
                const elem2 = document.getElementById('dot2')
                elem2.style.background = '#979797'
                const elem1 = document.getElementById('dot1')
                elem1.style.background = '#b8b8b8'
                const elem5 = document.getElementById('dot5')
                elem5.style.border = '5px solid #c54cc6'
                elem5.style.background = '#383838'
                const elem4 = document.getElementById('dot4')
                elem4.style.border = '5px solid #f7f7f7'
                elem4.style.background = '#616161'
            } else if (scroll < 4400) {
                const elem = document.getElementById('dot5')
                elem.style.border = '5px solid #f7f7f7'
            }
            if (scroll >= 5400) {
                const elem7 = document.getElementById('dot7')
                elem7.style.background = '#616161'
                const elem4 = document.getElementById('dot4')
                elem4.style.background = '#757575'
                const elem3 = document.getElementById('dot3')
                elem3.style.background = '#979797'
                const elem2 = document.getElementById('dot2')
                elem2.style.background = '#b8b8b8'
                const elem1 = document.getElementById('dot1')
                elem1.style.background = '#b8b8b8'
                const elem6 = document.getElementById('dot6')
                elem6.style.border = '5px solid #c54cc6'
                elem6.style.background = '#383838'
                const elem5 = document.getElementById('dot5')
                elem5.style.border = '5px solid #f7f7f7'
                elem5.style.background = '#616161'
            } else if (scroll < 5400) {
                const elem = document.getElementById('dot6')
                elem.style.border = '5px solid #f7f7f7'
            }
            if (scroll >= 6450) {
                const elem5 = document.getElementById('dot5')
                elem5.style.background = '#757575'
                const elem4 = document.getElementById('dot4')
                elem4.style.background = '#979797'
                const elem3 = document.getElementById('dot3')
                elem3.style.background = '#b8b8b8'
                const elem2 = document.getElementById('dot2')
                elem2.style.background = '#b8b8b8'
                const elem1 = document.getElementById('dot1')
                elem1.style.background = '#b8b8b8'
                const elem7 = document.getElementById('dot7')
                elem7.style.border = '5px solid #c54cc6'
                elem7.style.background = '#383838'
                const elem6 = document.getElementById('dot6')
                elem6.style.border = '5px solid #f7f7f7'
                elem6.style.background = '#616161'
            } else if (scroll < 6450) {
                const elem = document.getElementById('dot7')
                elem.style.border = '5px solid #f7f7f7'
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <div className='services'>
            <MiniNavbarRu path='/services' />
            <NavbarRu path='/services' />
            <main>
                <SecNavbarRu page='Услуги' />
                <section className='sec-1'>
                    <h1 id='h1'>Какие типы сайтов мы реализуем?</h1>
                    <div className='servicesType'>
                        <div className='serviceCard'>
                            {card.map((i) => {
                                return (
                                    <div className={`card card${i.id}`} id={`card${i.id}`} key={i.id} style={{ backgroundImage: `url(${i.img})` }}>
                                        <p className='title'>{i.title}</p>
                                        <p>{i.text}</p>
                                    </div>
                                )
                            })}

                        </div>
                        <div className='dots'>
                            <div className={`dot dot1`} id={`dot1`} onClick={dot1}></div>
                            <div className={`dot dot2`} id={`dot2`} onClick={dot2}></div>
                            <div className={`dot dot3`} id={`dot3`} onClick={dot3}></div>
                            <div className={`dot dot4`} id={`dot4`} onClick={dot4}></div>
                            <div className={`dot dot5`} id={`dot5`} onClick={dot5}></div>
                            <div className={`dot dot6`} id={`dot6`} onClick={dot6}></div>
                            <div className={`dot dot7`} id={`dot7`} onClick={dot7}></div>
                        </div>
                    </div>
                </section>
                <section className='sec-2'>
                    {
                        site.map((item) => {
                            return (
                                <div key={item.id} className='site'>
                                    <div className='top'>
                                        <p className='title'>{item.title}</p>
                                        <div className='points'>
                                            {item.description.map((i) => {
                                                return (
                                                    <p key={i}><GoDotFill className='icon' />{i}</p>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <p className='price'>{item.price}</p>
                                </div>
                            )
                        })
                    }
                </section>
            </main>
            <GoToUp />
            <FooterRu path='/ru' />
        </div>
    )
}