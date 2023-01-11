import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../../firbaseConfig';

const BoardList = () => {
  const navigate = useNavigate();

  const [postsData, setPostsData] = useState<
    {
      [x: string]: any;
    }[]
  >([]);

  const getData = async () => {
    const postsCollectionRef = collection(db, 'posts');
    const data = await getDocs(postsCollectionRef);

    setPostsData(data.docs.map((doc) => ({ ...doc.data() })));
  };

  const updateLink = (id: string) => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <div>
        <ul>
          {postsData.length !== 0
            ? postsData?.map((doc) => {
                return (
                  <DocItem key={doc.id} onClick={() => updateLink(doc.id)}>
                    <ContentTitle>제목: {doc.title}</ContentTitle>
                    <p>질문내용: {doc.content}</p>
                  </DocItem>
                );
              })
            : null}
        </ul>
      </div>
    </Container>
  );
};

export default BoardList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DocItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  padding: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const ContentTitle = styled.h3`
  margin-bottom: 6px;
`;
