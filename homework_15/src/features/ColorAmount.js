import React, { Component } from 'react';

class ColorAmount extends Component {
    render() {
        return <div className="amount">Colors: {this.props.amount}
        </div>
    }
}

export default ColorAmount;