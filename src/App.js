import React from "react"
import logo from "./logo.svg"

function App() {
  return (
    <div className="text-center">
      <header className="bg-blue-900 m-6 p-6 rounded shadow-lg flex flex-col items-center">
        <img src={logo} className="App-logo w-32 h-32" alt="logo" />
        <h1 className="text-white text-3xl">Hello World</h1>
      </header>
    </div>
  )
}

export default App
