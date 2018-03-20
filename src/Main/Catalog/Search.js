import React from "react";
import styled from "styled-components";

const Search = styled.div``;

const Input = styled.input`
  font-size: 14px;
  line-height: 20px;

  width: 100%;
  padding: 5px 15px;
  border: 1px solid #e5e5e5;
`;

export default props => (
  <Search>
    <Input
      type="text"
      placeholder={props.lang === "en" ? "Search.." : "Найти.."}
      onChange={event => props.onSearchChange(event.target.value)}
    />
  </Search>
);
