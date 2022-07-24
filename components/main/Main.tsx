import React, { useEffect, useState } from "react";
import * as API from "../../api";
import image from "next/image";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { foodDataState } from "../../atom";

import Modal from "../Modal";

const Main = () => {
  const [foodData, setFoodData] = useRecoilState(foodDataState);
  const [modalOpen, setModalOpen] = useState(false);
  const [eachFood, setEachFood] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    const getData = async () => {
      const res = await API.get("stores");
      setFoodData(res.data);
    };
    getData();
  }, [setFoodData]);

  console.log("FoodData", foodData);

  const handlerModal = (e) => {
    // 스크롤 맨 위로 이동
    window.scrollTo({ top: 0 });
    setModalOpen(true);

    const { id, alt } = e.target;
    setEachFood({
      name: id,
      description: alt,
    });
  };

  return (
    <>
      {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
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
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <BodyContents
                    src={item.thumb}
                    alt={item.name}
                    key={index}
                    id={item.id}
                    onClick={handlerModal}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </BodyContentBox>
        {modalOpen && (
          <Modal
            setOpenModal={setModalOpen}
            name={eachFood.name}
            description={eachFood.description}
          />
        )}
      </BodyContentWrapper>
    </>
  );
};

export default Main;

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
const BodyContentText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 4%;
  margin-left: 26.4%;
  background-color: white;
`;

const BodyContentWrapper = styled.section`
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BodyContentBox = styled.div`
  width: 50%;
  /* background-color: red; */
`;

const BodyContents = styled.img`
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  /* background-color: blue; */
`;
