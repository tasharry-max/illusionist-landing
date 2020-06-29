import React from "react";
import styled from "styled-components";
import Slider from "../slider";
import zhekanWithCard from "../../images/slider-2-min.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  min-height: 100vh;
	padding-bottom: 40px;
	@media (max-width: 812px) {
		display: block;
		background-image: url("${zhekanWithCard}");
		background-size: contain;
		background-position: top center;
		background-repeat: no-repeat;
	}
`;

const Section = styled.section`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 812px) {
    align-items: flex-end;
    margin-right: 20px;
  }
`;

const Title = styled.h2`
  max-width: 200px;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: right;
  p {
    font-size: 110px;
  }
`;
const Description = styled.div`
  max-width: 230px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  position: relative;
  left: 0%;
  top: 3%;
	p {
		padding-bottom: 20px;
	}
`;

const TitleContainer = styled.div`
  height: 500px;
  width: 180px;
`;

const VerticalLine = styled.div`
  height: 50%;
  border-right: 1px solid white;
`;

const About = () => (
  <Wrapper>
    <Slider />
    <Section>
      <TitleContainer>
        <VerticalLine />
        <Title>
          About
          <p>Me</p>
        </Title>
      </TitleContainer>
      <Description>
        <p>I was always passionate about magic and the world without it was never
        an option for me, so I found ways to keep at it. </p>
				<p>Since I was 8 years old
        I trained with a deck of cards and small objects. Years of practice made
        my fingers nimble and desire to impress and share my magic with other
        people led me to master my skills everyday.</p>
				<p> Nowadays I'm a sleight of
        hand performer and I invite you to experience my way of magic. </p>
      </Description>
    </Section>
  </Wrapper>
);

export default About;
