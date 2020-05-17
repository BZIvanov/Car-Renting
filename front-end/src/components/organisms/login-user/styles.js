import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
      marginTop: '100px',
      position: 'relative',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& h3': {
        marginBottom: '2rem',
        [theme.breakpoints.down('xs')]: {
          marginBottom: '1rem',
        },
      },
    },
  })
);
