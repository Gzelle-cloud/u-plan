import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from 'gsap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();

  useEffect( ()=> {
    gsap.fromTo(".link", 
      { opacity: 0, y: -30 },
      { ease: "power2.inOut", opacity: 1, y: 0, duration: 2, delay: .5, stagger: 0.2 });
  }, []);

  return (
      <nav>
        <Link to="/" className='link'>U-Plan</Link>
        <Link to="/tasks" className='link'>{t('tasks')}</Link>
        <Link to="/ideas" className='link'>{t('ideas')}</Link>
        <Link to="/workshop" className='link'>{t('workshop')}</Link>
      </nav>

  )
}

export default Navbar;