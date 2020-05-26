import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import headerImage from '../images/header.jpg';
import { ReactComponent as TikTokIcon } from '../images/Tiktok-icon.svg';
import { ReactComponent as CircleIcon } from '../images/Circle-icon.svg';
import { ReactComponent as YoutubeIcon } from '../images/Youtube-icon.svg';
import { ReactComponent as FacebookIcon } from '../images/Facebook-icon.svg';
import { ReactComponent as TelegramIcon } from '../images/Telegram-icon.svg';
import { ReactComponent as WhatsappIcon } from '../images/Whatsapp-icon.svg';
import { ReactComponent as MailIcon } from '../images/Mail-icon.svg';

const Background = styled.div`
	min-height: 100vh;
	background-image: url(${headerImage});
	background-size: cover;
`;

const HeaderTitle = styled.h1`
	position: absolute;
	top: 100px;
	left: 10px;
	font-weight: bold;
	font-size: 56px;
`;
const HeaderDescription = styled.div`
	position: absolute;
	left: 157px;
	bottom: 0px;
	height: 190px;
	max-width: 180px;
	padding-right: 10px;
	font-size: 18px;
	font-style: normal;
	font-weight: normal;
	text-align: right;
	border-right: 1px solid #FFFFFF;
`;

const HeaderHashtag = styled.div`
	position: absolute;
	font-style: italic;
	top: 100px;
	right: 10px;
	opacity: 0.5;
`;

const HeaderIcons = styled.ul`
	height: 100px;
	width: 30px;
	position: sticky;
	top: 210px;
	padding-left: 15px;
`;

const GlobalStyle = createGlobalStyle`
	body {
		background-color: black;
		font-family: 'Montserrat', sans-serif;
		color: white;
	}
`;

const Next = styled.div`
	height: 10000px;
`;

const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Normalize />
		<Background>
		<HeaderIcons>
			<a href="">
				<TikTokIcon />	
			</a>
			<a href="">
				<CircleIcon />
			</a>
			<a href="">
				<YoutubeIcon />	
			</a>
			<a href="">
				<FacebookIcon />
			</a>
			<a href="">
				<TelegramIcon />
			</a>
			<a href="">
				<WhatsappIcon />	
			</a>
			<a href="">
				<MailIcon />
			</a>
		</HeaderIcons>
		  <HeaderTitle>Evgeny Moskalov</HeaderTitle>
	  		<HeaderDescription>Sleight of hand magician / Playing cards geek
			  	<HeaderHashtag>#useyourfingers</HeaderHashtag>
			  </HeaderDescription>
	  </Background>
		<Next />
  </React.Fragment>
);

export default IndexPage;
