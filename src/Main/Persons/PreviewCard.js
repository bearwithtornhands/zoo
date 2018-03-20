import React from "react";
import styled from "styled-components";

const Card = styled.div`
  font-size: 16px;
  line-height: 28px;

  display: flex;
  align-items: flex-start;
  border: 1px solid #d8d8d8;
  background-color: #fbfbfb;
  margin-bottom: 16px;
`;

const Description = styled.div`
  position: relative;
  padding: 16px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
  margin-bottom: 12px;
`;

const Image = styled.img`
  display: block;
  width: 40px;
  height: 40px;
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
  color: grey;

  margin-bottom: 12px;
`;

const Phone = styled.p`
  margin-bottom: 12px;
`;

const Phrase = styled.p`
  margin-bottom: 12px;
`;

const Favourite = styled.div`
  position: absolute;
  top: 20px;
  right: 16px;
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

const Video = styled.video`
  display: ${props => (props.hasVideo ? "block" : "none")};
  width: 50%;
`;

export default props => (
  <Card>
    <Description>
      <Head>
        <Image src={props.image} alt={props.name} />
        <Name>{props.name}</Name>
      </Head>

      <Age>{props.age}</Age>
      <Phone>{props.phone}</Phone>
      <Phrase>{props.phrase}</Phrase>

      <Favourite>
        <Button type="button" isActive={props.favourite}>
          ★
        </Button>
      </Favourite>
    </Description>

    <Video hasVideo={props.video} controls="controls">
      <source src={props.video} />
    </Video>
  </Card>
);
