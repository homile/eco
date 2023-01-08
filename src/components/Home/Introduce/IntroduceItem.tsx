import React from 'react';
import styled from 'styled-components';

const MyDesc = [
  '컴퓨터공학에서 다양한 전공 과목을 수강 하던 중 웹 개발을 접할 기회가 생겼고,\n화면을 구성하고 사용자가 이용하는 것을 보며 사용자 경험을 우선시하는 프론트엔드 개발자로 나아가기 위해 노력하고 있습니다.',
  '프론트엔드 부트캠프에서의 다양한 프로젝트 경험으로 협업시 원활한 커뮤니케이션을 할 수 있습니다.',
  '개발자로서의 역량을 성장시키기 위해 TypeScript, Next.js, React-Query를 학습하여 프로젝트를 진행하고 있습니다.',
  '새로운 지식을 쌓는 것을 좋아하여 학습한 내용을 직접 적용하고 Github와 블로그에 작성하고 있습니다.',
];

const IntroduceItem = () => {
  return (
    <>
      {MyDesc.map((el) => {
        return (
          <Li key={el}>
            <pre>{el}</pre>
          </Li>
        );
      })}
    </>
  );
};

export default IntroduceItem;

const Li = styled.li`
  line-height: 150%;
  padding: 10px 0;
`;
