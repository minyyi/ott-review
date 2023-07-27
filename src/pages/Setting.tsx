import styled from "styled-components";
import Layout from "../component/Layout";
import { useNavigate } from "react-router-dom";



export default function Setting () {
  const navigate = useNavigate()
  const clickSaveButton = () => {
    navigate('/my')
  }

  return(
    <>
    <Layout>
    <h1>로그인</h1>
      <Container>
        <ImgDiv>사진 변경</ImgDiv>
        <Label>닉네임 변경</Label>
         <Input />
         <Label>비밀번호 변경</Label>
          <Input placeholder="영어, 숫자, 기호를 포함하여 8자 이상" />
          <Label>비밀번호 확인</Label>
          <Input />

         <SaveButton onClick={clickSaveButton}>
          저장
        </SaveButton>

      </Container>
    </Layout>
    </>
  )
}


const Container = styled.div`
  width: 500px;
  height: 600px;
  margin: 20px auto;
  border: 5px solid gray 0.7;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const ImgDiv = styled.div`
  width: 100px;
  height: 50px;
  margin: 10px auto;
  border: 1px solid black;
  text-align: center;
`

const Input = styled.input`
  width: 250px;
  height: 20px;
  margin: 10px 0 20px;
`
const Label = styled.label`
  font-size: 20px;
`
const SaveButton = styled.button`
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

