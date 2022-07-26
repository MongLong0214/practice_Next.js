import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { foodDataState } from "../atom";
import Image from "next/image";

import styled, { keyframes } from "styled-components";
import clear from "../public/clear.png";
const Modal = ({ setOpenModal, id }: any) => {
  const FoodData = useRecoilValue(foodDataState);
  // 모달 팝업 시 스크롤 맨 위로 올리고 스크롤 이동 방지
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

  // description에서 lastOrder만 골라내기
  const lastOrderIdx: Number = FoodData[id].description.indexOf("LAST");
  const lastOrder: number | string =
    FoodData[id].description.substr(lastOrderIdx);
  const realDes: string = FoodData[id].description.replace(lastOrder, "");

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalCloseBtn
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <Image src={clear} width={25} height={20} alt="Close" />
        </ModalCloseBtn>

        <ModalContent>
          <ModalContainerLeft>
            <ModalContainerLeftImg
              url={FoodData[id]?.url}
              onClick={() => {
                FoodData[id]?.url ? window.open(FoodData[id]?.url) : null;
              }}
              src={FoodData[id].image}
              alt="Logo"
            />
          </ModalContainerLeft>
          <ModalContainerRight>
            <ModalContainerRightBox>
              <ModalContainerRightName>
                {FoodData[id].name}
              </ModalContainerRightName>
              <ModalContainerDes>{realDes}</ModalContainerDes>
              <ModalContainerLastOrder>{lastOrder}</ModalContainerLastOrder>
              <ModalContainerUrl
                onClick={() => {
                  window.open(FoodData[id]?.url);
                }}
              >
                {FoodData[id]?.url}
              </ModalContainerUrl>
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
  top: 0;
  left: 0;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 75vh;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 25px;
  animation: ${fadeInAnimation} 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  @media (max-width: 1150px) {
    width: 100%;
    min-height: -webkit-fill-available;
  }
`;
const ModalCloseBtn = styled.div`
  width: 100%;
  height: 30px;
  /* background-color: red; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
`;
const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 1150px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* background-color: red; */
`;
const ModalContainerLeft = styled.div`
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px) {
    margin-top: -7rem;
    width: 90vw;
  }
  /* background-color: gray; */
`;

const ModalContainerLeftImg = styled.img<{ url: any }>`
  border-radius: 1rem;
  width: 20rem;
  height: 20rem;
  // URL이 있는 사진만 효과 적용
  cursor: ${(props) => (props.url ? "pointer" : "")};
  &:hover {
    ${(props) => (props.url ? "opacity: 0.8" : "")}
  }
  @media (max-width: 1150px) {
    width: 20rem;
    height: 20rem;
    margin-top: 10rem;
  }
`;
const ModalContainerRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
`;
const ModalContainerRightBox = styled.div`
  padding: 2rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  /* background-color: yellow; */
  border-radius: 1rem;
  margin-right: 10%;
  @media (max-width: 1150px) {
    margin-left: 8%;
    margin-bottom: 5rem;
    width: 20rem;
  }
`;
const ModalContainerRightName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #353131;
  @media (max-width: 1150px) {
    font-size: 1.3rem;
    margin-top: -1rem;
  }
  /* background-color: blue; */
`;
const ModalContainerDes = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  color: #353131;
  @media (max-width: 1150px) {
    font-size: 0.7rem;
    margin-top: 1rem;
  }
  /* background-color: gray; */
`;

const ModalContainerLastOrder = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #353131;
  @media (max-width: 1150px) {
    font-size: 0.5rem;
    margin-top: 1rem;
  }
  /* background-color: gray; */
`;
const ModalContainerUrl = styled.div`
  margin-top: 1rem;
  cursor: pointer;
  font-weight: bold;
  color: #353131;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 1150px) {
    font-size: 0.7rem;
  }
  /* background-color: red; */
`;
