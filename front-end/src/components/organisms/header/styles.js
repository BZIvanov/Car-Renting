import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.dark,
    },
    navigation: {
      display: 'flex',
      justifyContent: 'center',
      padding: '5px 0',
      color: theme.palette.common.white,
      height: '60px',
    },
  })
);
