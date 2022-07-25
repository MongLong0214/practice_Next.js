import React, { useEffect, useState } from "react";
import * as API from "../api";
import Logo from "../public/logo.png";
import Image from "next/image";
import styled from "styled-components";
import Carousel from "../components/Carousel";

const About = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await API.get("stores");
      setFoodData(res.data);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log("foodData", foodData);
  }, []);

  return (
    <>
      <BodyTopWrapper>
        <BodyTopText>About</BodyTopText>
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
              여러분이 생각하는 세상 모든 종류의 <br /> 음식이 모여있습니다.
              <br />
              Enjoy Your Meal !
            </BodyContentBoxLeftSubCopy>
          </BodyContentBoxLeftCopyBox>
        </BodyContentBoxLeft>
        <BodyContentBoxRight>
          {/* {foodData.map((item, index) => (
            <img src={item.image} alt="img" key="slides" />
          ))} */}
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
  font-size: 3rem;
  margin-left: 2%;
  /* background-color: red; */
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

const BodyContentWrapper = styled.section`
  /* width: 100%; */
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  margin-top: 4%;
  /* flex-direction: row; */
  /* justify-content: space-around; */
`;

const BodyContentBoxLeft = styled.div`
  width: 35rem;
  /* height: 350px; */
  /* background-color: pink; */
  margin-bottom: 130px;
`;

const BodyContentBoxLeftImg = styled.div`
  /* margin: 4%; */
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
  /* background-color: white; */
`;
const BodyContentBoxLeftSubCopy = styled.div`
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  /* background-color: red; */
`;

const BodyContentBoxRight = styled.div`
  width: 30rem;
  /* height: 350px; */
  /* background-color: pink; */
  margin-bottom: 130px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* height: 350px; */

  overflow: hidden;

  /* background-color: blue; */
`;
