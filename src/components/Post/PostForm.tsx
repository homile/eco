import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firbaseConfig';
import { addDoc, collection } from 'firebase/firestore/lite';
import uuid from 'react-uuid';

const PostForm = () => {
  const navigate = useNavigate();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const submitHandle = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const id = uuid();
    const postsCollectionRef = collection(db, 'posts');

    const body = {
      id: id,
      title: titleRef.current?.value,
      content: contentRef.current?.value,
      create_date: new Date(),
    };

    await addDoc(postsCollectionRef, body).then(() => {
      alert('글작성이 완료되었습니다.');
      navigate('/board');
    });
  };

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  return (
    <Form>
      <label htmlFor="title">제목</label>
      <input type="text" id="title" ref={titleRef} />
      <label htmlFor="content">질문내용</label>
      <textarea id="content" ref={contentRef} />
      <BtnDiv>
        <Btn name="cancel">취소</Btn>
        <Btn name="submit" onClick={(event) => submitHandle(event)}>
          저장
        </Btn>
      </BtnDiv>
    </Form>
  );
};

export default PostForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
`;

const BtnDiv = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Btn = styled.button<{ name: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.name === 'submit' ? '#3264ff' : '#e23d3d')};
  color: #ffffff;
  width: 100%;
  min-width: 100px;
  height: 34px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  margin: 0 10px;
`;
