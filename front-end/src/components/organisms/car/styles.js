import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
      maxWidth: theme.breakpoints.values.lg,
      margin: '0 auto',
    },
  })
);
