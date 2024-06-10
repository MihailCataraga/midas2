import React from 'react'
import NavbarRo from '../components/NavbarRo'
import SecNavbarRo from '../components/SecNavbarRo'
import FooterRo from '../components/FooterRo'
import MiniNavbarRo from '../components/MiniNavbarRo'

export default function CookiesRo() {
  return (
    <div className='cookies'>
      <MiniNavbarRo path='/cookies' />
      <NavbarRo path='/cookies' />
      <main>
        <SecNavbarRo page={'Cookies'} />
        <h1>Politica de Cookieuri</h1>
        <p className='cookiesP'>Această Politică de Cookieuri explică ce sunt cookieurile și cum le folosim pe site-ul nostru web. Utilizând acest site, sunteți de acord cu utilizarea cookieurilor în conformitate cu această politică.</p>
        <h2>Ce sunt cookieurile?</h2>
        <p className='cookiesP'>Cookieurile sunt fișiere mici de text stocate pe dispozitivul dumneavoastră (computer, tabletă, smartphone) atunci când vizitați un site web. Acestea sunt folosite pe scară largă pentru a asigura funcționarea eficientă a site-urilor web sau pentru a îmbunătăți experiența utilizatorilor, precum și pentru a furniza anumite informații proprietarilor site-ului.</p>
        <h2>Tipurile de cookieuri pe care le utilizăm</h2>
        <p className='cookiesP'>Pe acest site web, folosim cookieuri pentru a reține limba preferată de utilizatori. Aceste cookieuri sunt necesare pentru a asigura funcționalitatea de bază a site-ului.</p>
        <h2>Cookieuri necesare:</h2>
        <ul>
          <li>Nume cookie: language</li>
          <li>Scop: Acest cookie reține limba preferată a utilizatorului pentru a oferi o experiență personalizată la fiecare vizită pe site.</li>
          <li>Durată: 30 zile</li>
        </ul>
        <h2>Scopul utilizării cookieurilor</h2>
        <p className='cookiesP'>Folosim acest cookie pentru a stoca preferințele de limbă ale utilizatorilor. Acest lucru ne permite să vă oferim conținutul site-ului în limba aleasă de dumneavoastră, astfel încât să nu fie nevoie să selectați limba de fiecare dată când vizitați site-ul nostru.</p>
        <h2>Actualizări ale politicii de cookieuri</h2>
        <p className='cookiesP'>Putem actualiza această Politică de Cookieuri din când în când pentru a reflecta schimbările în practicile noastre sau pentru alte motive operaționale, legale sau de reglementare. Vă vom notifica despre orice modificări prin postarea noii Politici de Cookieuri pe această pagină.</p>
        <p className='cookiesP'>Această politică a fost actualizată ultima dată la 20/05/2024.</p>
        <h2>Contacte</h2>
        <p className='cookiesP'>Dacă aveți întrebări sau preocupări cu privire la utilizarea cookieurilor, vă rugăm să ne contactați la:</p>
        <p className='cookiesP'>Email: info@midasgroup.works</p>
        <p className='cookiesP'>Telefon: + 373 68193004</p>
      </main>
      <FooterRo path='/ro' />
    </div>
  )
}
