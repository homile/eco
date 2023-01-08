import React from 'react';
import styled from 'styled-components';
import Contents from '../components/Home/Contents/Contents';
import Introduce from '../components/Home/Introduce/Introduce';

const Home = () => {
  return (
    <Container>
      <Introduce />
      <Contents />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
