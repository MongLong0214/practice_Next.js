import React, { useEffect, useState, useRef } from "react";
import * as API from "../api";
import Logo from "../public/logo.png";
import Image from "next/image";
import styled from "styled-components";

const Carousel = () => {
  const [foodData, setFoodData] = useState([]);
  const [count, setCount] = useState(0);
  const elementLength = foodData.length;

  useEffect(() => {
    const getData = async () => {
      const res = await API.get("stores");
      setFoodData(res.data);
    };
    getData();
  }, []);

  // 캐러셀 반복
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev === elementLength - 1 ? 0 : prev + 1));
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <>
      <SwiperContainer>
        <SwiperInner>
          {foodData?.map((item, index) => (
            <SwiperItem
              url={item.url}
              src={item.image}
              alt="img"
              key={item.id}
              onClick={() => {
                item.url ? window.open(item.url) : null;
              }}
              count={count}
            />
          ))}
        </SwiperInner>
      </SwiperContainer>
    </>
  );
};

export default Carousel;

const SwiperContainer = styled.div`
  width: 300vw;
`;
const SwiperInner = styled.div`
  margin: 5rem;
  width: 20%;
  display: flex;
`;
const SwiperItem = styled.img<{ count: number; url: string }>`
  margin-right: 20rem;
  border-radius: 0.5rem;
  cursor: ${(props) => (props.url ? "pointer" : "")};
  transition: ${(props) => (props.count === 0 ? "" : "transform 0s")};
  transform: ${(props: any) => "translateX(-" + props.count * 40 + "rem)"};
  // URL이 있는 사진만 hover 효과 적용
  &:hover {
    ${(props) => (props.url ? "opacity: 0.8" : "")}
  }
`;
