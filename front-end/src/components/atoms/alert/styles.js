import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    alert: {
      position: 'absolute',
      width: '40%',
      textAlign: 'center',
      color: theme.palette.secondary.main,
      top: 80,
      left: '50%',
      zIndex: 1500,
      padding: '0.5rem',
      clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)',
      textShadow: '0 0 5px black',
      '&::before': {
        content: '""',
        display: 'block',
        width: '5%',
        height: '50%',
        backgroundColor: theme.palette.info.main,
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        position: 'absolute',
        top: 9,
        left: 5,
      },
    },
    success: {
      backgroundColor: theme.palette.success.main,
    },
    danger: {
      backgroundColor: theme.palette.warning.main,
    },
  })
);
