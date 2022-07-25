import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Router from "next/router";

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 5000);
  }, []);

  return (
    <NotFoundText>
      죄송합니다. <br />
      <br />
      요청하신 페이지를 찾을 수 없습니다. <br />
      입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      <br />
      <br />
      잠시 후 메인화면으로 이동합니다.
    </NotFoundText>
  );
};

export default NotFound;

const NotFoundText = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  z-index: 100000;
  background-color: white;
  text-align: center;
  @media (max-width: 1150px) {
    font-size: 1rem;
  }
`;
