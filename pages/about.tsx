import React, { useEffect, useState } from "react";
import Logo from "../public/logo.png";
import Image from "next/image";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { foodDataState } from "../atom";

const About = () => {
  const FoodData = useRecoilValue(foodDataState);

  return (
    <>
      <BodyTopWrapper>
        <BodyTopText>About</BodyTopText>
        <BodyTopUnderLineBox>
          <BodyTopUnderLine></BodyTopUnderLine>
          <BodyTopUnderLine2></BodyTopUnderLine2>
        </BodyTopUnderLineBox>
      </BodyTopWrapper>
      <BodyContentText>About</BodyContentText>
      <BodyContentWrapper>
        <BodyContentBoxLeft>
          <BodyContentBoxLeftImg>
            <Image src={Logo} width={200} height={200} alt="Logo" />
          </BodyContentBoxLeftImg>
          <BodyContentBoxLeftCopyBox>
            <BodyContentBoxLeftMainCopy>
              AWSOME
              <br />
              FOOD STORE
            </BodyContentBoxLeftMainCopy>
            <BodyContentBoxLeftSubCopy>
              여러분이 생각하는 세상 모든 종류의 <br /> 음식이 모여있습니다.
              <br />
              Enjoy Your Meal !
            </BodyContentBoxLeftSubCopy>
          </BodyContentBoxLeftCopyBox>
        </BodyContentBoxLeft>
        <BodyContentBoxRight>
          <BodyContentBoxRightImg></BodyContentBoxRightImg>
        </BodyContentBoxRight>
      </BodyContentWrapper>
    </>
  );
};

export default About;

const BodyTopWrapper = styled.section`
  background-color: blue;
  margin-top: 130px;
`;

const BodyTopText = styled.div`
  font-size: 3rem;
  margin-left: 2%;
  background-color: red;
`;

const BodyTopUnderLineBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: black;
`;

const BodyTopUnderLine = styled.div`
  width: 47%;
  height: 0.3rem;
  /* margin-left: 0.5rem; */

  background: #9c27b0;
  border-radius: 2rem;
`;
const BodyTopUnderLine2 = styled.div`
  width: 47%;
  height: 0.3rem;
  /* margin-right: 0.5rem; */

  background: #9c27b0;
  border-radius: 2rem;
`;
const BodyContentText = styled.div`
  font-size: 3rem;
  margin-left: 10%;
  margin-top: 130px;
  background-color: white;
`;

const BodyContentWrapper = styled.section`
  background-color: yellow;
  display: flex;
  justify-content: center;
  /* flex-direction: row; */
  /* justify-content: space-around; */
`;

const BodyContentBoxLeft = styled.div`
  width: 40%;
  /* height: 350px; */
  background-color: pink;
  margin-bottom: 130px;
`;

const BodyContentBoxLeftImg = styled.div`
  /* margin: 4%; */
  background-color: yellow;
`;

const BodyContentBoxLeftCopyBox = styled.div`
  background-color: pink;
`;

const BodyContentBoxLeftMainCopy = styled.div`
  font-size: 3.3rem;
  font-weight: bold;
  background-color: white;
`;
const BodyContentBoxLeftSubCopy = styled.div`
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  background-color: red;
`;

const BodyContentBoxRight = styled.div`
  width: 40%;
  /* height: 350px; */

  background-color: blue;
`;
const BodyContentBoxRightImg = styled.div`
  width: 40%;
  /* height: 350px; */

  background-color: blue;
`;

const BodyContents = styled.img`
  margin: 4%;
  width: 25%;
  background-color: blue;
`;
