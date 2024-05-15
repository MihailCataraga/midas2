import React, { useEffect, useState } from 'react'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaRegCheckCircle, FaRegCircle, FaSass } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiRedux, SiExpress, SiMongodb } from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import SecNavbarRo from '../components/SecNavbarRo';
import NavbarRo from '../components/NavbarRo';
import FooterRo from '../components/FooterRo';
import GoToUp from '../components/GoToGo';
import research from '../assets/img/research.webp';
import design from '../assets/img/design.webp';
import development from '../assets/img/development.webp';
import testing from '../assets/img/testing.webp';
import finish from '../assets/img/finish.webp';


export default function HomeRo() {
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
            <NavbarRo path='/' />
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
                <section className='sec-2'>
                    <p>La Midas Group, credem că fiecare afacere merită să fie reprezentată cu profesionalism online. De aceea, ne-am angajat să oferim soluții digitale inovatoare, adaptate nevoilor și obiectivelor individuale ale fiecărui client. </p>
                    <div className='processAll'>
                        <div className='process'>
                            <div className='img'>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <img src={research} alt='Research Img' />
                            </div>
                            <div className='info'>
                                <h3>Planificare și cercetare</h3>
                                <ul>
                                    <li>Definirea obiectivelor și a cerințelor proiectului.</li>
                                    <li>Identificarea publicului țintă și a nevoilor acestuia.</li>
                                    <li>Cercetarea concurenței și a pieței.</li>
                                    <li>Crearea unei structuri de site și a unui plan de navigare.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='process'>
                            <div className='info'>
                                <h3>Design</h3>
                                <ul>
                                    <li>Crearea unui concept vizual pentru site, inclusiv paleta de culori, tipografia și designul elementelor.</li>
                                    <li>Dezvoltarea wireframe-urilor și a mockup-urilor pentru a planifica layout-ul și interacțiunile pe site.</li>
                                    <li>Crearea unor elemente grafice precum logo-uri, imagini și grafice.</li>
                                    <li>Asigurarea că design-ul este responsiv și adaptabil la diferite dispozitive și dimensiuni de ecran.</li>
                                </ul>
                            </div>
                            <div className='img'>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <img src={design} alt='Design Img' />
                            </div>
                        </div>
                        <div className='process'>
                            <div className='img'>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <img src={development} alt='Research Img' />
                            </div>
                            <div className='info'>
                                <h3>Dezvoltare</h3>
                                <ul>
                                    <li>Implementarea design-ului în cod folosind HTML, CSS și JavaScript.</li>
                                    <li>Dezvoltarea funcționalităților interactive și a elementelor dinamicie folosind JavaScript și librării sau framework-uri frontend (cum ar fi React, Angular sau Vue.js).</li>
                                    <li>Integrarea cu un sistem de gestionare a conținutului (Admin Page), dacă este necesar.</li>
                                    <li>Optimizarea performanței site-ului, vitezei de încărcare și a optimizării SEO.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='process'>
                            <div className='info'>
                                <h3>Testare</h3>
                                <ul>
                                    <li>Testarea funcționalităților și a compatibilității site-ului pe diferite browsere și dispozitive.</li>
                                    <li>Verificarea corectitudinii și a consistenței design-ului și a interacțiunilor.</li>
                                    <li>Identificarea și remedierea erorilor și problemelor de performanță.</li>
                                </ul>
                            </div>
                            <div className='img'>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <img src={testing} alt='Design Img' />
                            </div>
                        </div>
                        <div className='process'>
                            <div className='img'>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <span className='over'></span>
                                <img src={finish} alt='Research Img' />
                            </div>
                            <div className='info'>
                                <h3>Lansare</h3>
                                <ul>
                                    <li>Configurarea unui server web și a domeniului pentru a găzdui site-ul.</li>
                                    <li>Transferarea codului și a conținutului pe server.</li>
                                    <li>Testarea finală pe serverul live pentru a verifica că totul funcționează corect.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sec-3'>
                    <h2>Tehnologii folosite de echipa noastră</h2>
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
                                    <h3>Contactaţi-ne</h3>
                                    <input type='text' name='name' id='name' placeholder='Nume' onChange={handleChangeData} />
                                    <input type='number' name='number' id='number' placeholder='Număr' onChange={handleChangeData} />
                                    <input type='email' name='email' id='email' placeholder='Email' onChange={handleChangeData} />
                                    <input id='message' name='message' type='text' placeholder='Mesaj' onChange={handleChangeData} />
                                </div>
                                <div className='right'>
                                    <p>+373 68193004</p>
                                    <p>info@midasgroup.works</p>
                                </div>
                            </div>
                            <div className='check'>
                                {form.check
                                    ? <FaRegCheckCircle className='icon' name='check' onClick={() => { setForm({ ...form, check: !form.check }), document.getElementById('submit').removeAttribute('disabled') }} />
                                    : <FaRegCircle className='icon' name='check' id='uncheck' onClick={() => { setForm({ ...form, check: !form.check }), document.getElementById('submit').removeAttribute('disabled') }}
                                    />}
                                <p>Accept <Link to='/ro/privacypolicy'>politica de confidențialitate.</Link></p>
                            </div>
                            <button id='submit' onClick={sendForm}>TRIMITE</button>
                        </form>
                    </div>
                </section>
            </main>
            <GoToUp />
            <FooterRo path='/ro' />
        </div>
    )
}
