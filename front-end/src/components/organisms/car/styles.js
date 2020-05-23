import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
      position: 'relative',
      maxWidth: theme.breakpoints.values.lg,
      margin: '0 auto',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '120px 25px',
      borderRadius: '12px',
      boxShadow: '0 0 15px gray',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        margin: '80px 15px',
      },
      [theme.breakpoints.down('xs')]: {
        margin: '30px 10px',
      },
    },
    image: {
      marginRight: '2rem',
      width: '60%',
      '& > div': {
        minHeight: '450px',
        [theme.breakpoints.down('sm')]: {
          minHeight: '350px',
        },
        [theme.breakpoints.down('xs')]: {
          minHeight: '200px',
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginRight: 0,
      },
    },
    details: {
      width: '40%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: '1rem',
      },
    },
  })
);
