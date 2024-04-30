import React, { createContext, useState, useContext } from "react";
import texts from "../../texts.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = () => {
    setLanguage(language === "en" ? "tur" : "en");
  };

  const getTexts = () => {
    return texts[language];
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, getTexts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
