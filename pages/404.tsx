import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import Lottie from "react-lottie";
import error from "../public/404.json";

const NotFound = () => {
  const [countDown, setCountDown] = useState(5);

  //Lottie관련 코드
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // 5초 타이머
  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((count) => count - 1);
    }, 1000);
    if (countDown === 0) {
      Router.push("/");
    }
    return () => clearInterval(timer);
  }, [countDown]);

  return (
    <NotFoundText>
      <Lottie options={defaultOptions} width={300} height={200} />
      <br />
      죄송합니다. <br />
      <br />
      요청하신 페이지를 찾을 수 없습니다. <br />
      입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      <br />
      <br />
      {countDown}초 후 메인화면으로 이동합니다.
    </NotFoundText>
  );
};

export default NotFound;

const NotFoundText = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 100000;
  background-color: white;
  text-align: center;
  color: #353131;
  @media (max-width: 1150px) {
    font-weight: bold;
    font-size: 1rem;
  }
`;
