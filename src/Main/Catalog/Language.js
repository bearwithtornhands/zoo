import React from "react";
import styled from "styled-components";

const Language = styled.div`
  display: flex;
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

export default props => (
  <Language>
    <Button
      type="button"
      isActive={props.lang === "ru"}
      onClick={() => props.onLangChange("ru")}
    >
      RU
    </Button>
    <Button
      type="button"
      isActive={props.lang === "en"}
      onClick={() => props.onLangChange("en")}
    >
      EN
    </Button>
  </Language>
);
