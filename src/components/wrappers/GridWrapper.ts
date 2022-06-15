import styled from "styled-components/macro";
import { grid, GridProps } from "styled-system";
import { Box } from "./Box";
import { Theme } from "styles/theme";

export const GridWrapper = styled(Box)<GridProps<Theme>>`
  display: grid;

  && {
    ${grid}
  }
`;
