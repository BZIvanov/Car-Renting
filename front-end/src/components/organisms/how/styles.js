import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
      backgroundColor: theme.palette.info.main,
    },
    content: {
      maxWidth: theme.breakpoints.values.lg,
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
    },
  })
);
