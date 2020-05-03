import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    section: {
      paddingTop: '100px',
      position: 'relative',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& h3': {
        marginBottom: '30px',
      },
    },
    loading: {
      position: 'absolute',
      top: 'calc(50% - 45px)',
      left: 'calc(50% - 45px)',
    },
  })
);
