import React, { Component } from 'react';
import './App.css';
import Radium,{ StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Renê', age: 28 },
      { id: '2', name: 'Roger', age: 80 },
      { id: '3', name: 'Araujo', age: 99 }
    ],
    otherState: 'Some value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons: persons
    }
    );
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursos: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    let persons = null;

    if (this.state.showPersons) {      

      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} 
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
              )
            }
            )
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      };
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, from react App!</h1>
        <p className={classes.join(' ')}>Hi, from react App!</p>
        <button
          style={style}
          onClick={this.tooglePersonsHandler}>Toggle Persons</button>
        {persons}

      </div>
      </StyleRoot>

    );
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Sou um react App"));    
  }
}

export default Radium(App);
