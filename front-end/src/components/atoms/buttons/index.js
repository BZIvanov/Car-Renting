import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const StyledButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.6,
    textAlign: 'center',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}))(Button);

export const PrimaryButton = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 5),
    fontSize: '1.2rem',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      padding: theme.spacing(0.5, 3),
    },
  },
}))(StyledButton);

export const SecondaryButton = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 4.5),
    fontSize: '1.1rem',
    borderRadius: '16px',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 3.5),
      fontSize: '0.9rem',
      lineHeight: 1.5,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
}))(StyledButton);
