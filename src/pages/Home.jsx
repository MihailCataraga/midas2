import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaRegCheckCircle, FaRegCircle, FaSass } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiRedux, SiExpress, SiMongodb } from "react-icons/si";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GoToUp from '../components/GoToGo';

export default function Home() {
    const [ip, setIp] = useState('');
    const [form, setForm] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
        check: true
    })

    //Send Form
    const sendForm = () => {
        const button = document.getElementById('submit')
        if (form.name === '' || form.number === '' || form.email === '' || form.check === false) {
            button.setAttribute('disabled', 'disabled');
            if (form.name === '') {
                const name = document.getElementById('name')
                name.style.border = '1px solid #bf57df'
            } else {
                const name = document.getElementById('name')
                name.style.border = '1px solid transparent'
            }
            if (form.number === '') {
                const number = document.getElementById('number')
                number.style.border = '1px solid #bf57df'
            } else {
                const number = document.getElementById('number')
                number.style.border = '1px solid transparent'
            }
            if (form.email === '') {
                const email = document.getElementById('email')
                email.style.border = '1px solid #bf57df'
            } else {
                const email = document.getElementById('email')
                email.style.border = '1px solid transparent'
            }
            if (form.check === false) {
                const uncheck = document.getElementById('uncheck')
                uncheck.style.color = '#bf57df'
            } else {
                const uncheck = document.getElementById('uncheck')
                uncheck.style.color = '#383838'
            }
        } else {
            button.removeAttribute('disabled');
            //Send form data
        }
    }

    // Change data from Form
    const handleChangeData = (event) => {
        const button = document.getElementById('submit')
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
        button.removeAttribute('disabled');
    };

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
            <Navbar path='/' />
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
                <section className='sec-3'>
                    <h2>Technologies used by our team</h2>
                    <div className='carouselBox'>
                        <ul className='carousel'>
                            <li><FaHtml5 className='icon' id='html' /><span>HTML</span></li>
                            <li><FaCss3Alt className='icon' id='css' /><span>CSS</span></li>
                            <li><FaSass className='icon' id='sass' /><span>SASS</span></li>
                            <li><TbBrandJavascript className='icon' id='js' /><span>JavaScript</span></li>
                            <li><FaReact className='icon' id='react' /><span>React</span></li>
                            <li><SiRedux className='icon' id='redux' /><span>Redux</span></li>
                            <li><FaNodeJs className='icon' id='node' /><span>Node.js</span></li>
                            <li><SiExpress className='icon' id='express' /><span>Express.js</span></li>
                            <li><SiMongodb className='icon' id='mongo' /><span>MongoDB</span></li>
                            <li><FaHtml5 className='icon' id='html' /><span>HTML</span></li>
                            <li><FaCss3Alt className='icon' id='css' /><span>CSS</span></li>
                            <li><FaSass className='icon' id='sass' /><span>SASS</span></li>
                            <li><TbBrandJavascript className='icon' id='js' /><span>JavaScript</span></li>
                            <li><FaReact className='icon' id='react' /><span>React</span></li>
                            <li><SiRedux className='icon' id='redux' /><span>Redux</span></li>
                        </ul>
                    </div>
                </section>
                <section className='sec-4' id='sec-4'>
                    <div className='form'>
                        <form>
                            <div className='top'>
                                <div className='left'>
                                    <h3>Contact us</h3>
                                    <input type='text' name='name' id='name' placeholder='Name' onChange={handleChangeData} />
                                    <input type='number' name='number' id='number' placeholder='Number' onChange={handleChangeData} />
                                    <input type='email' name='email' id='email' placeholder='Email' onChange={handleChangeData} />
                                    <input id='message' name='message' type='text' placeholder='Message' onChange={handleChangeData} />
                                </div>
                                <div className='right'>
                                    <p>+373 61234567</p>
                                    <p>info@midasgroup.works</p>
                                </div>
                            </div>
                            <div className='check'>
                                {form.check
                                    ? <FaRegCheckCircle className='icon' name='check' onClick={() => { setForm({ ...form, check: !form.check }), document.getElementById('submit').removeAttribute('disabled') }} />
                                    : <FaRegCircle className='icon' name='check' id='uncheck' onClick={() => { setForm({ ...form, check: !form.check }), document.getElementById('submit').removeAttribute('disabled') }}
                                    />}
                                <p>I accept the <Link to='/'>privacy policy.</Link></p>
                            </div>
                            <button id='submit' onClick={sendForm}>SEND</button>
                        </form>
                    </div>
                </section>
            </main>
            <GoToUp />
            <Footer />
        </div>
    )
}
