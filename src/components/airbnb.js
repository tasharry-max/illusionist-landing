import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
	padding-bottom: 40px;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const Card = styled.div`
  width: 410px;
  min-height: 300px;
  margin: auto;
	@media (max-width: 600px) {
		max-width: 380px;
	}
`;

const AirBnb = () => (
  <Wrapper>
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
      </div>
    </Card>
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
      </div>
    </Card>
  </Wrapper>
);

export default AirBnb;
