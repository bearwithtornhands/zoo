import React from "react";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Title = styled.h6`
  font-size: 18px;
  line-height: 22px;
  font-weight: normal;

  width: 100%;
  margin: 0 0 8px;
`;

const Button = styled.button`
  font-size: 14px;
  line-height: 20px;

  padding: 15px;
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
    title: "Appearance",
    table: "Table",
    preview: "Preview"
  },
  ru: {
    title: "Вид",
    table: "Таблица",
    preview: "Превью"
  }
};

export default props => (
  <View>
    <Title>{titles[props.lang].title}</Title>
    <Button
      type="button"
      isActive={props.view === "table"}
      onClick={() => props.onViewChange("table")}
    >
      {titles[props.lang].table}
    </Button>
    <Button
      type="button"
      isActive={props.view === "preview"}
      onClick={() => props.onViewChange("preview")}
    >
      {titles[props.lang].preview}
    </Button>
  </View>
);
