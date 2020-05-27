import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import headerImage from "../images/header.jpg";
import { ReactComponent as TikTokIcon } from "../images/Tiktok-icon.svg";
import { ReactComponent as InstagramIcon } from "../images/Instagram-icon.svg";
import { ReactComponent as YoutubeIcon } from "../images/Youtube-icon.svg";
import { ReactComponent as FacebookIcon } from "../images/Facebook-icon.svg";
import { ReactComponent as TelegramIcon } from "../images/Telegram-icon.svg";
import { ReactComponent as WhatsappIcon } from "../images/Whatsapp-icon.svg";
import { ReactComponent as MailIcon } from "../images/Mail-icon.svg";
import About from "../components/about";
import Airbnb from "../components/airbnb";
import Instagram from "../components/instagram";
import { graphql } from "gatsby";

const Background = styled.div`
  min-height: 100vh;
  height: 1px;
  background-image: url(${headerImage});
  background-size: cover;
`;

const HeaderContainer = styled.div`
  display: flex;
  max-width: 50%;
  min-width: 225px;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  position: absolute;
  top: 100px;
  left: 10px;
  font-weight: bold;
  font-size: 56px;
`;
const HeaderDescription = styled.div`
  justify-content: center;
  height: 190px;
  width: 180px;
  padding-right: 10px;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  text-align: right;
  border-right: 1px solid #ffffff;
`;

const HeaderHashtag = styled.div`
  font-style: italic;
  padding-top: 20px;
  right: 10px;
  opacity: 0.5;
`;

const HeaderIcons = styled.ul`
  height: 100px;
  width: 30px;
  position: fixed;
  top: 210px;
  padding-left: 15px;
  z-index: 3;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 7%;
  }
`;

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	ul {
		padding-left: 0;
	}

	a {
		text-decoration: none;
	}
	p {
		margin: 0;
	}

	body {
		background-color: black;
		font-family: 'Montserrat', sans-serif;
		color: white;
	}
`;

const Next = styled.div`
  height: 10000px;
`;

const IndexPage = ({ data: { allInstaNode } }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Normalize />
      <Background>
        <HeaderIcons>
          <a href="">
            <TikTokIcon />
          </a>
          <a href="">
            <InstagramIcon />
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
        <HeaderContainer>
          <HeaderDescription>
            Sleight of hand magician / Playing cards geek
            <HeaderHashtag>#useyourfingers</HeaderHashtag>
          </HeaderDescription>
        </HeaderContainer>
      </Background>
      <About />
      <VideoWrapper>
        <iframe
          width="1220"
          height="693"
          display="flex"
          src="https://www.youtube.com/embed/c4TuWAzL5Mw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <Instagram posts={allInstaNode} />
      <Airbnb />

      <Next />
    </React.Fragment>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allInstaNode(filter: { username: { eq: "evgenymoskalov" } }, limit: 8) {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
