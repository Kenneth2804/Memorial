import React, { createContext, useState, useContext } from "react";

// Crear el contexto
export const LanguageContext = createContext(); // Exporta aquí el contexto

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Idioma por defecto: inglés

  const toggleLanguage = (lang) => {
    setLanguage(lang); // Cambia el idioma
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para consumir el contexto
export const useLanguage = () => useContext(LanguageContext);
