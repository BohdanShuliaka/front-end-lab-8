import React, { Component } from 'react';

class ColorsTable extends Component {
    render() {
        return <div className="colors-table">
                   { 
                    this.props.current.map(item => {
                        return (
                        <div className="color-item" 
                             style={{'backgroundColor':item.color}}>
                        <div className="add-icon" 
                             onClick={() => this.props.handleAdd(item)}>
                            <i className="material-icons">add</i>
                            <span>Add</span>
                        </div>   
                        </div> 
                        )
                    })
                }
               </div>
    }
}
export default  ColorsTable;