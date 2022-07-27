import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <Nav>
        <NavRightBox>
          <NavRightTextBox>
            <Link href="/">
              <NavRightTextStore>STORE</NavRightTextStore>
            </Link>
            <Link href="/about">
              <NavRightTextAbout>ABOUT</NavRightTextAbout>
            </Link>
          </NavRightTextBox>
          <NavRightLogoBox>
            <Image src={Logo} alt="logo" />
          </NavRightLogoBox>
        </NavRightBox>
      </Nav>
    </>
  );
};

export default NavBar;

const Nav = styled.section`
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 130px;
  z-index: 100000;
`;
const NavRightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2%;
  font-size: 1.5rem;
  /* background-color: yellow; */
`;
const NavRightTextBox = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 2%;
`;
const NavRightTextStore = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #353131;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 1150px) {
    margin-top: 3rem;
    font-size: 1.3rem;
    margin-right: 0.7rem;
  }
`;
const NavRightTextAbout = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2%;
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #353131;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 1150px) {
    margin-top: 3rem;
    font-size: 1.3rem;
    margin-right: 0.2rem;
  }
`;
const NavRightLogoBox = styled.div`
  width: 7rem;
  height: 7rem;
  margin-top: 0.5rem;
  @media (max-width: 1150px) {
    margin-top: 3rem;
    margin-right: 1rem;
    width: 5rem;
    height: 5rem;
  }
`;
