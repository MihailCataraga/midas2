import React from 'react'
import NavbarRu from '../components/NavbarRu'
import SecNavbarRu from '../components/SecNavbarRu'
import FooterRu from '../components/FooterRu'

export default function AboutUsRu() {
  return (
    <div className='aboutUs'>
        <NavbarRu path='/about' />
        <main>
            <section className='sec-1'>
                <SecNavbarRu page='About Us' />
                <h1>О нас</h1>
                <p className='infoAboutUs'>Мы — страстная и преданная своему делу команда, специализирующаяся на создании веб-сайтов, которые очаровывают, впечатляют и приносят пользу вашему бизнесу.</p>
                <p className='infoAboutUs'>В Midas Group мы считаем, что каждый бизнес заслуживает профессионального представления в Интернете. Вот почему мы стремимся предлагать инновационные цифровые решения, адаптированные к индивидуальным потребностям и целям каждого клиента.</p>
                <p className='infoAboutUs'>Что отличает нас? Мы не просто обычное digital-агентство. Мы гордимся нашим персонализированным подходом, при котором мы внимательно прислушиваемся к требованиям и видению каждого клиента. От элегантных и функциональных веб-сайтов для малого и среднего бизнеса до сложных веб-платформ для корпораций — мы вкладываем энтузиазм в каждый проект, чтобы добиться исключительных результатов.</p>
                <p className='infoAboutUs'>Мы стремимся к совершенству во всем, что мы делаем. Будь то эстетический дизайн сайта или технические характеристики, мы заботимся о том, чтобы каждая деталь была оценена по достоинству. Мы стремимся предоставить вам высококачественные услуги вовремя и в рамках бюджета, чтобы помочь вам достичь и превзойти ваши онлайн-цели.</p>
                <p className='infoAboutUs'>Доверие наших клиентов – наша самая большая награда. Вот почему мы прилагаем все усилия, чтобы построить долгосрочные отношения, основанные на прозрачности, общении и ощутимых результатах. Мы здесь для вас, нужен ли вам новый веб-сайт, оптимизация существующего или любое другое цифровое решение.</p>
                <p className='infoAboutUs'>С Midas Group цифровое будущее вашего бизнеса будет ярким и полным возможностей!</p>
            </section>
        </main>
        <FooterRu />
    </div>
  )
}