import { useState } from 'react';
import { useCookies } from 'react-cookie';

const LanguageSelector = () => {
  const [cookies, setCookie] = useCookies(['language']);
  const [language, setLanguage] = useState(cookies.language || 'en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setCookie('language', lang, { path: '/' });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
      <p>Current language: {language}</p>
    </div>
  );
};

export default LanguageSelector;
