import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const {i18n, t} = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <>
    <button 
      title="Click to change language"
      className='language-btn' 
      onClick={toggleLang}>
      {i18n.language === 'en' ? 'RU' : 'EN'}
    </button>
    </>
  )
}

export default LanguageSwitcher;

