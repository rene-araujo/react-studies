import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] inside contructor', props);
  }

  
  state = {
    persons: [
      { id: '1', name: 'Renê', age: 28 },
      { id: '2', name: 'Roger', age: 80 },
      { id: '3', name: 'Araujo', age: 99 }
    ],
    otherState: 'Some value',
    showPersons: false,
    toogleClicked: 0
  };
 
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
    //old way
    //this.setState({ showPersons: !doesShow });

    //better way
    this.setState(
      (prevState, props) =>{
        return{
          showPersons: !doesShow,
          toogleClicked: prevState.toogleClicked + 1
        }
      }
    )
  }

  render() {

    let persons = null;
    
    if (this.state.showPersons) {
      persons = (        
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler} />        
      );      
    }    

    return (

      <WithClass classes={classes.App}>
        <Cockpit 
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.tooglePersonsHandler}
          />
        {persons}
      </WithClass>


    );
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Sou um react App"));    
  }
}

export default App;
