import React from 'react';
import styled from 'styled-components';
import Introduce from '../components/Home/Introduce/Introduce';

const Home = () => {
  return (
    <Container>
      <Introduce></Introduce>
      <div>
        <h2>개발자로서 역량을 강화하기 위한 노력</h2>
        <span>Github 1일 1커밋</span>
        <img />
        <span>블로그 작성(TIL & 기술)</span>
        <img />
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
