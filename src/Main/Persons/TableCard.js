import React from "react";
import styled from "styled-components";

const Card = styled.div`
  font-size: 16px;
  line-height: 28px;

  display: flex;
  align-items: center;
  position: relative;
  padding: 16px 48px 16px 8px;
  border: 1px solid #d8d8d8;
  background-color: #fbfbfb;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  padding-right: 6px;
`;

const Image = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  margin-right: 8px;
  object-fit: contain;
`;

const Name = styled.h6`
  font-size: 16px;
  line-height: 28px;
  font-weight: normal;

  margin: 0;
`;

const Age = styled.p`
  width: 25%;
  padding: 0 6px;
`;

const Phone = styled.p`
  width: 25%;
  padding: 0 6px;
`;

const Favourite = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
`;

const Button = styled.button`
  font-size: 22px;
  line-height: 1;

  border: 0;
  border-radius: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  display: block;
  width: 32px;
  height: 32px;
  opacity: ${props => (props.isActive ? "1" : "0.5")};
`;

export default props => (
  <Card>
    <Head>
      <Image src={props.image} alt={props.name} />
      <Name>{props.name}</Name>
    </Head>

    <Age>{props.age}</Age>
    <Phone>{props.phone}</Phone>

    <Favourite>
      <Button type="button" isActive={props.favourite}>
        ★
      </Button>
    </Favourite>
  </Card>
);
