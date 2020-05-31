import React, { useState } from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import sliderPhoto1 from "../images/slider-1-min.jpg";
import sliderPhoto2 from "../images/slider-2-min.jpg";

const SliderContainer = styled.div`
  flex-basis: 50%;
  position: relative;
`;

const Image = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
`;

const ControlContainer = styled.form`
  position: absolute;
  left: -20px;
  width: 10px;
  height: 50px;
`;

const ControlPositioner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const ControlCheckbox = styled.div`
  input {
    display: none;
  }

  label {
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid white;
    width: 10px;
    height: 10px;
    display: block;
  }

  input:checked + label {
    border-radius: 10px;
    background-color: white;
  }
`;

const images = [sliderPhoto1, sliderPhoto2];

const Slider = () => {
  const [currentIndex, setIndex] = useState(0);

  const transitions = useTransition(images[currentIndex], item => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <SliderContainer>
      <ControlPositioner>
        <ControlContainer>
          {images.map((image, index) => (
            <ControlCheckbox key={image}>
              <input
                name="same"
                id={image}
                value={index}
                type="radio"
                checked={currentIndex === index}
              />
              <label htmlFor={image} onClick={() => setIndex(index)} />
            </ControlCheckbox>
          ))}
        </ControlContainer>
      </ControlPositioner>
      {transitions.map(({ item, props, key }) => (
        <Image image={item} key={key} style={props} />
      ))}
    </SliderContainer>
  );
};

export default Slider;
