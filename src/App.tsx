// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import {db} from './assets/fbase'
import { collection, getDocs } from "firebase/firestore";
// import ReviewRegister from "./ReviewRegister";
// import MyPage from "./MyPage";
// import  from './App.css';


export type ReviewType ={
  id: number
  title: string
  text: string
}

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

   // 시작될때 한번만 실행
   useEffect(()=>{
  	// 비동기로 데이터 받을준비
    const getUsers = async () => {
     // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    }

    getUsers();
  },[])

  // const [title, setTitle] = useState('');
  // const [text, setText] = useState('');
  // const [reviews, setReviews] = useState<ReviewType[]>([]);

  // const handleTitleChange = (title: string) => {
  //   setTitle(title)
  // };

  // const handleTextChange = (text: string) => {
  //   setText(text)
  // };

  // const handleSubmit = () => {
  //   const newReviews = reviews.concat({
  //     id: Date.now(),
  //     title: title,
  //     text: text,
  //   })

  //   setReviews(newReviews);
  // };

  // const handleRemove = (id: number) => {
  //   const newReviews = reviews.filter(review => {
  //     return review.id !== id
  //   })
  //   setReviews(newReviews)
  // }

  return (
    <>
      <MainPage />
      {/* <SignUp />
      <ReviewRegister 
      title={title} text={text} 
      onTitleChange={handleTitleChange} onTextChange={handleTextChange} 
      onSubmit={handleSubmit}
      />
      <ReviewList />
      <Review onRemove={handleRemove} /> */}
 {/* reviews={reviews} */}
    </>

  );
}

export default App;
