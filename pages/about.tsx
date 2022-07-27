import React, { useEffect, useState } from "react";
import * as API from "../api";
import Logo from "../public/logo.png";
import Image from "next/image";
import styled from "styled-components";
import Carousel from "../components/Carousel";

const About = () => {
  return (
    <>
      <BodyTopWrapper>
        <BodyTopText>ABOUT</BodyTopText>
        <BodyTopUnderLineBox>
          <BodyTopUnderLine></BodyTopUnderLine>
          <BodyTopUnderLine2></BodyTopUnderLine2>
        </BodyTopUnderLineBox>
      </BodyTopWrapper>

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
              여러분이 상상하는 세상 모든 종류의 <br /> 음식들이 모여있습니다.
              <br />
              Enjoy Your Meal !
            </BodyContentBoxLeftSubCopy>
          </BodyContentBoxLeftCopyBox>
        </BodyContentBoxLeft>
        <BodyContentBoxRight>
          <Carousel />
        </BodyContentBoxRight>
      </BodyContentWrapper>
    </>
  );
};

export default About;

const BodyTopWrapper = styled.section`
  /* background-color: blue; */
  margin-top: 130px;
`;
const BodyTopText = styled.div`
  font-size: 2rem;
  margin-left: 2%;
  color: #353131;
  /* background-color: red; */
  @media (max-width: 1150px) {
    margin-top: 4rem;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;
const BodyTopUnderLineBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* background-color: black; */
`;
const BodyTopUnderLine = styled.div`
  width: 47%;
  height: 0.3rem;
  background: #9c27b0;
  border-radius: 2rem;
`;
const BodyTopUnderLine2 = styled.div`
  width: 47%;
  height: 0.3rem;
  background: #9c27b0;
  border-radius: 2rem;
`;
const BodyContentWrapper = styled.section`
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  @media (max-width: 1150px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const BodyContentBoxLeft = styled.div`
  width: 35rem;
  /* background-color: pink; */
  margin-bottom: 95px;
  @media (max-width: 1150px) {
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: -4px;
    margin-right: 2rem;
  }
`;
const BodyContentBoxLeftImg = styled.div`
  margin-top: 5%;
  margin-left: 1.4rem;
  /* background-color: yellow; */
`;
const BodyContentBoxLeftCopyBox = styled.div`
  /* background-color: pink; */
  margin-left: 1.4rem;
`;
const BodyContentBoxLeftMainCopy = styled.div`
  font-size: 3.3rem;
  font-weight: bold;
  color: #353131;
  @media (max-width: 1150px) {
    font-size: 2rem;
  }
  /* background-color: white; */
`;
const BodyContentBoxLeftSubCopy = styled.div`
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: #353131;
  @media (max-width: 1150px) {
    font-size: 1rem;
  }
  /* background-color: red; */
`;
const BodyContentBoxRight = styled.div`
  width: 30rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  overflow: hidden;
  @media (max-width: 1150px) {
    width: 25rem;
    margin-right: 5rem;
  }
`;
