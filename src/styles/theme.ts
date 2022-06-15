export type Colors = keyof typeof colors;

const colors = {
  primary: "#101326",
  secondary: "#29C0CD",
  accent: "#E34578",
  white: "#ffffff",
};

export const theme = {
  colors,
  fontFamily: { primary: "Red Hat Display" },
  fontSizes: {
    fs16: "1rem",
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
  breakpoints: ["24rem", "47rem", "90rem"] as unknown as Breakpoints,
  space: {
    s16: 6,
  },
  typography: {
    h1: {
      fontSize: "5rem",
      fontSizeMobile: "4rem",
      lineHeight: "5.5rem",
      lineHeightMobile: "56px",

      fontWeight: 700,
    },
    h2: {
      fontSize: "72px",
      fontSizeMobile: "56px",
      lineHeightMobile: "56px",
      lineHeight: "94px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "56px",
      fontSizeMobile: "40px",
      lineHeightMobile: "52px",
      lineHeight: "73px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "48px",
      fontSizeMobile: "32px",
      lineHeightMobile: "22px",
      lineHeight: "63px",
      fontWeight: 600,
    },
    h5: {
      fontSize: "40px",
      fontSizeMobile: "26px",
      lineHeightMobile: "34px",
      lineHeight: "52px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "32px",
      fontSizeMobile: "24px",
      lineHeightMobile: "32px",
      lineHeight: "42px",
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
  _: T; // iki nurodyto kazkurio
  lmobile: T;
  ltablet: T;
  desktop: T;
};
