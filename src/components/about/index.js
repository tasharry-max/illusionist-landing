import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const Section = styled.section`
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h2`
	max-width: 200px;
	font-style: normal;
	font-weight: bold;
	font-size: 30px;
	position: relative;
	align-items: center;
	justify-content: center;
	text-align: right;
		p {
			font-size: 50px;
		}
`;
const Description = styled.div`
	max-width: 230px;
	font-style: normal;
	font-weight: 300;
	font-size: 18px;
	position: relative;
	left: 40%;
`;

const TitleContainer = styled.div`
	height: 425px;
	width: 180px;
`;

const VerticalLine = styled.div`
	height: 50%;
	border-right: 1px solid white;
`;

const About = () => (
	<Wrapper>
		<Section>
			<TitleContainer>
				<VerticalLine />
				<Title>About 
					<p>Me</p>
				</Title>
			</TitleContainer>
			<Description>
				I was always passionate about magic. I`ve started handling playing cards since I was 8. Years of practicing has evolved my fingers to great sensitivity with cards and small objects. Desire to impress people leads me to practice and improve my skills everyday. Nowadays I'm a sleight of hand performer and this is my way to tell the world abou real magic.
			</Description>
		</Section>
	</Wrapper>
);

export default About;