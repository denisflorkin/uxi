import { palette as mainPalette } from './palette';
import ThemeProvider from './ThemeProvider';

export const palette = mainPalette;

const fonts = {
  fontFamily: 'Open sans, sans-serif',
};

export const theme = {
  wrapper: {
    body: {
      height: '100%',
      margin: 0,
      padding: 0,
    },
    html: {
      height: '100%',
      margin: 0,
      padding: 0,
      background: '#F3F3F2',
      fontFamily: '\'Source Sans Pro\', sans-serif',
      color: palette.darkGrey,
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    li: {
      listStyleType: 'circle',
      marginLeft: '20px',
      paddingLeft: '4px',
    },
    'h1, h2, h3, h4': {
      color: palette.lightBlack,
    },
  },
  root: {
    fontSize: '14p',
  },
  palette,
  padding: {
    breathPadding: '48px',
    defaultPadding: '24px',
  },
  dimensions: {
    mainHeaderHeight: '80px',
  },
  fontsAndColor: {
    default: Object.assign({
      color: '#37373a',
    }, fonts),
    defaultOnDarkBg: Object.assign({
      color: '#fff',
    }, fonts),
  },
  title: {
    color: palette.lightBlack,
  },
  link: {
    linkOnBgDark: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette.white,
    },
    linkOnBgDarktHover: {
      color: palette.primary,
    },
    linkOnBgLight: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette.darkGrey,
    },
    linkOnBgLightHover: {
      color: palette.primary,
    },
  },
};

export default ThemeProvider;
