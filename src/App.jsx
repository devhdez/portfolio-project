import { useState } from 'react'
import React from "react"
import Header from "./Header"
import Heroe from "./Heroe"
import Feat from "./Feat"
import Services from "./Services"
import "./index.css"
import { Features } from 'tailwindcss'


export default function App() {
  return (
    <div className="App">
      <Header />
      <Heroe />
      <Feat />
      <Services />
    </div>
  )

}


