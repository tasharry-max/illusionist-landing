import React, { useState } from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import partySlider1 from "../images/party-slider-1-min.jpg";
import partySlider2 from "../images/party-slider-2-min.jpg";
import partySlider3 from "../images/party-slider-3-min.jpg";
import partySlider4 from "../images/party-slider-4-min.jpg";
import partySlider5 from "../images/party-slider-5-min.jpg";

const images = [
  { href: partySlider1, title: "corporate party" },
  { href: partySlider2, title: "wedding" },
  { href: partySlider3, title: "magic for kids" },
  { href: partySlider4, title: "master class" },
  { href: partySlider5, title: "street magic" },
];

const Container = styled.div`
  height: 600px;
  width: 100%;
`;

const Images = styled.div`
  position: relative;
  height: 520px;
`;

const Image = styled(animated.div)`
  position: absolute;
  background-image: url(${props => props.image});
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Buttons = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  button {
    background: black;
    color: white;
    border: none;
    outline: none;
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
  }
  button:hover:not(.active) {
    opacity: 0.75;
  }
  .active {
    opacity: 0.5;
  }
`;
const ControlCheckbox = styled.div`
  input {
    display: none;
  }

  label {
    display: block;
    width: 20%;
    height: 60px;
  }

  input:checked + label {
    color: grey;
  }
`;

const PartySlider = () => {
  const [currIndex, setIndex] = useState(0);
  const transitions = useTransition(images[currIndex], image => image.title, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <Container>
      <Images>
        {transitions.map(transition => (
          <Image
            image={transition.item.href}
            key={transition.key}
            style={transition.props}
          />
        ))}
      </Images>
      <Buttons>
        {images.map((image, index) => {
          const isActive = index === currIndex ? "active" : "";
          return (
            <ControlCheckbox key={image.title}>
              <button onClick={() => setIndex(index)} className={isActive}>
                {image.title}
              </button>
            </ControlCheckbox>
          );
        })}
      </Buttons>
    </Container>
  );
};

export default PartySlider;
