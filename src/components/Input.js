import React, { Component } from 'react';
import './input.scss';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: '',
            arrival: '',
            checkIn: '',
            checkOut: '',
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
        this.props.handleSubmit(this.state);
        // this.setState({
        //     departure: '',
        //     arrival: '',
        //     checkIn: '',
        //     checkOut: '',
        // })
    }
    render() {
        return (

            <div className="input-container">
                <h1>Cheap Flights Best Deals</h1>
                <h4>Search hundreds of travel sites at once</h4>
                <form>
                    <input
                        name="departure"
                        type="text"
                        placeholder="Departure"
                        value={this.state.departure}
                        onChange={this.handleInputChange}>
                    </input>
                    <input
                        name='arrival'
                        type="text"
                        placeholder="Arrival"
                        value={this.state.arrival}
                        onChange={this.handleInputChange}>
                    </input>
                    <input
                        name='checkIn'
                        type='date'
                        placeholder='dd/mm/yyyy'
                        value={this.state.date}
                        onChange={this.handleInputChange}>
                    </input>
                    <input
                        name='checkOut'
                        type='date'
                        placeholder='dd/mm/yyyy'
                        value={this.state.date}
                        onChange={this.handleInputChange}>
                    </input>
                    <input
                        name='passengers'
                        type='number'
                        placeholder='1'
                        value={this.state.passengers}
                        onChange={this.handleInputChange}>
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
