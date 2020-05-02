import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    navItem: {
      color: theme.palette.common.white,
      textDecoration: 'none',
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);
