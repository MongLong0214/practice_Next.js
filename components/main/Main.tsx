import React, { useEffect, useState } from "react";
import * as API from "../../api";
import Image from "next/image";
import styled from "styled-components";

import { experimentalStyled as muiStyled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await API.get("stores");
      setData(res.data);
    };
    getData();
  }, []);

  console.log("data", data);
  return (
    <>
      <BodyWrapper>
        <BodyContentWrapper>
          <BodyContentText>STORE</BodyContentText>
          <BodyContentGreed>
            {data.map((item: any, index: number) => (
              <BodyContents src={item.thumb} alt="store" key={index} />
            ))}
          </BodyContentGreed>
        </BodyContentWrapper>
      </BodyWrapper>
    </>
  );
};

export default Main;

const BodyWrapper = styled.div`
  background-color: gray;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const BodyContentWrapper = styled.div`
  /* width: 80vw; */
  background-color: blue;
`;
const BodyContentText = styled.div`
  /* width: 80vw; */
  /* background-color: blue; */
`;
const BodyContentGreed = styled.div`
  /* width: 80vw; */
  background-color: blue;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
`;

const BodyContents = styled.img`
  /* margin: 4%; */
  /* width: 25%; */
  /* background-color: blue; */
`;

const Item = muiStyled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(2),
  textAlign: "center",
}));
