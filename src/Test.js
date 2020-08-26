import React, { Component } from "react";
import "./Test.css";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 27,
    };
  }

  displayName = () => {
    if (this.state.name === "Alex") {
      this.setState({ name: "James" });
    } else this.setState({ name: "Alex" });
  };

  render() {
    return (
      <div className="Test">
        <div>
          <h1>{this.state.name}</h1>
        </div>
        <button className="button" onClick={this.displayName.bind(this)}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default Test;
