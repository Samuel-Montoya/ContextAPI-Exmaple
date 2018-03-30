import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import MyProvider from "./Context"
import Family from "./Family"

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <h1>App Component</h1>
          <Family />
        </div>
      </MyProvider>
    )
  }
}

export default App
