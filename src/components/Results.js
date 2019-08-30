import React, { Component } from 'react';
import './results.scss';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    componentDidMount(){
        
    }

    render() {
        const {departure, arrival, checkIn, checkOut} = this.props.fields;
        return (
            <div className="results">
                <p>Departure:{departure}
                Arrival:{arrival}
                Check In:{checkIn}
                Check Out: {checkOut}
                </p>
                
            </div>
        )
    }
}


export default Results;
