import React, { useEffect, useState } from "react";
import * as API from "../../api";
import image from "next/image";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { foodDataState } from "../../atom";
import Lottie from "react-lottie";
import loading from "../../public/loading.json";

import Modal from "../Modal";

const Main = () => {
  const [foodData, setFoodData] = useRecoilState(foodDataState);
  const [modalOpen, setModalOpen] = useState(false);
  const [eachFood, setEachFood] = useState({
    id: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  //Lottie관련 코드
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //데이터 GET
  useEffect(() => {
    const getData = async () => {
      const res = await API.get("stores");
      setFoodData(res.data);
      setIsLoading(false);
    };
    getData();
  }, [setFoodData]);

  const handlerModal = (e) => {
    // 스크롤 맨 위로 이동
    window.scrollTo({ top: 0 });
    setModalOpen(true);

    setEachFood({
      id: e.target.id - 1,
    });
  };

  return (
    <>
      {isLoading && (
        <div style={{ marginTop: "30vh", marginBottom: "30vh" }}>
          <Lottie options={defaultOptions} height={150} width={150} />
        </div>
      )}
      {!isLoading && (
        <>
          <BodyTopWrapper>
            <BodyTopText>STORE</BodyTopText>
            <BodyTopUnderLineBox>
              <BodyTopUnderLine></BodyTopUnderLine>
              <BodyTopUnderLine2></BodyTopUnderLine2>
            </BodyTopUnderLineBox>
          </BodyTopWrapper>
          <BodyContentText>STORE</BodyContentText>
          <BodyContentWrapper>
            <BodyContentBox>
              <Container sx={{ marginBottom: 10, marginTop: 5 }}>
                <Grid container spacing={4}>
                  {foodData.map((item, index) => (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={3}
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BodyContents
                        key={item.name}
                        src={item.thumb}
                        alt={item.name}
                        id={item.id}
                        onClick={handlerModal}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </BodyContentBox>
            {modalOpen && (
              <Modal setOpenModal={setModalOpen} id={eachFood.id} />
            )}
          </BodyContentWrapper>
        </>
      )}
    </>
  );
};

export default Main;

const BodyTopWrapper = styled.section`
  /* background-color: blue; */
  margin-top: 130px;
`;

const BodyTopText = styled.div`
  font-size: 2rem;
  margin-left: 2%;
  color: #353131;
  @media (max-width: 1150px) {
    margin-top: 4rem;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
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
  background: #9c27b0;
  border-radius: 2rem;
`;
const BodyTopUnderLine2 = styled.div`
  width: 47%;
  height: 0.3rem;
  background: #9c27b0;
  border-radius: 2rem;
`;
const BodyContentText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #353131;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  /* background-color: gray; */
  @media (max-width: 1150px) {
    margin-top: 2rem;
    font-size: 2rem;
  }
`;
const BodyContentWrapper = styled.section`
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
`;
const BodyContentBox = styled.div`
  width: 50%;
  /* background-color: red; */
`;
const BodyContents = styled.img`
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 1150px) {
    width: 100;
  }
  /* background-color: blue; */
`;
