import { useEffect } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Today from './Today';
import Welcome from './Welcome';
import Ideas from './Ideas';

import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
 
function App() {

  const {i18n, t} = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  useEffect( ()=> {
    gsap.fromTo(".link", 
      { opacity: 0, y: -30 },
      { ease: "power2.inOut", opacity: 1, y: 0, duration: 2, delay: .5, stagger: 0.2 });
  }, []);

  return (
    <>
    
    <button 
      title="Click to change language"
      className='language-btn' 
      onClick={toggleLang}>
      {i18n.language === 'en' ? 'RU' : 'EN'}
    </button>
    <Router>
      <nav>
        <Link to="/" className='link'>U-Plan</Link>
        <Link to="/tasks" className='link'>{t('tasks')}</Link>
        <Link to="/ideas" className='link'>{t('ideas')}</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/tasks" element={<Today />} />
        <Route path="/ideas" element={<Ideas />} />
      </Routes>
    </Router>

    </>
    
  )
}

export default App;
