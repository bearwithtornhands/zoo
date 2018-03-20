import React from "react";
import styled from "styled-components";
import Catalog from "./Catalog";

const Wrapper = styled.div`
  max-width: 976px;
  margin: auto;
  padding: 0 8px;
`;

const Main = styled.main`
  padding: 80px 0;
`;

export default () => (
  <Main>
    <Wrapper>
      <Catalog />
    </Wrapper>
  </Main>
);
