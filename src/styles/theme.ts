export type Colors = keyof typeof colors;

const colors = {
  primary: '#101326',
  secondary: '#29C0CD',
  accent: '#E34578',
  white: '#ffffff',
  green: '#008000',
  gray: '#808080',
};

export const theme = {
  colors,
  fontSizes: {
    fs10: '0.625rem',
    fs16: '1rem',
  },
  fontWeights: {
    fw700: 700,
  },
  zIndices: {
    base: 0,
    upperElement: 1,
    modal: 10,
    loader: 11,
  },
  radii: {
    br24: '1.5rem',
  },
  shadows: {
    default: '1px 1px 11px black',
  },
  breakpoints: ['24rem', '56.25rem', '90rem'] as unknown as Breakpoints,
  space: {
    auto: 'auto',
    s16: '1rem',
    s20: '1.25rem',
    s30: '1.875rem',
    s50: '3.125rem',
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontSizeMobile: '4rem',
      lineHeight: '5.5rem',
      lineHeightMobile: '3.5rem',

      fontWeight: 700,
    },
    h2: {
      fontSize: '4.5rem',
      fontSizeMobile: '3.5rem',
      lineHeightMobile: '3.5rem',
      lineHeight: '5.875rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '3.5rem',
      fontSizeMobile: '2.5rem',
      lineHeightMobile: '3.25rem',
      lineHeight: '4.5625rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '3rem',
      fontSizeMobile: '2rem',
      lineHeightMobile: '1.375rem',
      lineHeight: '3.9375rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '2.5rem',
      fontSizeMobile: '1.625rem',
      lineHeightMobile: '2.125rem',
      lineHeight: '3.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '2rem',
      fontSizeMobile: '1.5rem',
      lineHeightMobile: '2rem',
      lineHeight: '2.625rem',
      fontWeight: 600,
    },
  },
} as const;

export type Theme = typeof theme;

export const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
  _: T;
  lmobile: T;
  ltablet: T;
  desktop: T;
};
