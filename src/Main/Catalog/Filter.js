import React from "react";
import styled from "styled-components";
import View from "./View";
import Sort from "./Sort";
import Language from "./Language";
import Search from "./Search";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export default props => (
  <div>
    <Top>
      <Language
        lang={props.lang}
        onLangChange={lang => props.onChange("lang", lang)}
      />
      <Search
        lang={props.lang}
        onSearchChange={value => props.onChange("search", value)}
      />
    </Top>
    <Bottom>
      <Sort
        lang={props.lang}
        name={props.sortName}
        direction={props.sortDirection}
        onNameChange={name => props.onChange("sortName", name)}
        onDirectionChange={direction =>
          props.onChange("sortDirection", direction)
        }
      />
      <View
        lang={props.lang}
        view={props.view}
        onViewChange={viewType => props.onChange("view", viewType)}
      />
    </Bottom>
  </div>
);
