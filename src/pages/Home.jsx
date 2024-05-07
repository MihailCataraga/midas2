import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
        <Navbar />
        <main>
            <section className='sec-1'>
                <SecNavbar page='Home' />
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
                        <p><FaRegCheckCircle className='icon' />I accept the <Link to='/'>privacy policy</Link></p>
                        <button>SEND</button>
                    </form>
                </div>
            </section>
        </main>
    </div>
  )
}
