import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeRo from './pages/HomeRo';
import HomeRu from './pages/HomeRu';
import Services from './pages/Services';
import ServicesRo from './pages/ServicesRo';
import ServicesRu from './pages/ServicesRu';
import AboutUs from './pages/AboutUs';
import AboutUsRo from './pages/AboutUsRo';
import AboutUsRu from './pages/AboutUsRu';
import Cookies from './pages/Cookies';
import CookiesRo from './pages/CookiesRo';
import CookiesRu from './pages/CookiesRu';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PrivacyPolicyRo from './pages/PrivacyPolicyRo';
import PrivacyPolicyRu from './pages/PrivacyPolicyRu';
import Portfolio from './pages/Portfolio';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ro' element={<HomeRo />} />
          <Route path='/ru' element={<HomeRu />} />
          <Route path='/services' element={<Services />} />
          <Route path='/ro/services' element={<ServicesRo />} />
          <Route path='/ru/services' element={<ServicesRu />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/ro/about' element={<AboutUsRo />} />
          <Route path='/ru/about' element={<AboutUsRu />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/cookies' element={<Cookies />} />
          <Route path='/ro/cookies' element={<CookiesRo />} />
          <Route path='/ru/cookies' element={<CookiesRu />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/ro/privacyPolicy' element={<PrivacyPolicyRo />} />
          <Route path='/ru/privacyPolicy' element={<PrivacyPolicyRu />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
