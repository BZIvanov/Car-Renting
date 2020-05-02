import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    cars: {
      maxWidth: theme.breakpoints.values.lg,
      margin: '0 auto',
    },
    content: {
      display: 'flex',
    },
    loading: {
      position: 'absolute',
      top: 'calc(50% - 45px)',
      left: 'calc(50% - 45px)',
    },
  })
);