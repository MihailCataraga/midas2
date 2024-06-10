import React from 'react'
import FooterRo from '../components/FooterRo'
import NavbarRo from '../components/NavbarRo'
import SecNavbarRo from '../components/SecNavbarRo'
import MiniNavbarRo from '../components/MiniNavbarRo'

export default function PrivacyPolicyRo() {
    return (
        <div className='privacyPolicy'>
            <MiniNavbarRo path='/privacyPolicy' />
            <NavbarRo path='/privacyPolicy' />
            <main>
                <SecNavbarRo page='Politica de confidențialitate' />
                <h1>Politica de Confidențialitate</h1>
                <p className='privacyPolicyP'>Această Politică de Confidențialitate explică modul în care colectăm, utilizăm și protejăm informațiile personale ale utilizatorilor care ne vizitează site-ul și completează formularul de contact pentru a primi mai multe informații. Prin utilizarea site-ului nostru și furnizarea informațiilor personale, sunteți de acord cu practicile descrise în această politică.</p>
                <h2>Informații colectate</h2>
                <p className='privacyPolicyP'>Colectăm următoarele informații personale de la utilizatori prin intermediul formularului de contact de pe site-ul nostru:</p>
                <ul>
                    <li>Nume</li>
                    <li>Număr de telefon</li>
                    <li>Adresă de email</li>
                    <li>Mesajul trimis de utilizator</li>
                </ul>
                <p className='privacyPolicyP'>Mai colectăm IP dumneavoastră pentru a vă oferi conținutul site-ului în limba reprezentativă locației dumneavoastră.</p>
                <p className='privacyPolicyP'>IP nu este folosit cu alte scopuri și nu este divulgat cu excepția punctelor din "Divulgarea informațiilor".</p>
                <h2>Scopul colectării informațiilor</h2>
                <p className='privacyPolicyP'>Utilizăm informațiile colectate pentru următoarele scopuri:</p>
                <ul>
                    <li>Pentru a vă contacta și a răspunde solicitărilor dumneavoastră.</li>
                    <li>Pentru a vă oferi informații suplimentare despre produsele și serviciile noastre.</li>
                    <li>Pentru a îmbunătăți serviciile noastre și experiența utilizatorilor.</li>
                </ul>
                <h2>Protecția informațiilor</h2>
                <p className='privacyPolicyP'>Ne angajăm să protejăm informațiile personale ale utilizatorilor noștri. Implementăm măsuri de securitate tehnice și organizatorice adecvate pentru a preveni accesul neautorizat, divulgarea, modificarea sau distrugerea informațiilor personale.</p>
                <h2>Divulgarea informațiilor</h2>
                <p className='privacyPolicyP'>Nu vom vinde, închiria sau divulga informațiile personale ale utilizatorilor către terți, cu excepția cazului în care acest lucru este necesar pentru a ne conforma obligațiilor legale sau pentru a proteja drepturile, proprietatea sau siguranța noastră și a altor utilizatori.</p>
                <p className='privacyPolicyP'>În anumite circumstanțe, vom partaja datele personale cu terțe părți:</p>
                <ul>
                    <li>Autorități competente – în cazul unor cereri întemeiate pe prevederi legale, furnizam datele dvs. către autoritățile competente, atunci când aceasta este strict necesară pentru detectarea unor fraude, fapte penale și, în general, atunci când prevederile legale ne impun conformarea unei astfel de cerințe.</li>
                    <li>Atunci când ne solicitați expres acest lucru sau ne autorizați în mod expres dezvăluirea datelor dumneavoastră.</li>
                    <li>În cazul unor situații urgente sau cazuri de forță majoră.</li>
                    <li>În cazul în care dezvăluirea este necesară pentru a soluționa litigii, pentru a fi constatat sau exercitat un drept în instanț</li>
                </ul>
                <p className='privacyPolicyP'>Ne puteți cere să vă ștergem datele cu caracter personal, dar numai în cazul în care acestea nu mai sunt necesare pentru scopurile pentru care au fost colectate.</p>
                <p className='privacyPolicyP'>Este posibil să păstram datele dvs. personale în cazul constatării, exercitării sau apărării unui drept în instanță.</p>
                <p className='privacyPolicyP'>În cazul în care păstrarea datelor dvs. personale este necesară în scopuri specificate de lege, putem păstra în continuare aceste date.</p>
                <h2>Drepturile utilizatorilor</h2>
                <p className='privacyPolicyP'>Utilizatorii au următoarele drepturi în legătură cu informațiile lor personale:</p>
                <ul>
                    <li>Dreptul de acces: Puteți solicita accesul la informațiile personale pe care le deținem despre dumneavoastră.</li>
                    <li>Dreptul de ștergere: Puteți solicita ștergerea informațiilor personale, cu excepția cazurilor în care avem obligația legală de a le păstra.</li>
                    <li>Pentru a exercita aceste drepturi, vă rugăm să ne contactați folosind detaliile de contact de mai jos.</li>
                </ul>
                <h2>Contact</h2>
                <p className='privacyPolicyP'>Dacă aveți întrebări sau preocupări cu privire la această Politică de Confidențialitate sau la practicile noastre privind informațiile personale, vă rugăm să ne contactați:</p>
                <ul>
                    <li>Email: info@midasgroup.works</li>
                    <li>Telefon: Telefon: + 373 68193004</li>
                </ul>
                <h2>Actualizări ale politicii de confidențialitate</h2>
                <p className='privacyPolicyP'>Putem actualiza această Politică de Confidențialitate din când în când pentru a reflecta schimbările în practicile noastre sau pentru alte motive operaționale, legale sau de reglementare. Vă vom notifica despre orice modificări prin postarea noii Politici de Confidențialitate pe această pagină. Vă încurajăm să revizuiți periodic această politică pentru a fi informat despre modul în care protejăm informațiile dumneavoastră personale.</p>
                <p className='privacyPolicyP'>Această politică a fost actualizată ultima dată la 20/05/2024.</p>
            </main>
            <FooterRo path='/ro' />
        </div>
    )
}
