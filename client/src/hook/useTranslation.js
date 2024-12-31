import { useContext } from "react";
import dictionary from "../international/Dictionary";
import { LanguageContext } from "../context/LanguageContext"; 

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const t = (key) => {
    const keys = key.split(".");
    return keys.reduce((acc, curr) => acc && acc[curr], dictionary[language]) || key;
  };

  return { t };
};
