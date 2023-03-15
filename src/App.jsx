import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import './index.css'
import logo from './assets/teddy-trailers.png';
import logofooter from './assets/teddy-trailers-logo.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';

// pages
import Home from './pages/Home.jsx'
import Trailers from './pages/Trailers.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className='header__logo'>
          <NavLink to="/">
            <img src={logo} alt="Teddy Trailers" />
          </NavLink>
        </nav>
        <nav className='header__links'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="trailers">Trailers</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="trailers" element={ <Trailers /> } />
          <Route path="contact" element={ <Contact />  } />
        </Routes>
      </main>
      <footer>
        <div className="footer">
          <NavLink to="/">
            <img src={logofooter} alt="Teddy Trailers South Africa" />
          </NavLink>
          <div className='footer__center'>
            <div className='footer__center--menu'>
              <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="trailers">Trailers</NavLink>
                <NavLink to="contact">Contact</NavLink>
              </nav>
            </div>
            <div className='footer__social'>
              <a href="https://www.facebook.com/nationaltrailersolution/" target="blank"><img src={facebook} alt="teddy trailers facebook"/></a>
              <a href="https://www.instagram.com/teddy.929/" target="blank"><img src={instagram} alt="teddy trailers instagram" /></a>
            </div>
          </div>
          <div className='footer__contact'>
            <h4>Get In Touch</h4>
            <p>Call/WhatsApp<br />0665345139</p>
          </div>
        </div>
        <div className="copyright">
          <span><p>©2022. Teddy Trailers. All Rights Reserved.</p></span>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
