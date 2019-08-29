import React, { Component } from 'react';
// import Main from './components/Main';
import Input from './components/Input';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="main">
                <h1>Cheap Flights Best Deals</h1>
                <h4>Search hundreds of travel sites at once</h4>
                    <Input />
                </div>


            </div>
        )
    }
}


export default App;
