import React from 'react';
import styled from 'styled-components';
import PostForm from '../components/Post/PostForm';

const Post = () => {
  return (
    <Container>
      <PostForm />
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  margin: 0 10px;
`;
