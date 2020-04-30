import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    register: {
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
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px',
      '& button': {
        marginTop: '30px',
      },
      '& div.MuiFormControl-root': {
        marginBottom: '15px',
      },
    },
    loading: {
      position: 'absolute',
      top: 'calc(50% - 45px)',
      left: 'calc(50% - 45px)',
    },
  })
);
