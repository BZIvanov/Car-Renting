import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
      maxWidth: theme.breakpoints.values.lg,
      margin: '0 auto',
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cars: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '& > a': {
        margin: '20px',
      },
    },
    pagination: {
      margin: '20px',
    },
  })
);
