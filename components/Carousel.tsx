import React, { useEffect, useState, useRef } from "react";
import * as API from "../api";
import Logo from "../public/logo.png";
import Image from "next/image";
import styled from "styled-components";

const Carousel = () => {
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
    console.log("foodDatalength", foodData.length);
  }, [foodData]);

  //   const slideRef = useRef();

  const elementHeight = 120;
  const elementLength = foodData.length;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev === elementLength - 1 ? 0 : prev + 1));
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <SwiperContainer>
        <SwiperInner>
          {foodData?.map((item, index) => (
            <SwiperItem
              src={item.image}
              alt="img"
              key={item.id}
              count={count}
              onClick={() => {
                item.url ? window.open(item.url) : null;
              }}
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

  /* background-color: blue; */
`;
const SwiperInner = styled.div`
  margin: 5rem;
  width: 20%;
  display: flex;
`;

const SwiperItem = styled.img`
  margin-right: 20rem;
  width: 100%;
  border-radius: 0.5rem;
  cursor: pointer;

  transition: ${(props: any) =>
    props.count === 0 ? "" : "transform 1s ease-in-out"};
  /* props.count === props.key ? " 0.5s" : "0s"}; */
  transform: ${(props: any) => "translateX(-" + props.count * 40 + "rem)"};

  &:hover {
    opacity: 0.8;
  }
`;
