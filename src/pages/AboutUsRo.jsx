import React from 'react'
import NavbarRo from '../components/NavbarRo'
import FooterRo from '../components/FooterRo'
import SecNavbarRo from '../components/SecNavbarRo'

export default function AboutUsRo() {
  return (
    <div className='aboutUs'>
        <NavbarRo path='/about' />
        <main>
            <section className='sec-1'>
                <SecNavbarRo page='About Us' />
                <h1>Despre noi</h1>
                <p className='infoAboutUs'>Noi suntem o echipă pasionată și dedicată, specializată în crearea de site-uri web care captivază, impresionează și aduc valoare afacerii dvs.</p>
                <p className='infoAboutUs'>La Midas Group, credem că fiecare afacere merită să fie reprezentată cu profesionalism online. De aceea, ne-am angajat să oferim soluții digitale inovatoare, adaptate nevoilor și obiectivelor individuale ale fiecărui client. </p>
                <p className='infoAboutUs'>Ce ne diferențiază? Nu suntem doar o agenție digitală obișnuită. Ne mândrim cu abordarea noastră personalizată, în care ascultăm cu atenție cerințele și viziunea fiecărui client. De la site-uri web elegante și funcționale pentru afaceri mici și mijlocii, până la platforme web complexe pentru corporații, punem pasiune în fiecare proiect pentru a livra rezultate de excepție.</p>
                <p className='infoAboutUs'>Suntem dedicați excelenței în tot ceea ce facem. Fie că este vorba despre designul estetic al site-ului sau despre performanța tehnică, ne asigurăm că fiecare detaliu este pus în valoare. Ne angajăm să vă oferim servicii de înaltă calitate, în termenii și bugetul stabilit, pentru a vă ajuta să atingeți și să depășiți obiectivele dumneavoastră online.</p>
                <p className='infoAboutUs'>Încrederea clienților noștri este cea mai mare recompensă a noastră. De aceea, lucrăm din greu pentru a construi relații de lungă durată, bazate pe transparență, comunicare și rezultate tangibile. Suntem aici pentru dumneavoastră, fie că aveți nevoie de un site nou, de optimizarea celui existent sau de orice altă soluție digitală.</p>
                <p className='infoAboutUs'>Cu Midas Group, viitorul digital al afacerii dumneavoastră este luminos și plin de oportunități!</p>
            </section>
        </main>
        <FooterRo path='/ro' />
    </div>
  )
}
