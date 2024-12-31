import React from "react";
import "../../styles/hero.css";
import { useTranslation } from "../../hook/useTranslation";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{t("hero.title")}</h1>
        <p className="hero-subtitle">{t("hero.subtitle")}</p>
        <Link to={"/register"}>
        <button className="cta-button">{t("hero.button")}</button>
        </Link>
      </div>
    </section>
  );
}
