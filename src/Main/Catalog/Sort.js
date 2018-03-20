import React from "react";
import styled from "styled-components";

const Sort = styled.div`
  margin-right: 48px;
`;

const Title = styled.h6`
  font-size: 18px;
  line-height: 22px;
  font-weight: normal;

  margin: 0 0 8px;
`;

const Keys = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

const Direction = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-size: 14px;
  line-height: 20px;

  padding: 5px 15px;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background-color: ${props => (props.isActive ? "#e5e5e5" : "white")};
  cursor: pointer;
  & + button {
    margin-left: -1px;
  }
`;

const titles = {
  en: {
    title: "Sort By",
    name: "Name",
    age: "Age",
    up: "To top",
    down: "To bottom"
  },
  ru: {
    title: "Сортировка",
    name: "Имя",
    age: "Возраст",
    up: "По возрастанию",
    down: "По убыванию"
  }
};

export default props => (
  <Sort>
    <Title>{titles[props.lang].title}</Title>
    <Keys>
      <Button
        type="button"
        isActive={props.name === "id"}
        onClick={() => props.onNameChange("id")}
      >
        ID
      </Button>
      <Button
        type="button"
        isActive={props.name === "name"}
        onClick={() => props.onNameChange("name")}
      >
        {titles[props.lang].name}
      </Button>
      <Button
        type="button"
        isActive={props.name === "age"}
        onClick={() => props.onNameChange("age")}
      >
        {titles[props.lang].age}
      </Button>
    </Keys>
    <Direction>
      <Button
        type="button"
        isActive={props.direction === 1}
        onClick={() => props.onDirectionChange(1)}
      >
        {titles[props.lang].up}
      </Button>
      <Button
        type="button"
        isActive={props.direction === -1}
        onClick={() => props.onDirectionChange(-1)}
      >
        {titles[props.lang].down}
      </Button>
    </Direction>
  </Sort>
);
