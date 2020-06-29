import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 160px;
  @media (max-width: 812px) {
    padding: 0 20px;
  }
`;

const About = styled.div`
  color: white;
  p:first-child {
    text-transform: uppercase;
  }
  line-height: 17px;
`;
const DesignedBy = styled.div`
  color: white;
  text-align: right;
  text-transform: uppercase;
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <Container>
      <About>
        <p>Evgeny moskalov </p>
        <p>Kyiv, Ukraine </p>
        <p>evgenymoskalov@gmail.com</p>
      </About>
      <DesignedBy>
        <p>designed by @ksypolo</p>
        <p>developed by @lewkan @natali </p>
        <p>© 2020</p>
      </DesignedBy>
    </Container>
  );
};

export default Footer;
