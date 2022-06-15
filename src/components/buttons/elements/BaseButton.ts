import styled from 'styled-components/macro';
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system';
import { theme, Theme } from 'styles/theme';

const defaultButtonProps = compose(layout, space);

export interface DefaultButtonProps
  extends SpaceProps<Theme>,
    LayoutProps<Theme> {
  background?: string;
  boxShadow?: string;
  border?: string;
  cursor?: string;
  pointer?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export type ButtonStyles = Pick<
  DefaultButtonProps,
  | 'margin'
  | 'width'
  | 'padding'
  | 'border'
  | 'background'
  | 'boxShadow'
  | 'cursor'
  | 'pointer'
  | 'minWidth'
>;

export const BaseButton = styled.button<ButtonStyles>`
  border-style: none;
  border-radius: 1.5rem;
  border: ${({ border }) => border};
  background-color: ${({ background }) => background || ''};
  box-shadow: ${({ boxShadow }) => boxShadow || ''};
  display: block;
  font-weight: ${({ theme }) => theme.fontWeights.fw700};
  min-width: ${({ minWidth }) => minWidth || ''};
  padding: ${({ padding }) => padding || '1rem 1.5rem'};
  transition: 0.3s;
  width: 100%;
  &:hover:enabled {
    background: orange;
    cursor: pointer;
  }
  &:active:enabled {
    filter: brightness(110%);
  }
  && {
    ${defaultButtonProps}
  }
`;
