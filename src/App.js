import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { search } from './search';

class App extends Component {
    constructor(props) {
        super(props);
        this.output = 'something';
    }

    linearSubmit(e) {
        e.preventDefault();
        // console.log('linear search');
    }

    findInput(param) {
        this.output = search(param);
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
                    <input type="text" />
                </form>
                <form onSubmit={() => console.log('binary search')}>
                    <label>Binary Search:</label>
                    <input type="text" />
                </form>
            </main>
        );
    }
}

export default App;
