import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Header>
      <NavContainer>
        <ContentContainer>
          <ContentLink to="/">기본소개</ContentLink>
          <ContentLink to="/strength">더 알아보기</ContentLink>
          <ContentLink to="/board">질문해보세요</ContentLink>
        </ContentContainer>
        <AuthContainer>
          <AuthLink to="/login">로그인</AuthLink>
        </AuthContainer>
      </NavContainer>
    </Header>
  );
};

export default Nav;

const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  padding: 0 10px;
  border-bottom: 1px solid #dadfe6;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const ContentLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 10px;
  margin: 0 10px;
`;

const AuthContainer = styled.div`
  display: flex;
`;

const AuthLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3264ff;
  color: #ffffff;
  width: 80px;
  height: 34px;
  border: none;
  border-radius: 10px;
  margin: 0 10px;
`;
