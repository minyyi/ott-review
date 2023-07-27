// import React from 'react';
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { ReviewType } from "../App";
// import Review from "../pages/Review";
// import { db } from '../assets/fbase';
// import {
//   collection,
//   // getDocs,
//   addDoc,
//   // updateDoc,
//   deleteDoc,
//   doc,
// } from 'firebase/firestore';

// import { ReviewType } from "../ReviewRegister";


// interface ReviewProps {
//   id: number
//   title: string
//   text: string
// props: ReviewProps}

// interface ReviewListProps {
//   reviews: ReviewType[],
// props: ReviewListProps}



const ReviewList = () => {
  // const [reviews, setReviews] = useState([]);
  // const [list, setList] = useState([{
  // }])

  
  const navigate = useNavigate()
  const clickCard = () => {
    navigate('/review')
  }

  //   useEffect(()=>{
  // 	// 비동기로 데이터 받을준비
  //   const getUsers = async () => {
  //    // getDocs로 컬렉션안에 데이터 가져오기
  //     const data = await addDoc(usersCollectionRef);
  //     // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
  //     setUsers(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
  //   }

  //   getUsers();
  // },[])


  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUser(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
  //   };

  //   getUsers();
  // }, [user]);

    
  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, 'users', id);
  //   await deleteDoc(userDoc);
  // };



  return (
    <Wrapper>
            {/* {reviews.map((value, idx)=>{
              return( */}
                <Card id="doc.id" >
                <CardImg onClick={clickCard}>
                   
                  {/* <Photo> */}
        
                    {/* <Link to="review"></Link>    */}
                  {/* </Photo> */}
                </CardImg>
                <TitleDiv>
                    <TitleSpan>
                      {/* {doc.title} */}
                    </TitleSpan>
                    <Button 
                      // onClick={() => {
                      // deleteUser(user.id);
                      // window.alert('삭제하시겠습니까?')
                    // }}
                    >
                      삭제
                    </Button>

                </TitleDiv>
        
              </Card>
        
              {/* )
            })} */}


    </Wrapper>
  
  )
};
 
export default ReviewList;


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 100px;
  row-gap: 50px;
`

const Card = styled.div`
  width: 200px;
  height: 300px;
  margin: 0;

  display: flex;
  flex-direction: column;

`

const CardImg = styled.div`
  width: 180px;
  height: 250px;
  border: 3px solid lightblue;
  border-radius: 6px;
  flex-shrink: 0;

  display: flex;
  align-items: center;

`

// const Photo = styled.img`
  
// `

const TitleDiv = styled.div`
  width: 180px;
  padding: 0 11px;

  display: flex;
  align-items: center;
`
const TitleSpan = styled.span`
  font-size: 14px;

`

export const Button = styled.button`
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


function async(id: number) {
  throw new Error("Function not implemented.");
}

function uniqueId() {
  throw new Error("Function not implemented.");
}

