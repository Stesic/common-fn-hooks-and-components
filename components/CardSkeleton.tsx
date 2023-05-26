//   --loading-grey: #ededed;

import React from "react";
import styled from "styled-components";

function CardSkeleton() {
  return (
    <Container className="card loading">
      <Img className="image"></Img>
      <Content className="content">
        <h4></h4>
        <Description className="description"></Description>
      </Content>
    </Container>
  );
}

export default CardSkeleton;

const Container = styled.div`
  width: 350px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);

  h4 {
    min-height: 1.6rem;
    border-radius: 4px;
    animation-delay: 0.05s;
  }

  @keyframes loading {
    to {
      background-position-x: -20%;
    }
  }
`;

const Img = styled.div`
  height: 200px;
  background-color: #ededed;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #ededed;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
`;

const Content = styled.div`
  padding: 2rem 1.8rem;
`;

const Description = styled.div`
  font-size: 1rem;
  line-height: 1.4rem;
  background-color: #ededed;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #ededed;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
  min-height: 4rem;
  border-radius: 4px;
  animation-delay: 0.06s;
`;
