import React, { Component } from "react";
import Filter from "./Filter";
import Persons from "../Persons";

export default class Catalog extends Component {
  state = {
    lang: "en",
    view: "table",
    sortName: "id",
    sortDirection: 1,
    search: ""
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Filter
          lang={this.state.lang}
          view={this.state.view}
          sortName={this.state.sortName}
          sortDirection={this.state.sortDirection}
          onChange={this.handleChange}
        />
        <Persons
          lang={this.state.lang}
          view={this.state.view}
          sortName={this.state.sortName}
          sortDirection={this.state.sortDirection}
          search={this.state.search}
        />
      </div>
    );
  }
}
