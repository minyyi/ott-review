// import React from 'react';
import { styled } from 'styled-components';
// import ReviewList from '../component/ReviewList';
import Layout from '../component/Layout';
import { AiOutlinePlusCircle, AiOutlineSetting } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import ReviewList from '../component/ReviewList';
import Counter from '../component/Count';
// import Count from '../component/Count';
  

interface ProfileProps {
  name: string,
  // img: ImageData,
}
 
export default function Profile(props: ProfileProps){
  const navigate = useNavigate()
  const clickIcon = () => {
    navigate('/reviewre')
  }
  const clickSetting = () => {
    navigate('/setting')
  }

    return(
      <Layout>
        <ProfileDiv>
          <Info>
            <ImgDiv>사진</ImgDiv>
            <NameDiv>
                <BoldName>{ props.name }</BoldName>
            </NameDiv>

          </Info>
          <Icon>
              <AiOutlineSetting onClick={clickSetting} size="30" margin="1" />
              <AiOutlinePlusCircle onClick={clickIcon} size="30" margin="10" />
          </Icon>
        </ProfileDiv>
        <HR/>
        <MyList>
          <Counter />

          <ReviewList />
          {/* <Count count={reviews.length} />
          <ReviewList reviews={reviews}/> */}
        </MyList>
      </Layout>  
    )
}

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const ImgDiv = styled.div `
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  border-radius: 50%;
  margin: 20px 0 5px;
  
  display: flex;
  justify-content: center;
  align-items: center;

`


const NameDiv = styled.div`
  margin: 10px auto 20px;

`

const BoldName = styled.b`
  font-size: 20px;
`

const Icon = styled.div`
  margin-left: 30px;
  width: 100px;
  display: flex;
  justify-content: space-around;
`

const MyList = styled.article`
  width: 1000px;
  margin: 0 auto;
`

const HR = styled.hr`
  color: lightgray;
  width: 1000px;
`
