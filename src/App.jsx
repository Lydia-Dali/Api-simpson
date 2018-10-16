import React, { Component } from 'react';
import GenerateEmployee from './components/GenerateEmployee';
import DisplayEmployee from './components/DisplayEmployee';

import './App.css';

const  sampleEmployee = {
    character: "Nelson Muntz",
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
  
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: sampleEmployee
    };
  }

  getEmployee() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(results  =>  results.json()) // conversion du résultat en JSON
    .then(data  => {
        this.setState({
            employee: data[0]
            });        
});
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Simpsons citations</h1>
        </header>
        <DisplayEmployee  employee={this.state.employee}  />      
        <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />
      </div>
    );
  }
}

export default App;