import React, { Component } from "react";
import styled from "styled-components";
import TableCard from "./TableCard";
import PreviewCard from "./PreviewCard";

const Section = styled.div``;

export default class Persons extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(data => this.setState({ data: data.items }))
      .catch(error => console.error(error));
  }

  ageTitle = number => {
    const titles = ["год", "года", "лет"];
    const cases = [2, 0, 1, 1, 1, 2];

    if (this.props.lang === "en") {
      return `${number} ${number === 1 ? "year" : "years"}`;
    }

    return (
      number +
      " " +
      titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ]
    );
  };

  getTable = person => (
    <div key={person.id} className="col-sm-12">
      <TableCard
        image={`./images/${person.image}.svg`}
        name={person.name}
        age={this.ageTitle(person.age)}
        phone={person.phone}
        favourite={person.favourite}
      />
    </div>
  );

  getPreview = person => (
    <div key={person.id} className={person.video ? "col-sm-12" : "col-sm-6"}>
      <PreviewCard
        image={`./images/${person.image}.svg`}
        video={person.video ? `./videos/${person.video}.mp4` : ""}
        name={person.name}
        age={this.ageTitle(person.age)}
        phone={person.phone}
        phrase={person.phrase}
        favourite={person.favourite}
      />
    </div>
  );

  compare = (a, b) => {
    a = a[this.props.sortName];
    b = b[this.props.sortName];
    return (a === b ? 0 : a > b ? 1 : -1) * this.props.sortDirection;
  };

  search = person => {
    const searchArray = this.props.search.toLowerCase().split(" ");

    return searchArray.every(subStr =>
      person.name.toLowerCase().includes(subStr)
    );
  };

  render() {
    const data = this.state.data.filter(this.search).sort(this.compare);
    const personsList = data.map(
      person =>
        this.props.view === "preview"
          ? this.getPreview(person)
          : this.getTable(person)
    );

    return (
      <Section>
        <div className="row">{personsList}</div>
      </Section>
    );
  }
}
