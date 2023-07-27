import styled from 'styled-components';
import Layout from '../component/Layout';
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useId, useState } from 'react';
// import { db } from '../assets/fbase';
// import {
//   collection,
//   getDocs,
//   // addDoc,
//   // updateDoc,
//   // deleteDoc,
//   // doc,
// } from 'firebase/firestore';



// interface ReviewListProps {
//   reviews: ReviewType[],
// }


// interface ReviewProps {
//   id: number
//   title: string
//   text: string
//   onRemove: (id: number) => void
// props: ReviewProps}

export default function Review() {
  // const [reviews, setReviews] = useState([]);
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, 'users');
  // const uniqueId = useId();
  // console.log(uniqueId)

  // useEffect(() => {
  //   const getUsers = async () => {
  //     // getDocs로 컬렉션안에 데이터 가져오기
  //      const data = await getDocs(usersCollectionRef);
  //      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
  //      setUsers(data.docs.map((doc)=>({ ...doc.data(), id: doc?.id})))
  //    }
 
  //    getUsers();
  //  },[])

  // const [title, setTitle] = useState('');
  // const [text, setText] = useState('');

  // const hadleTitleChange = (title:string) => {
  //   setTitle(title)
  // }
  // const hadleTextChange = (text:string) => {
  //   setText(text)
  // }

  // const handleSubmit = () => {
  //   console.log();
  // }
  
  // const navigate = useNavigate()

  //alert 정말로 삭제하시겠습니까?
  
  return (
    <Layout>
      <Section>
      {/* {const showUsers = users.map((value)=> (
//    <div key={uniqueId}> 
//     <h1>Name: {value.name}</h1> 
//     <h1>Age: {value.age}</h1> 
// </div> */}

      {/* const Post = ({ postObj }) => {
          return ( */}
        {/* {reviews.map((value, idx)=>{
          return( */}
              <Top>
                <Photo >
                <Img>
                {/* {props.img} */}
                </Img> 
                </Photo>
                {/* <ButtonDiv>
                  <Button onClick={clickEdditButton}>
                    수정
                  </Button> 
                </ButtonDiv> */}
              </Top>

              <Content>
                <TileDiv>
                  <Title >
                    {/* asdfaasdfasdfasdfsgd */}
                    {/* { props.reviews.map((review) => {
                    return <ReviewRegister key={review.id} title={review.title}/>
                  }) } */}
                  {/* {props.title} */}
                    </Title>
                </TileDiv>
                <TextDiv>
                  <Text >
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos amet repellendus eum vero. 
                    Nobis dolores animi labore nulla beatae, aliquid, neque tempora dolorem sapiente accusamus, magni expedita rerum ipsa? */}
                    {/* { props.text } */}
                  </Text>
                </TextDiv>
                {/* ))} */}
              </Content>
          {/* )
            } */}
            </Section>
    </Layout>
  );
}


const Section = styled.section`
  max-width: 700px;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Top = styled.div`
  display: flex;
  justify-content: space-around
`

const Photo = styled.div`
  border: 1px solid black;
  width: 180px;
  height: 250px;

`
const Img = styled.img`
  
`

/* const ButtonDiv = styled.div`
  width: 200px;
  height: 200px;

  display: flex;
  align-items: flex-end;
`

const Button = styled.button`
  width: 70px;
  height: 30px;
  margin: 10px;

  border-radius: 4px;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 3px solid skyblue;
  }
` */

const Content = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TileDiv = styled.div`
  max-width: 400px;

`

const Title = styled.p`
  color: black;
  font-size: 24px;
  border: 1px solid black;

`

const TextDiv = styled.div`
  max-width: 700px;
  font-size: 20px;
  border: 1px solid black;

`

const Text = styled.p`
  font-size: 16px;
`


 
