import styled from "styled-components/macro";
import { Styles } from "./Box";
import { Theme } from "styles/theme";
import { flexbox } from "styled-system";
import { Box } from "./Box";

export const FlexWrapper = styled(Box)<Styles<Theme>>`
  display: flex;

  && {
    ${flexbox}
  }
`;
