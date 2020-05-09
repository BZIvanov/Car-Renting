import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    alert: {
      position: 'absolute',
      width: '80%',
      backgroundColor: 'green',
      textAlign: 'center',
      top: 80,
      left: '10%',
      zIndex: 1500,
    },
    success: {
      color: theme.palette.common.white,
    },
  })
);
