import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60px',
      backgroundColor: theme.palette.background.darkGray,
    },
    content: {
      color: theme.palette.common.white,
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);
