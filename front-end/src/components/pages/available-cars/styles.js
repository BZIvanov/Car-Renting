import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      maxWidth: theme.breakpoints.values.lg,
      margin: '0 auto',
      display: 'flex',
    },
  })
);
