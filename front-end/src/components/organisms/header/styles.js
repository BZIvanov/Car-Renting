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
      color: theme.palette.common.white,
    },
  })
);
