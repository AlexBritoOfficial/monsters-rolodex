import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/SearchBox/search-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Create an array of monster objects
      monsters: [],

      // Create a field for User Input. User will search monster. Given input it will then filter out the cards.
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state; // Destructuring

    // This is the same as
    // const monsters = this.state.monsters
    // const searchField = this.state.searchfield

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }

  componentDidMount() {
    //  Fetch the data located at this URL.
    //  Fetch returns us a promise.
    //  The response comes back in a header packet
    //  But we dont know what lives inside the body of the packet.
    //  We want to receive the information in the body property
    //  in JSON format.
    //  Then wait for another response, receive the data in JSON
    //  format.
    //  Call the "then" method because this call happens async

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monster) => this.setState({ monsters: monster }))
      .catch((err) => console.log(err));
  }
}

export default App;
