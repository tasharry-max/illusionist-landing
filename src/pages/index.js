import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import headerImage from '../images/header.jpg';

const Background = styled.div`
	min-height: 100vh;
	background-image: url(${headerImage});
	background-size: cover;
`;

const HeaderTitle = styled.h1`
	position: absolute;
	top: 100px;
	left: 10px;
	color: white;
	font-weight: bold;
	font-size: 56px;
`;
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap');
	body {
		background-color: black;
		font-family: 'Montserrat', sans-serif;
	}
`;

const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Normalize />
	  <Background><HeaderTitle>Evgeny Moskalov</HeaderTitle></Background>
  </React.Fragment>
);

export default IndexPage;
