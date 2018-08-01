import React, { Component } from 'react';
import './App.css';
import { linearSearch, binarySearch } from './search';

class App extends Component {
    constructor(props) {
        super(props);
        this.linearOutput = 'something';
        this.binaryOutput = 'something';
    }

    linearSubmit(e) {
        e.preventDefault();
        console.log('linearSubmit called');
        console.log(e.target.search.value);
        //console.log(e.target.linear.value);
        this.linearOutput = linearSearch(e.target.linear.value, e.target.search.value);
        // console.log('linear search');
    }

    binarySubmit(e) {
        e.preventDefault();
        this.binaryOutput = binarySearch(e.value);
    }

    render() {
        return (
            //   <div className="App">
            //     <header className="App-header">
            //       <img src={logo} className="App-logo" alt="logo" />
            //       <h1 className="App-title">Welcome to React</h1>
            //     </header>
            //     <p className="App-intro">
            //       To get started, edit <code>src/App.js</code> and save to reload.
            //     </p>
            //   </div>
            <main>
                <form onSubmit={e => this.linearSubmit(e)}>
                    <label>Linear Search:</label>
                    <input type="text" name="linear"/>
                    <label>Search Value:</label>
                    <input type="text" name="search"/>
                </form>
                <form onSubmit={e => this.binarySubmit(e)}>
                    <label>Binary Search:</label>
                    <input type="text" />
                </form>
            </main>
        );
    }
}

export default App;
