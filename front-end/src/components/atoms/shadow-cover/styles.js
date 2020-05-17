import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    shadow: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '1.5rem',
      zIndex: 100,
      backgroundColor: 'rgba(0,0,0,0.5)',
      height: 'calc(100vh - 60px)',
      marginLeft: '50%',
      [theme.breakpoints.down('xs')]: {
        marginLeft: '0',
        alignItems: 'center',
        paddingLeft: '0',
        paddingTop: '100px',
        justifyContent: 'flex-start',
      },
    },
  })
);
