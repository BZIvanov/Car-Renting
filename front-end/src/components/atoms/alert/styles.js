import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    alert: {
      position: 'absolute',
      width: '80%',
      textAlign: 'center',
      color: theme.palette.common.white,
      top: 80,
      left: '10%',
      zIndex: 1500,
    },
    success: {
      backgroundColor: theme.palette.success.main,
    },
    danger: {
      backgroundColor: theme.palette.warning.main,
    },
  })
);
