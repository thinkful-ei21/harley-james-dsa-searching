import React, { Component } from 'react';
import './App.css';
import { linearSearch, binarySearch } from './search';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: 'Search for a value in the data using Linear or Binary Search',
            query: null
        };
    }

    grabText(e) {
        this.setState({
            ...this.state,
            query: e.target.value
        });
    }

    linearSubmit(e) {
        e.preventDefault();
        //console.log(e);
        if (this.state.query !== null) {
            this.setState({
                ...this.state,
                output: linearSearch(this.state.query)
            });
        }
    }

    binarySubmit(e) {
        e.preventDefault();
        if (this.state.query !== null) {
            this.setState({
                ...this.state,
                output: binarySearch(this.state.query)
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Data set</h1>
                    <p>
                        89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33<br />
                        45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16<br />
                        85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26<br />
                        38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42<br />
                        51 54 84 34 53 78 40 14 5
                    </p>
                </header>

                <div>
                    <input type="text" onChange={e => this.grabText(e)} />
                    <button onClick={e => this.linearSubmit(e)}>Linear Search</button>
                    <button onClick={e => this.binarySubmit(e)}>Binary Search</button>
                </div>
                <span>{this.state.output}</span>
            </div>
        );
    }
}

export default App;
