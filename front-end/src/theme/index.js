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
    common: {
      semiWhite: '#f7f7f7',
      semiGray: '#777777',
    },
    background: {
      darkGray: '#23393D',
      semiWhite: '#f7f7f7',
      semiGray: '#777777',
    },
  },
  typography: {
    fontWeightLight: FONT_LIGHT,
    fontWeightRegular: FONT_REGULAR,
    fontWeightMedium: FONT_MEDIUM,
    fontWeightBold: FONT_BOLD,
    h1: {
      fontWeight: FONT_BOLD,
      fontSize: '4rem',
      lineHeight: 1.3,
      [`@media (max-width:1280px)`]: {
        fontSize: '3rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '2.5rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: FONT_BOLD,
      fontSize: '3rem',
      lineHeight: 1.3,
      [`@media (max-width:1280px)`]: {
        fontSize: '2.5rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '2rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '1.6rem',
      },
    },
    h3: {
      fontWeight: FONT_BOLD,
      fontSize: '2.4rem',
      lineHeight: 1.2,
      [`@media (max-width:1280px)`]: {
        fontSize: '2rem',
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
      fontSize: '2rem',
      lineHeight: 1.2,
      [`@media (max-width:1280px)`]: {
        fontSize: '1.8rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '1.6rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '1.2rem',
      },
    },
    h5: {
      fontWeight: FONT_REGULAR,
      fontSize: '1.8rem',
      lineHeight: 1.2,
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
    h6: {
      fontWeight: FONT_REGULAR,
      fontSize: '1.6rem',
      lineHeight: 1.2,
      [`@media (max-width:1280px)`]: {
        fontSize: '1.4rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '1.2rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '1rem',
      },
    },
    subtitle1: {
      fontWeight: FONT_REGULAR,
      fontSize: '1.2rem',
      lineHeight: 1.3,
      [`@media (max-width:1280px)`]: {
        fontSize: '1.0rem',
      },
      [`@media (max-width:960px)`]: {
        fontSize: '0.9rem',
      },
      [`@media (max-width:600px)`]: {
        fontSize: '0.8rem',
      },
    },
  },
});
