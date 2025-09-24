import { useState } from 'react'
import React from "react"
import Header from "./Header"
import Hero from "./Hero"
import Feat from "./Feat"
import Services from "./Services"
import About from './about'
import Testimonials from './testimonials'
import Footer from './Footer'
import "./index.css"
import { Features } from 'tailwindcss'


export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feat />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </div>
  )

}


