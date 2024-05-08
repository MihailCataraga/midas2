import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Home() {
    const [ip, setIp] = useState('');

    useEffect(() => {
        const cookies = document.cookie;

        // Parsare cookie-uri și obține valoarea pentru "username"
        const languageCookie = cookies.split(';').find(cookie => cookie.trim().startsWith('language='));
        const language = languageCookie ? languageCookie.split('=')[1] : null;

        if (language == 'ro') {
            window.location.href = '/ro'
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
                                if (window.location.href === '/ro') {
                                    return;
                                } else {
                                    window.location.href = '/ro'
                                }
                            } else if (data.loc === 'RU' || data.loc === 'UA') {
                                if (window.location.href === '/ru') {
                                    return;
                                } else {
                                    window.location.href = '/ru'
                                }
                            } else {
                                return;
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
            <Navbar />
            <main>
                <section className='sec-1'>
                    <SecNavbar page='Home' />
                    <h1>Midas Group</h1>
                    <h2>We turn dreams into functional websites</h2>
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
                                    <h3>Contact us</h3>
                                    <input type='text' placeholder='Name' />
                                    <input type='number' placeholder='Number' />
                                    <input type='email' placeholder='Email' />
                                    <input id='message' type='text' placeholder='Message' />
                                </div>
                                <div className='right'>
                                    <p>+373 61234567</p>
                                    <p>info@midasgroup.works</p>
                                </div>
                            </div>
                            <div className='check'>
                                <FaRegCheckCircle className='icon' />
                                <p>I accept the <Link to='/'>privacy policy.</Link></p>
                            </div>
                            <button>SEND</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}
