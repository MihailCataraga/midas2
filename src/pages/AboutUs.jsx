import React from 'react'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'
import Footer from '../components/Footer'

export default function AboutUs() {
  return (
    <div className='aboutUs'>
        <Navbar path='/about' />
        <main>
            <section className='sec-1'>
                <SecNavbar page='About Us' />
                <h1>About Us</h1>
                <p className='infoAboutUs'>We are a passionate and dedicated team specializing in creating websites that captivate, impress and bring value to your business.</p>
                <p className='infoAboutUs'>At Midas Group, we believe that every business deserves to be professionally represented online. That's why we're committed to offering innovative digital solutions tailored to each client's individual needs and goals.</p>
                <p className='infoAboutUs'>What sets us apart? We are not just an ordinary digital agency. We pride ourselves on our personalized approach, where we listen carefully to each client's requirements and vision. From elegant and functional websites for small and medium businesses to complex web platforms for corporations, we put passion into every project to deliver exceptional results.</p>
                <p className='infoAboutUs'>We are dedicated to excellence in everything we do. Be it the aesthetic design of the site or the technical performance, we make sure that every detail is valued. We are committed to providing you with high quality service, on time and on budget, to help you achieve and exceed your online goals.</p>
                <p className='infoAboutUs'>The trust of our customers is our greatest reward. That's why we work hard to build long-lasting relationships based on transparency, communication and tangible results. We are here for you, whether you need a new website, optimization of the existing one or any other digital solution.</p>
                <p className='infoAboutUs'>With Midas Group, the digital future of your business is bright and full of opportunities!</p>
            </section>
        </main>
        <Footer />
    </div>
  )
}
