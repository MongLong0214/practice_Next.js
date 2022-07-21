import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { experimentalStyled as muiStyled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Main = () => {
  return (
    <>
      <BodyWrapper>
        <BodyContentWrapper>
          <BodyContentText>STORE</BodyContentText>
          <BodyContentGreed>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item>1</Item>
                </Grid>
              </Grid>
            </Box>
          </BodyContentGreed>
        </BodyContentWrapper>
      </BodyWrapper>
    </>
  );
};

export default Main;

const BodyWrapper = styled.div`
  /* background-color: gray; */
  width: auto;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BodyContentWrapper = styled.div`
  width: 80vw;
  background-color: blue;
`;
const BodyContentText = styled.div`
  width: 80vw;
  background-color: blue;
`;
const BodyContentGreed = styled.div`
  width: 80vw;
  background-color: blue;
`;

const Item = muiStyled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
