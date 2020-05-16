import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    navItem: {
      color: 'inherit',
      textDecoration: 'none',
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);
