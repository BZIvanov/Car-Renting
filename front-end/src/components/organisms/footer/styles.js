import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.background.darkGray,
    },
    content: {
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 1rem',
      color: theme.palette.common.white,
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);
