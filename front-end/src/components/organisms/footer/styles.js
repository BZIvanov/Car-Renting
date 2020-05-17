import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.primary.dark,
    },
    content: {
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 1rem',
      color: theme.palette.common.white,
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);
