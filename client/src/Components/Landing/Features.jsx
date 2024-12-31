import React from 'react'
import "../../styles/features.css"
import { useTranslation } from "../../hook/useTranslation";

const features = [
  {
    icon: '❤️',
    key: 'Share', 
  },
  {
    icon: '📷',
    key: 'Photo',
  },
  {
    icon: '💬',
    key: 'Comm',
  }
];

export default function Features() {
  const { t } = useTranslation(); 

  return (
    <section className="features">
        <h2 className="features-title">{t("memories.TitleWorks")}</h2> 

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{t(`memories.${feature.key}Title`)}</h3> 
            <p className="feature-description">{t(`memories.${feature.key}Subtitle`)}</p> 
          </div>
        ))}
      </div>
    </section>
  );
}
