import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function DateAndQuote() {
  const { t } = useTranslation();

  const getToday = new Date();
  const today = getToday.toString().slice(0, 15);

  const [quote, setQuote] = useState("");

  useEffect(()=> {  
    const getQuote = async () => {
      const response = await fetch('https://corsproxy.io/https://zenquotes.io/api/random');
      const data = await response.json();
      setQuote(data[0].q);
    }
    getQuote()
  }, [])

  return(
    <div className="today-block">
      <p className="text">{t('Today is')} </p>
      <p className="sticker">{today}</p>
      <p  className="text">{t(`Today's quote`)}</p>      
      <p className="sticker">{quote}</p>
    </div>
  )
}

export default DateAndQuote;