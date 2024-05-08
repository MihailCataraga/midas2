import React, { useEffect, useState } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import SecNavbarRo from '../components/SecNavbarRo';
import NavbarRo from '../components/NavbarRo';

export default function HomeRo() {
    const [ip, setIp] = useState('');
    
    useEffect(() => {
        const cookies = document.cookie;

        // Parsare cookie-uri și obține valoarea pentru "username"
        const languageCookie = cookies.split(';').find(cookie => cookie.trim().startsWith('language='));
        const language = languageCookie ? languageCookie.split('=')[1] : null;

        if (language == 'en') {
            window.location.href = '/'
        }
        if (language == 'ru') {
            window.location.href = '/ru'
        }
        if (language === null) {
            fetch('https://ipinfo.io/json')
                .then(response => response.json())
                .then(data => {
                    console.log('Adresa IP a utilizatorului:', data.ip);
                    setIp(data.ip);

                    // Apelăm serverul backend numai după ce obținem adresa IP
                    fetch('http://localhost:8080/location', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ ip: data.ip }) // Trimitem obiectul cu adresa IP
                    })
                        .then(res => res.json())
                        .then(data => {

                            // Redirectăm utilizatorul pe baza răspunsului primit de la serverul backend
                            if (data.loc === 'MD' || data.loc === 'RO') {
                                return;
                            } else if (data.loc === 'RU' || data.loc === 'UA') {
                                if (window.location.href === '/ru') {
                                    return;
                                } else {
                                    window.location.href = '/ru'
                                }
                            } else {
                                window.location.href = '/'
                            }
                        })
                        .catch(error => {
                            console.error('Eroare la obținerea locației:', error);
                        });
                })
                .catch(error => {
                    console.error('Eroare la obținerea adresei IP:', error);
                });
        }
    }, []); // Asigurăm că acest efect se execută doar o singură dată la încărcarea componentei
    return (
        <div className='home'>
            <NavbarRo />
            <main>
                <section className='sec-1'>
                    <SecNavbarRo page='Acasă' />
                    <h1>Midas Group</h1>
                    <h2>Transformăm visele în web site-uri funcționale</h2>
                    <div className='line' id='line1'></div>
                    <div className='line' id='line2'></div>
                    <div className='line' id='line3'></div>
                    <div className='line' id='line4'></div>
                    <div className='line' id='line5'></div>
                    <div className='line' id='line6'></div>
                    <b className='line' id='scroll'><FaArrowLeft className='icon' />SCROLL</b>
                </section>
                <section className='sec-2' id='sec-2'>
                    <div className='form'>
                        <form>
                            <div className='top'>
                                <div className='left'>
                                    <h3>Contactaţi-ne</h3>
                                    <input type='text' placeholder='Nume' />
                                    <input type='number' placeholder='Număr' />
                                    <input type='email' placeholder='Email' />
                                    <input id='message' type='text' placeholder='Mesaj' />
                                </div>
                                <div className='right'>
                                    <p>+373 61234567</p>
                                    <p>info@midasgroup.works</p>
                                </div>
                            </div>
                            <div className='check'>
                                <FaRegCheckCircle className='icon' />
                                <p>Accept <Link to='/'>politica de confidențialitate.</Link></p>
                            </div>
                            <button>TRIMITE</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}
