import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../public/logo.png";

const NavBar = () => {
  return (
    <Nav>
      <NavBox>
        <NavLeft>
          <NavLeftTextBox>STORE</NavLeftTextBox>
        </NavLeft>
        <NavRight>
          <NavRightTextBox>
            <NavRightTextStore>STORE</NavRightTextStore>
            <NavRightTextAbout>ABOUT</NavRightTextAbout>
          </NavRightTextBox>
          <NavRightLogoBox>
            <Image src={Logo} width={100} height={100} alt="Logo" />
          </NavRightLogoBox>
        </NavRight>
      </NavBox>
      <NavUnderLineBox>
        <NavUnderLine />
        <NavUnderLine2 />
      </NavUnderLineBox>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.section`
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  /* position: fixed; */
  /* background-color: white; */
  width: 100%;
`;

const NavBox = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  /* width: 50vw; */
  display: flex;
  /* background-color: blue; */
`;
const NavLeftTextBox = styled.div`
  margin-left: 20%;
  display: flex;
  align-items: flex-end;
  color: #9c27b0;
  font-size: 3rem;
  font-weight: bold;

  /* background-color: navy; */
`;
const NavRight = styled.div`
  margin: 1.3rem;
  /* width: 45vw; */
  display: flex;
  /* background-color: green; */
`;

const NavRightTextBox = styled.div`
  /* margin-left: 21%; */
  width: 70vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  /* background-color: yellow; */
`;
const NavRightTextStore = styled.div`
  color: #242121;
  font-size: 2rem;
  margin-right: 2rem;
  /* background-color: gray; */
`;
const NavRightTextAbout = styled.div`
  color: #242121;
  font-size: 2rem;
  margin-right: 2rem;
  /* background-color: blue; */
`;
const NavRightLogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: gray; */
  margin-right: 0.5rem;
`;

const NavUnderLineBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const NavUnderLine = styled.div`
  width: 47%;
  height: 0.3rem;
  /* margin-left: 0.5rem; */

  background: #9c27b0;
  border-radius: 2rem;
`;

const NavUnderLine2 = styled.div`
  width: 47%;
  height: 0.3rem;
  /* margin-right: 0.5rem; */

  background: #9c27b0;
  border-radius: 2rem;
`;
