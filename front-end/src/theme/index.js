import { createMuiTheme } from '@material-ui/core/styles';
import { FONT_LIGHT, FONT_REGULAR, FONT_MEDIUM, FONT_BOLD } from '../constants';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#e76f51',
      dark: '#264653',
    },
    secondary: {
      main: '#f4a261',
    },
    success: {
      main: '#2a9d8f',
    },
    warning: {
      main: '#e9c46a',
    },
  },
  typography: {
    fontWeightLight: FONT_LIGHT,
    fontWeightRegular: FONT_REGULAR,
    fontWeightMedium: FONT_MEDIUM,
    fontWeightBold: FONT_BOLD,
    h1: {
      fontWeight: FONT_BOLD,
      fontSize: '3.2rem',
      lineHeight: 1.5,
      [`@media (max-width:1280px)`]: {
        fontSize: '2.8rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '2.2rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: FONT_BOLD,
      fontSize: '2.6rem',
      lineHeight: 1.4,
      [`@media (max-width:1280px)`]: {
        fontSize: '2.2rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '1.8rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '1.6rem',
      },
    },
    h3: {
      fontWeight: FONT_BOLD,
      fontSize: '2.2rem',
      lineHeight: 1.4,
      [`@media (max-width:1280px)`]: {
        fontSize: '1.8rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '1.6rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '1.25rem',
      },
    },
    h4: {
      fontWeight: FONT_MEDIUM,
      fontSize: '1.8rem',
      lineHeight: 1.3,
      [`@media (max-width:1280px)`]: {
        fontSize: '1.6rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '1.4rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '1.2rem',
      },
    },
    h5: {
      fontWeight: FONT_REGULAR,
      fontSize: '1.4rem',
      lineHeight: 1.2,
      [`@media (max-width:1280px)`]: {
        fontSize: '1.2rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '1.1rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '1rem',
      },
    },
    h6: {
      fontWeight: FONT_REGULAR,
      fontSize: '1.2rem',
      lineHeight: 1.2,
      [`@media (max-width:1280px)`]: {
        fontSize: '1.1rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '0.9rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '0.8rem',
      },
    },
    subtitle1: {
      fontWeight: FONT_REGULAR,
      fontSize: '1.1rem',
      lineHeight: 1.2,
      [`@media (max-width:1280px)`]: {
        fontSize: '1rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '0.9rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '0.8rem',
      },
    },
    subtitle2: {
      fontWeight: FONT_LIGHT,
      fontSize: '1rem',
      lineHeight: 1.2,
      [`@media (max-width:1280px)`]: {
        fontSize: '0.9rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '0.8rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '0.7rem',
      },
    },
  },
});
