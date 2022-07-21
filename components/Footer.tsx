import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../public/logo.png";

const Footer = () => {
  return (
    <FootContainer>
      <FooterLine />
      <FooterBox>
        <Image src={Logo} width={110} height={110} alt="Logo" />
      </FooterBox>
      <FooterText>
        {" "}
        &copy;{new Date().getFullYear()} SeoulMate | All rights reserved | Terms
        Of Service | Privacy
      </FooterText>
    </FootContainer>
  );
};

export default Footer;

const FootContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background-color: red; */
`;

const FooterLine = styled.div`
  width: 98%;
  height: 0.3rem;
  background: #cdcfd3;
  border-radius: 35px;
`;
const FooterBox = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const FooterText = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: #353131;
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
`;
