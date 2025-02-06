import { useEffect } from "react";
import Slides from "./Slides";
import { gsap } from 'gsap';
import { useTranslation } from "react-i18next";

function Welcome() {

  const { t } = useTranslation();

  useEffect ( ()=> {
    gsap.fromTo(".fromUp", 
      { opacity: 0, y: -30 },
      { ease: "power2.inOut", opacity: 1, y: 0, duration: 2, delay: 1 });

    gsap.fromTo(".appear", 
      { opacity: 0},
      {ease: "power2.inOut", opacity: 1, duration: 2, delay: 1.5});

  }, []);

  return(
    <div>
      <div className="container fromUp">
        <h1>{t('Welcome to U-Plan!')}</h1>
      </div>
      <div className="container fromUp">
        <h4>{t('your life, your way')}</h4>
      </div>
      <div className="box appear">
        <p>{t('Plan your day: manage today’s tasks and capture your ideas, and refine them in the workshop — without distractions from an overfilled design')}</p>
        <p>{t()}</p>
      </div>  
      
      <div className="container appear">
        <p>{t('Explore the mobile version')}</p>
      </div>
      <div className="container appear">
        <Slides />
      </div>
     
      
    </div>
  )
}

export default Welcome;