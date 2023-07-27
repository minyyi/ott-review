// import React from 'react';
import styled from 'styled-components';
import Layout from '../component/Layout';
import ImgUp from '../component/ImgUp';
// import { useNavigate } from 'react-router-dom';
import { SetStateAction, useEffect, useState } from 'react';
import { db } from '../assets/fbase';
import { collection, 
  addDoc,
  // updateDoc,
  doc,
  getDocs, 
} from 'firebase/firestore';

// interface ReviewRegitserProps {
//   title: string,
//   text: string,
  // onSubmit: () => void,

  // onIdChange: (id:number) => void
  // onTextChange: (text:string) => void
  // onTitleChange: (title:string) => void
// props: ReviewRegitserProps}



export default function ReviewRegister() {
  // const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
  //   props.onTitleChange(event.target.value)
  // }


  // const navigate = useNavigate()
  // const clickSave = () => {
  //   navigate('/review')
  // }

  // const [newImg, setImg] = useState('');
  // const [newId, setNewId] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  // const uniqueId = useId();

  // useEffect(()=>{
  // 	// 비동기로 데이터 받을준비
  //   const getUsers = async () => {
  //    // getDocs로 컬렉션안에 데이터 가져오기
  //     const data = await addDoc(usersCollectionRef);
  //     // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
  //     setUsers(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
  //   }

  //   getUsers();
  // },[])

  const createUsers = async () =>{
    await addDoc(usersCollectionRef, { title: newTitle ,  text: newText});
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc: { data: () => any; id: number; }) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [users, usersCollectionRef]);

//   const showUsers = users.map((value)=> (<div id={uniqueId}> 
//     <h1>제목: {value.title}</h1> 
//     <h1>내용: {value.text}</h1> 
// </div>))


  // const onSubmit = async () => {
  //   await addDoc(usersCollectionRef, {id: setNewId, title: setNewTitle, text: setNewText });
  // };

  // const updateUser = async (id, age) => {
  //   const userDoc = doc(db, 'users', id);
  //   const newFields = { age: age + 1 };
  //   await updateDoc(userDoc, newFields);
  // };


  return (
    <Layout>
      <H2>리뷰적기</H2>
      <Section>
        <Div>
          <Photo>
            <ImgUp
              // onChange={(event) => {
              // setNewId(event.target.value)}}
             />
          </Photo>
        </Div>
        <Div>
          <TitleLabel>제목:</TitleLabel>
          <TileInput 
          // onSubmit={onSubmit}
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => {
          setNewTitle(event.target.value)}}
          placeholder='콘텐츠의 제목을 기록해주세요'/>
        </Div>
        
        <Div>
          <TitleLabel>내용:</TitleLabel>
          <FormText 
          required as="textarea" 
          rows={10} 
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => {
            setNewText(event.target.value)}}
          placeholder='기억에 남는 대사, 감상 등을 남겨주세요.'>
            {/* 내용내용내용줄거리 명대사 { props.text } */}
          </FormText>
        </Div> 
        <Button type='submit' onClick={createUsers} >
          저장
          {/* onClick={clickSave} */}
          {/* {showUsers} */}
        </Button>
      </Section>

    </Layout>
  );
}
 


const Section = styled.section`
  width: 800px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`

const H2 = styled.h2`
`

const Photo = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;


`

const TileInput = styled.input`
  width: 300px;
  height: 20px;
`

const TitleLabel = styled.p`
  color: black;
  font-size: 20px;
  margin-right: 10px;
`

const FormText = styled.textarea`
  width: 700px;
  resize: none;
`

const Button = styled.button`
  width: 70px;
  height: 30px;
  margin: 10px auto;
  background-color: pink;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 2px solid coral;
  }
`


        {/* <Form.Control required type="email" placeholder="제목을 입력해 주세요." /> */}
        {{/* <Form.Control required as="textarea" rows={20} /> */}}
