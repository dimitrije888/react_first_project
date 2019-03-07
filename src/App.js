import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: 'Dimitrije' , age: 28},
            {name: 'Manu', age:23},
            {name:'zoki', age:22}
        ]
    }

    switchNameHandler = (newName) => {
       // console.log('Was clicked');
       // DONT DO THIS: this.state.persons[0].name = 'mita';
       this.setState({        
        persons: [
            {name: newName , age: 28},
            {name: 'Manu', age:23},
            {name:'zoki', age:3}
        ]});
    }


    nameChangeHandler = (event) => {
        this.setState({        
         persons: [
             {name: 'Dimitrije' , age: 28},
             {name: event.target.value, age:23},
             {name:'zoki', age:3}
         ]});
     }
    render() {
        const style = {
            backgroundColor: 'white', 
            font: 'inherit', 
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return ( 
            <div className = "App"> 
                <h1> hi im a react app </h1>
                <p>This is really Working!</p>
                <button 
                style={style}
                onClick={() => this.switchNameHandler('BOCA')}>Switch Name</button>
                <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}/>
                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age} 
                    click={this.switchNameHandler.bind(this, 'Predrag')} 
                    changed={this.nameChangeHandler}>My hobies: Trcanje</Person>
                <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}/>
            </div> 
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;