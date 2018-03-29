import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Renê', age: 28},
      {name: 'Roger', age: 80}
    ],
    otherState:[]
  }

  swichNameHandler = (newName) => {
    //console.log('Clicked');
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Roger Renê', age: 20}
      ]
    }
    )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Renê', age: 28},
        {name: event.target.value, age: 99}
      ]
    }
    )
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>Hi, from react App!</h1>
        <button 
         style={style}
         onClick={() => this.swichNameHandler('MAXXXX!!!!')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.swichNameHandler.bind(this, 'Angela')}
        changed={this.nameChangedHandler}
        >Oi oi oi</Person>
      </div>
      
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sou um react App'));    
  }
}

export default App;
