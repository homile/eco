import React from 'react';
import styled from 'styled-components';
import ContentsItem from './ContentsItem';

const Contents = () => {
  return (
    <Container>
      <Title>개발자로서 역량을 강화하기 위한 노력</Title>
      <ul>
        <ContentsItem />
      </ul>
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  height: 40px;
`;
