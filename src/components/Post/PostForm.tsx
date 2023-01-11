import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../../firbaseConfig';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore/lite';
import uuid from 'react-uuid';

const PostForm = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [contents, setContents] = useState<
    | {
        [x: string]: any;
      }[]
    | undefined
  >();

  const postsCollectionRef = collection(db, 'posts');

  const submitHandle = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const id = uuid();
    const path = pathname.split('/').at(-1);

    const body = {
      id: id,
      title: titleRef.current?.value,
      content: contentRef.current?.value,
      create_date: new Date().toLocaleString(),
    };

    if (path === 'post') {
      await setDoc(doc(db, 'posts', id), body).then(() => {
        alert('글작성이 완료되었습니다.');
        navigate('/board');
      });
    }

    // if (path !== 'post' && contents) {
    //   await setDoc(doc(db, 'posts', contents[0].id), {
    //     title: titleRef,
    //     content: contentRef,
    //   }).then(() => {
    //     alert('글작성이 완료되었습니다.');
    //     navigate('/board');
    //   });
    // }
  };

  // const updateHandle = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   event.preventDefault();
  //   const path = pathname.split('/').at(-1);
  //   const data = await getDocs(query(postsCollectionRef, where('id', '==', path)));
  //   const body = { title: titleRef, content: contentRef };

  //   await updateDoc(data.docs[0].ref, body);
  // };

  const getData = async () => {
    const path = pathname.split('/').at(-1);
    const data = await getDocs(query(postsCollectionRef, where('id', '==', path)));
    const doc = data.docs.map((doc) => ({ ...doc.data() }));

    setContents(doc);
  };

  useEffect(() => {
    titleRef.current?.focus();
    getData();
  }, []);

  return (
    <Form>
      <Label htmlFor="title">제목</Label>
      <Input
        type="text"
        id="title"
        ref={titleRef}
        // defaultValue={contents ? contents[0].title : null}
        placeholder="제목을 입력해주세요"
      />
      <Label htmlFor="content">질문내용</Label>
      <Textarea
        id="content"
        ref={contentRef}
        // defaultValue={contents ? contents[0].content : null}
        placeholder="질문을 입력해주세요"
      />
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
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 20px;
`;

const Label = styled.label`
  font-size: 17px;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px;
`;

const Textarea = styled.textarea`
  height: 100px;
  padding: 10px;
  resize: none;
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
