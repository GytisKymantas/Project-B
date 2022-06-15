import styled from "styled-components/macro";
import { Theme } from "styles/theme";
import { tablet } from "styles/breakpoints";
import { Box } from "./Box";
import {
  compose,
  position,
  PositionProps,
  color,
  ColorProps,
} from "styled-system";

const containerProps = compose(position, color);

interface ContainerStyles<T> extends PositionProps<T>, ColorProps<T> {}

export const Container = styled(Box)<ContainerStyles<Theme>>`
  margin: 0 auto;
  max-width: 72rem;
  padding: 0 1rem;

  @media ${tablet} {
    max-width: 72rem;
  }

  && {
    ${containerProps}
  }
`;
