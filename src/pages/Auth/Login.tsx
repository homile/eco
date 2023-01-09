import React from 'react';
import { auth } from '../../firbaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import styled from 'styled-components';
import googleLogo from '../../assets/googleLogo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function GoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        alert('구글 로그인에 성공했습니다.');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <GoogleLoginBtn onClick={GoogleLogin}>
        <Logo src={googleLogo} />
        구글 로그인
      </GoogleLoginBtn>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const GoogleLoginBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 410px;
  height: 64px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

const Logo = styled.img`
  position: absolute;
  left: 20px;
`;
