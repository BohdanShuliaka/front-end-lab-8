import React, { Component } from "react";

class SelectedRow extends Component {
  render() {
    let emptyBox =
      this.props.selected.length !== 0 ? null : (
        <div>
          <div className="empty-item" />
          <div className="empty-item" />
          <div className="empty-item" />
        </div>
      );
    return (
      <div className="selected-container">
        {emptyBox}
        {this.props.selected.map(item => {
          return (
            <div
              key={item.id}
              className="selected-item"
              style={{ backgroundColor: item.color }}
            >
              <i
                className="material-icons"
                onClick={() => this.props.handleDelete(item)}
              >
                do_not_disturb
              </i>
            </div>
          );
        })}
      </div>
    );
  }
}
export default SelectedRow;
