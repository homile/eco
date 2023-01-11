import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BoardList from '../components/Board/BoardList';

const Board = () => {
  return (
    <Container>
      <LinkDiv>
        <PostLink to="/post">글 작성하기</PostLink>
      </LinkDiv>
      <BoardList />
    </Container>
  );
};

export default Board;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const PostLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3264ff;
  color: #ffffff;
  width: 100%;
  min-width: 100px;
  height: 34px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
`;
