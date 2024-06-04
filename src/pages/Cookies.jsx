import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SecNavbar from '../components/SecNavbar'



export default function Cookies() {

  return (
    <div className='cookies'>
      
        <Navbar path='/cookies' />
        <main>
          <SecNavbar page={'Cookies'} />
          <h1>Cookies policy</h1>
          <p className='cookiesP'>This Cookie Policy explains what cookies are and how we use them on our website. By using this site, you agree to the use of cookies in accordance with this policy.</p>
          <h2>What are cookies?</h2>
          <p className='cookiesP'>Cookies are small text files stored on your device (computer, tablet, smartphone) when you visit a website. They are widely used to ensure the efficient functioning of websites or to improve user experience, as well as to provide certain information to website owners.</p>
          <h2>The types of cookies we use</h2>
          <p className='cookiesP'>On this website, we use cookies to remember users' preferred language. These cookies are necessary to ensure the basic functionality of the website.</p>
          <h2>Required cookies:</h2>
          <ul>
            <li>Cookie name: language</li>
            <li>Purpose: This cookie remembers the user's preferred language to provide a personalized experience on each visit to the site.</li>
            <li>Duration: 30 days</li>
          </ul>
          <h2>The purpose of using cookies</h2>
          <p className='cookiesP'>We use this cookie to store users' language preferences. This allows us to provide you with the content of the website in the language of your choice, so that you do not have to select the language every time you visit our website.</p>
          <h2>Updates to the cookie policy</h2>
          <p className='cookiesP'>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal or regulatory reasons. We will notify you of any changes by posting the new Cookie Policy on this page.</p>
          <p className='cookiesP'>This policy was last updated on 05/20/2024.</p>
          <h2>Contacts</h2>
          <p className='cookiesP'>If you have any questions or concerns about the use of cookies, please contact us at:</p>
          <p className='cookiesP'>Email: info@midasgroup.works</p>
          <p className='cookiesP'>Phone: + 373 68193004</p>
        </main>
        <Footer />
    </div>
  )
}
