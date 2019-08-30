import React, { Component } from 'react';
import './results.scss';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className="results">
                <p>Departure:{this.props.fields.departure}
                Arrival:{this.props.fields.arrival}
                Check In:{this.props.fields.checkIn}
                Check Out: {this.props.fields.checkOut}
                </p>
                
            </div>
        )
    }
}


export default Results;
