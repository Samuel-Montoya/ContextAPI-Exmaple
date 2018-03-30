import React, { Component } from "react"

// Make New Context
export const MyContext = React.createContext()

// Then Create a Provider Component
class MyProvider extends Component {
  state = {
    name: "Brettly",
    age: 8,
    slammed: true
  }

  updateName = name => {
    this.setState({
      name: name
    })
  }

  render() {
    return (
      <MyContext.Provider
        value={{ state: this.state, updateName: this.updateName }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider
