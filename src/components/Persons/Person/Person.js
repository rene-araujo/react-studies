import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classes from './Person.css';


class Person extends Component {


    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>Eu me chamo {this.props.name} e tenho {this.props.age} anos!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
        // return [
        //     <p key="1" onClick={this.props.click}>Eu me chamo {this.props.name} e tenho {this.props.age} anos!</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ];
    }
};

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;