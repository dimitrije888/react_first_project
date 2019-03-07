import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return ( 
            <div className = "App"> 
                <h1> hi im a react app </h1>
                <p>This is really Working!</p>
                <Person name="Dimitrije" age="26"/>
                <Person name="Yoki" age="23" >My hobies: Trcanje</Person>
                <Person name="tebra" age="21"/>
            </div> 
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;