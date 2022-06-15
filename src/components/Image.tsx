import React from "react";
import styled from "styled-components/macro";
import LazyLoad from "react-lazyload";

import { mobile } from "styles/breakpoints";
import { Visuals, visuals } from "utils/visuals";

interface Styles {
  maxWidth?: string;
  width?: string;
  height?: string;
  margin?: string;
  maxHeight?: string;
}

interface ImageProps extends Styles {
  src: Visuals;
  mobile_src?: Visuals;
  onClick?: () => void;
}

const Img = styled.img<Styles>`
  max-width: ${({ maxWidth }) => maxWidth || ""};
  margin: ${({ margin }) => margin || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  max-height: ${({ maxHeight }) => maxHeight || ""};
`;

export const Image: React.FC<ImageProps> = ({
  src,
  mobile_src,
  onClick,
  ...rest
}) => {
  return (
    // kol neuzkraus vartotojui, uzims sitiek, nebus prapleciamos nesamones ir rezervuoja iskarto
    <LazyLoad height={200}>
      <picture>
        {mobile_src && <source media={mobile} srcSet={visuals[mobile_src]} />}
        {/* uzsetina sitaip kaip mobile, bet pirma mobile turi buti <source> yra html tagas, turi attributa srcSet*/}
        <Img src={visuals[src]} alt={src} {...rest} />
      </picture>
    </LazyLoad>
  );
};
