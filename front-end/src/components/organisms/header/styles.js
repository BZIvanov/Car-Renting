import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.background.darkGray,
    },
    navigation: {
      display: 'flex',
      justifyContent: 'center',
      margin: '5px 0',
      padding: '5px 0',
      color: theme.palette.common.white,
    },
  })
);
