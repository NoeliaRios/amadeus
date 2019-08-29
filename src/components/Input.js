import React, { Component } from 'react';
import './input.scss';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: '',
            arrival: '',
        }
    };

    handleInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('los datos son', this.state);
    }
    render() {
        return (
            <div className="input-container">
                <form>
                    <input
                        name="departure"
                        type="text"
                        placeholder="Departure"
                        value={this.state.departure}
                        onChange={this.handleInputChange}
                    >
                    </input>
                    <input
                        name='arrival'
                        type="text"
                        placeholder="Arrival"
                        value={this.state.arrival}
                        onChange={this.handleInputChange}
                    >
                    </input>

                    <button
                        type="submit"
                        onClick={this.handleSubmit}>
                        Ir</button>
                </form>



            </div>
        )
    }
}


export default Hero;
