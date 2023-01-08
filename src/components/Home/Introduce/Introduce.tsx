import React from 'react';
import styled from 'styled-components';
import IntroduceItem from './IntroduceItem';

const Introduce = () => {
  return (
    <Container>
      <Title>안녕하세요 프론트엔드 개발자 조민우입니다.</Title>
      <ul>
        <IntroduceItem />
      </ul>
    </Container>
  );
};

export default Introduce;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;
