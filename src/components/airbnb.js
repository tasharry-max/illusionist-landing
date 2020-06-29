import React from "react";
import styled from "styled-components";
import airbnbBg from "../images/airbnb.jpg";
import scriptLoader from "react-async-script-loader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
	padding-bottom: 40px;
	background-image: url("${airbnbBg}");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: right center;
	@media (max-width: 812px) {
		flex-direction: column;
	}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
	align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
	margin-left: 50px;
	@media (max-width: 812px) {
    width: 100%;
  }
`;

const Card = styled.div`
	min-width: 430px;
  min-height: 300px;
  padding-left: 20px;
  @media (max-width: 812px) {
    max-width: 380px;
  }
`;

const Text = styled.div`
	color: white;
	font-size: 18px;
	align-items: center;

	padding: 30px;
`;
const AirBnb = () => (
  <Wrapper>
    <Container>
      <Card>
        <div
          className="airbnb-embed-frame"
          data-id="940291"
          data-view="experience"
        >
          <a href="https://www.airbnb.ru/experiences/940291?s=66&amp;unique_share_id=173175f5-6e72-4411-8199-d3c7f4a67bad&amp;source=embed_widget">
            Просмотреть на Airbnb
          </a>
          <a
            href="https://www.airbnb.ru/experiences/940291?s=66&amp;unique_share_id=173175f5-6e72-4411-8199-d3c7f4a67bad&amp;source=embed_widget"
            rel="nofollow"
          >
            Hanging out with local magician
          </a>
          <script
            async=""
            src="https://ru.airbnb.com/embeddable/airbnb_jssdk"
          ></script>
        </div>
      </Card>
			<Text>Take one our sessionand learn basics in card magic. You can joing with zero level in sleight of hand. In the end you'll be able to perform a few tricks by your own style.</Text>
    </Container>
    <Container>
      <Card>
        <div
          className="airbnb-embed-frame"
          data-id="1678504"
          data-view="experience"
        >
          <a href="https://www.airbnb.ru/experiences/1678504?s=66&amp;unique_share_id=d7366fe3-cbfa-402c-a9bd-bc2554ec413e&amp;source=embed_widget">
            Просмотреть на Airbnb
          </a>
          <a
            href="https://www.airbnb.ru/experiences/1678504?s=66&amp;unique_share_id=d7366fe3-cbfa-402c-a9bd-bc2554ec413e&amp;source=embed_widget"
            rel="nofollow"
          >
            Раскройте секреты карт
          </a>
          <script
            async=""
            src="https://ru.airbnb.com/embeddable/airbnb_jssdk"
          ></script>
        </div>
      </Card>
			<Text>Join me for a fun and unique magical experience like no other. A private session in the historical centrum of Kyiv. Seize the opportunity to see close up magic and learn best impromptu tricks during your trip to Ukraine.</Text>
    </Container>
  </Wrapper>
);

export default scriptLoader(["https://www.airbnb.com/embeddable/airbnb_jssdk"])(
  AirBnb
);
