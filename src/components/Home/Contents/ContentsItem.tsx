import React from 'react';
import styled from 'styled-components';
import { HomeContent1, HomeContent2 } from '../../../assets/Home/index';

const ContentsList = [
  { title: 'Github 1일 1커밋', imgUrl: HomeContent1 },
  { title: '블로그 작성(TIL & 기술)', imgUrl: HomeContent2 },
];

const ContentsItem = () => {
  return (
    <>
      {ContentsList.map((el) => {
        return (
          <Li key={el.title}>
            <Title>{el.title}</Title>
            <div>
              <img src={el.imgUrl} />
            </div>
          </Li>
        );
      })}
    </>
  );
};

export default ContentsItem;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;
`;

const Title = styled.span`
  margin-bottom: 20px;
  text-align: left;
`;
