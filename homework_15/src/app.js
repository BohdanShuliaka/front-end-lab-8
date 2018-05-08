import React, { Component } from "react";
// This plugin automatically reload page on changes
import { hot } from "react-hot-loader";
import ColorAmount from "./features/ColorAmount";
import Filter from "./features/Filter";
import ColorsTable from "./features/ColorsTable";
import SelectedRow from "./features/SelectedRow";

const API = "https://epam-fe-homework-15.firebaseio.com/colors.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      currentColors: [],
      selected: [],
      selectedOverflow: [],
      input: [],
      error: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  componentDidMount() {
    fetch(API)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const colors = data;
        this.setState({
          colors: colors,
          currentColors: colors
        });
      });
  }

  handleAdd(el) {
    let colorsState = this.state.colors;
    let selectedState = this.state.selected;
    if (selectedState.length > 9) {
      return;
    }
    let index = this.state.colors.indexOf(el);
    colorsState.splice(index, 1);
    selectedState.push(el);

    let overflow =
      selectedState.length > 5
        ? selectedState.slice(selectedState.length - 5)
        : selectedState;
    this.setState({
      colors: colorsState,
      selected: selectedState,
      selectedOverflow: overflow
    });
    this.handleFilter(this.state.input);
  }

  handleDelete(el) {
    let colorsState = this.state.colors;
    let selectedState = this.state.selected;
    let index = selectedState.indexOf(el);
    selectedState.splice(index, 1);
    colorsState.push(el);
    let overflow =
      selectedState.length > 5
        ? selectedState.slice(selectedState.length - 5)
        : selectedState;
    this.setState({
      colors: colorsState,
      selected: selectedState,
      selectedOverflow: overflow
    });
    this.handleFilter(this.state.input);
  }

  handleFilter(value) {
    let val = value.toString().toLowerCase();
    let filteredList = this.state.colors.filter(item => {
      return (
        item.tags
          .toString()
          .toLowerCase()
          .search(val) !== -1
      );
    });
    this.setState({
      currentColors: filteredList,
      input: value
    });
    if (!filteredList.length) {
      this.setState({
        error: "There are no colors found"
      });
    } else {
      this.setState({
        error: ""
      });
    }
  }

  render() {
    const errorCheck =
      this.state.error === "" ? (
        <ColorsTable
          current={this.state.currentColors}
          handleAdd={this.handleAdd}
        />
      ) : (
        <h1 className="error-message">{this.state.error}</h1>
      );

    return (
      <div className="container">
        <Filter filter={this.handleFilter} />
        <SelectedRow
          selected={this.state.selectedOverflow}
          handleDelete={this.handleDelete}
        />
        <ColorAmount amount={this.state.currentColors.length} />
        {errorCheck}
      </div>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);
