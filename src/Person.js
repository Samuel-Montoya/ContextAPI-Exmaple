import React, { Component } from "react"
import { MyContext } from "./Context"

class Person extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <p>
              {context.state.name} is {context.state.age} years old.
            </p>
            <button onClick={() => context.updateName("JAM")}>New Name</button>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Person
