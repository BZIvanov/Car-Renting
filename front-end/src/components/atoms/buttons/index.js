import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const StyledButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.6,
  },
}))(Button);

export const PrimaryButton = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2.5),
    fontSize: 18,
    borderRadius: '22px',
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      padding: theme.spacing(1, 2),
      lineHeight: 1.5,
    },
  },
}))(StyledButton);

export const SecondaryButton = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 4.5),
    fontSize: 24,
    borderRadius: '30px',
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 3.5),
      fontSize: 20,
      lineHeight: 1.5,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
}))(StyledButton);
