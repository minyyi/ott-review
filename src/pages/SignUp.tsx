import { useNavigate } from "react-router-dom";
import Layout from "../component/Layout.tsx";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import styled from "styled-components";
import { useState } from "react";
import {auth} from '../assets/fbase.tsx'


export default function SignUp() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    console.log('눌림')
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/login')
        window.alert('회원가입 완료!')
       })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log({email,password})

  return (
    <Layout>
      <h1>회원가입</h1>
      <Container>
        <InputBox>
          <Label>이메일</Label>
          <Input type="email" placeholder="이메일을 입력해주세요." 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />

          <Label>비밀번호</Label>
          <Input type="password" placeholder="영어, 숫자, 기호를 포함하여 8자 이상"
           value={password}
           onChange={(e)=> setPassword(e.target.value)}
           />

          <Button onClick={signUp}>회원가입</Button>
        </InputBox>
      </Container>
    </Layout>
     
  );
}


const Container = styled.div`
  width: 500px;
  height: 600px;
  margin: 20px auto;
  border: 5px solid gray 0.7;

  display: flex;
  justify-content: center;
  align-items: center;

`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Input = styled.input`
  width: 250px;
  height: 20px;
  margin: 10px 0 20px;
`
const Label = styled.label`
  font-size: 20px;
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
