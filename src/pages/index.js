import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import headerImage from "../images/header-min.jpg";
import { ReactComponent as TikTokIcon } from "../icons/Tiktok-icon.svg";
import { ReactComponent as InstagramIcon } from "../icons/Instagram-icon.svg";
import { ReactComponent as YoutubeIcon } from "../icons/Youtube-icon.svg";
import { ReactComponent as FacebookIcon } from "../icons/Facebook-icon.svg";
import { ReactComponent as TelegramIcon } from "../icons/Telegram-icon.svg";
import { ReactComponent as WhatsappIcon } from "../icons/Whatsapp-icon.svg";
import { ReactComponent as MailIcon } from "../icons/Mail-icon.svg";
import About from "../components/about";
import Airbnb from "../components/airbnb";
import Instagram from "../components/instagram";
import PartySlider from "../components/party-slider";
import Footer from "../components/footer";
import Seo from "../components/seo.js";
import { graphql } from "gatsby";

const Background = styled.div`
  min-height: 100vh;
  height: 1px;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;

  @media (max-width: 812px) {
    background-attachment: scroll;
    background-position: center center 40px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  max-width: 50%;
  min-width: 225px;
  height: 100%;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 812px) {
    max-width: 100%;
    justify-content: flex-end;
    margin-right: 20px;
  }
`;

const HeaderTitle = styled.h1`
  top: 100px;
  left: 10px;
  font-weight: bold;
  font-size: 54px;
  position: absolute;
  top: 150px;
  left: 11px;
  margin: 0;

  @media (max-width: 812px) {

    top: 15px;
    font-size: 35px;
  }
`;
const HeaderDescription = styled.div`
  justify-content: center;
  height: 190px;
  width: 170px;
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
  width: 30px;
  padding-left: 15px;
  z-index: 3;
  position: fixed;
  top: 200px;

  @media (max-width: 812px) {
    top: 50px;
  }

  a {
    margin-bottom: 15px;
    display: inline-block;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const AirbnbTitle = styled.h3`
  font-weight: 600;
  font-size: 64px;
  color: black;
  -webkit-text-stroke: 0.5px white;
  padding-left: 50px;
  text-align: center;
  @media (max-width: 812px) {
    text-align: left;
    font-size: 44px;
    padding: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: padding-box;
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

const ContentWithoutNavbar = styled.div`
  margin-left: 60px;
  width: calc(100% - 60px);
`;

const SidebarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const IndexPage = ({ data: { allInstaNode } }) => {
  return (
    <Seo
      title="Evgeny Moskalov | Sleight of hand magician"
      description=" I'm sleight of hand magician, playing cards geek, street magic performer, juggler, entertainer, card magic teacher."
      keywords={[
        "sleight of hand",
        "cardistry",
        "magic",
        "magician",
        "card magician",
        "card magic",
        "street magic",
        "card tricks",
        "playing cards",
        "playing cards magic",
        "playing cards trick",
        "ukrainemagic",
        "kyivmagic",
        "cardtricks online",
        "cardmagic online",
      ]}
    >
      <GlobalStyle />
      <Normalize />

      <HeaderTitle>Evgeny Moskalov</HeaderTitle>
      <HeaderIcons>
        <a href="https://vm.tiktok.com/TVFURV/" target="_blank">
          <TikTokIcon />
        </a>
        <a href="https://www.instagram.com/evgenymoskalov" target="_blank">
          <InstagramIcon />
        </a>
        <a
          href="https://www.youtube.com/channel/UC3Yt5PLr3KnNtbSivR6U_IA?view_as=subscriber"
          target="_blank"
        >
          <YoutubeIcon />
        </a>
        <a href="https://www.facebook.com/evgeny.moskalov" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://t.me/useyourfingers" target="_blank">
          <TelegramIcon />
        </a>
        <a href="https://wa.me/0988986808" target="_blank">
          <WhatsappIcon />
        </a>
        <a href="mailto:evgenymoskalov@gmail.com" target="_blank">
          <MailIcon />
        </a>
      </HeaderIcons>
      <Background>
        <HeaderContainer>
          <HeaderDescription>
            Sleight of hand magician / Playing cards geek
            <HeaderHashtag>#useyourfingers</HeaderHashtag>
          </HeaderDescription>
        </HeaderContainer>
      </Background>
      <About />
      <ContentWithoutNavbar>
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
        <AirbnbTitle>My AirBnb experiences</AirbnbTitle>
        <Airbnb />
      </ContentWithoutNavbar>
      <PartySlider />
      <Footer />
    </Seo>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allInstaNode(filter: { username: { eq: "evgenymoskalov" } }, limit: 8) {
      nodes {
        id
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
