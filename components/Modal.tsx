import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { foodDataState } from "../atom";
import Image from "next/image";

import styled, { keyframes } from "styled-components";
import clear from "../public/clear.png";
const Modal = ({ setOpenModal, props }: any) => {
  const FoodData = useRecoilValue(foodDataState);
  // 모달 팝업 시 스크롤 이동 방지
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  useEffect(() => {
    console.log("FoodData", FoodData);
    console.log("FoodData", FoodData[0].image);
    console.log("FoodData.desc", FoodData[2].description);
  });

  return (
    <ModalBackground {...props}>
      <ModalContainer>
        <div className="titleCloseBtn">
          <ModalCloseBtn
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <Image src={clear} width={25} height={20} alt="Close" />
          </ModalCloseBtn>
        </div>
        <ModalContent>
          <ModalContainerLeft>
            <ModalContainerLeftImg src={FoodData[2].image} alt="Logo" />
          </ModalContainerLeft>
          <ModalContainerRight>
            <ModalContainerRightBox>
              <ModalContainerRightName>
                {FoodData[2].name}
              </ModalContainerRightName>
              <ModalContainerDes>{FoodData[2].description}</ModalContainerDes>

              <ModalContainerUrl>{FoodData[2]?.url}</ModalContainerUrl>
            </ModalContainerRightBox>
          </ModalContainerRight>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 230%; */
  z-index: 100000;
`;

export const fadeInAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 0.9
  }
`;

const ModalContainer = styled.div`
  width: 80%;
  height: 80%;
  margin-bottom: 26vh;

  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 25px;
  animation: ${fadeInAnimation} 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
`;

const ModalCloseBtn = styled.div`
  width: 100%;
  height: 30px;
  /* background-color: red; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
`;
const ModalContainerLeft = styled.div`
  margin-top: 2rem;
  width: 50%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-right: 1px solid gray; */

  /* background-color: gray; */
`;

const ModalContainerLeftImg = styled.img`
  border-radius: 1rem;
  width: 20rem;
  height: 20rem;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const ModalContainerRight = styled.div`
  margin-top: 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: yellow; */
`;
const ModalContainerRightBox = styled.div`
  padding: 4rem;

  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  /* background-color: yellow; */
  border-radius: 1rem;
  margin-right: 10%;
`;

const ModalContainerRightName = styled.div`
  font-size: 2rem;
  font-weight: bold;

  /* background-color: blue; */
`;
const ModalContainerDes = styled.div`
  margin-top: 2rem;

  /* background-color: gray; */
`;
const ModalContainerUrl = styled.div`
  margin-top: 2rem;

  /* background-color: red; */
`;
