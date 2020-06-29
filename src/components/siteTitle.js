import React from "react";
import { animated } from "react-spring";
import styled, { keyframes } from "styled-components";

const TITLE = "Evgeny Moskalov";

const appear = keyframes`
  from {
    transform: translate(-500px);
		opacity: 1;
  }

  to {
    transform: translate(0);
		opacity: 1;
  }
`;

const HeaderTitle = styled(animated.h1)`
  top: 100px;
  left: 10px;
  font-weight: bold;
  font-size: 54px;
  position: absolute;
  top: 150px;
  left: 11px;
  margin: 0;
  opacity: 0;

  @media (max-width: 812px) {
    top: 15px;
    font-size: 35px;
  }

  display: flex;
  flex-direction: row;

  animation: ${appear} 0.5s ease-out 1s forwards;
`;

const SiteTitle = () => {
  return <HeaderTitle>{TITLE}</HeaderTitle>;
};

export default SiteTitle;
