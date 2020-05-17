import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
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
      '& label': {
        color: theme.palette.secondary.main,
      },
      '& div.MuiInput-underline::before': {
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
      },
      '& div.MuiInput-underline:hover::before': {
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
      },
    },
  })
);
