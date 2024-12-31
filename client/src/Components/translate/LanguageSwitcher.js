import React, { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "../../styles/translate.css"
const LanguageSwitcher = () => {
  const { toggleLanguage, language } = useContext(LanguageContext);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      toggleLanguage(language === "en" ? "es" : "en");
      setIsAnimating(false);
    }, 300); 
  };

  return (
    <button
      className="language-switcher"
      onClick={handleToggle}
    >
      <span
        className={`language-text ${
          isAnimating
            ? language === "en"
              ? "language-text-exit-active"
              : "language-text-enter-active"
            : ""
        }`}
      >
        {language === "en" ? "Español" : "English"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
