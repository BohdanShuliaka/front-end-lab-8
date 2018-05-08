import React, { Component } from 'react';


class Filter extends Component {
    componentDidMount(){
        this.nameInput.focus();
      }
    render() {
        return <input 
        className="input" 
        placeholder="Color's name, tags" 
        onChange={(e) => this.props.filter(e.target.value)} 
        ref={(input) => { this.nameInput = input; }} 
        />
    }
}
export default  Filter;