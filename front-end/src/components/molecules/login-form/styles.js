import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px',
      '& button': {
        marginTop: '2rem',
      },
      '& div.MuiFormControl-root': {
        marginBottom: '1rem',
      },
    },
  })
);
