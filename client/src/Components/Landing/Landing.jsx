import React from 'react'
import Hero from './Hero'
import Features from './Features'
import Cta from './Cta'
import LanguageSwitcher from '../translate/LanguageSwitcher'

export default function Landing() {
  return (
    <div className='app'>
      <LanguageSwitcher></LanguageSwitcher>
      <Hero/>
      <Features/>
      <Cta/>
      
      </div>
  )
}
