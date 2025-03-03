import { useState } from 'react'
import React from "react"
import Header from "./Header"
import "./index.css"


export default function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>
          Building hdez.dev
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Loading...
        </a>
      </header>
    </div>
  )

}


