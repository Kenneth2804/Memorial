import React from 'react'
import "../../styles/cta.css"
export default function Cta() {
  return (
    <section className="cta">
    <div className="cta-content">
      <h2 className="cta-title">Ready to Create a Lasting Tribute?</h2>
      <p className="cta-description">
        Honor your loved ones with a beautiful memorial that celebrates their life and legacy.
      </p>
      <div className="cta-buttons">
        <button className="cta-button primary">Get Started</button>
        <button className="cta-button secondary">Learn More</button>
      </div>
    </div>
  </section>
  )
}
