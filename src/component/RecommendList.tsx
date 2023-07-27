// import React from 'react';
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReviewType } from "../App";
import Review from "../pages/Review";
// import { ReviewType } from "../ReviewRegister";
// import { useState } from "react";


// export type ReviewType ={
//   id: number
//   title: string
//   text: string
// }

// interface ReviewListProps {
//   reviews: ReviewType[],
// props: ReviewListProps}



const ReviewList = () => {
  const [reviews, setReviews] = useState([
  {
    id: 0,
    img:'',
    title: 'title',
    desc: 'asdfasd'
  },
  {
    id: 1,
    img:'',
    title: 'title',
    desc: 'asdfasd'
  },
  {
    id: 2,
    img:'',
    title: 'title',
    desc: 'asdfasd'
  },
  {
    id: 3,
    img:'',
    title: 'title',
    desc: 'asdfasd'
  },
  {
    id: 4,
    img:'',
    title: 'title',
    desc: 'asdfasd'
  },
  {
    id: 5,
    img:'',
    title: 'title',
    desc: 'asdfasd'
  },]

  
  );
  const navigate = useNavigate()
  const clickCard = () => {
    navigate('/review')
  }
    


  return (
    <Wrapper>
            {reviews.map((value, idx)=>{
              return(
                <Card>
                <CardImg onClick={clickCard}>
        
                  {/* <Photo> */}
        
                    {/* <Link to="review"></Link>    */}
                  {/* </Photo> */}
                </CardImg>
                <TitleDiv>
                    <TitleSpan>
                    </TitleSpan>
                </TitleDiv>
        
              </Card>
        
              )
            })}


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
