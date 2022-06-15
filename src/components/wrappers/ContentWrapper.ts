import styled from "styled-components/macro";
import { tablet } from "styles/breakpoints";
import { Styles } from "./Box";
import { Theme } from "styles/theme";
import { Box } from "./Box";

export const ContentWrapper = styled(Box)<Styles<Theme>>`
  margin: 0 auto;
  max-width: 58rem;
  padding: 0 1rem;

  @media ${tablet} {
    width: 100%;
  }
`;
