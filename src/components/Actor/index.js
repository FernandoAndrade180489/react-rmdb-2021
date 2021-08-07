import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

// PropTypes validate types of props.
// It's only available in development mode.
// It's not necessary if you use Typescript
Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Actor;
