import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60px',
      backgroundColor: theme.palette.background.darkGray,
    },
    navigation: {
      display: 'flex',
      justifyContent: 'center',
      padding: '5px 0',
    },
    listItems: {
      display: 'flex',
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        padding: '10px 20px',
      },
    },
    navItem: {
      color: theme.palette.common.white,
      textDecoration: 'none',
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);
