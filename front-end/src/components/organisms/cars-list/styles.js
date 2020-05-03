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
      '& article': {
        margin: '20px',
      },
    },
    pagination: {
      margin: '20px',
    },
    loading: {
      position: 'absolute',
      top: 'calc(50% - 45px)',
      left: 'calc(50% - 45px)',
    },
  })
);
