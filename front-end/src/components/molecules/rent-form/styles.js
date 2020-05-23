import { createStyles, makeStyles, fade } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      position: 'absolute',
      width: '320px',
      top: '25%',
      left: 'calc(50% - 150px)',
      zIndex: 1200,
      padding: '2rem 1rem',
      backgroundColor: fade(theme.palette.info.main, 0.85),
      boxShadow: `0 0 10px ${theme.palette.info.main}`,
      '& > h6': {
        marginBottom: '1rem',
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& button': {
        marginTop: '1.5rem',
      },
      '& input': {
        color: theme.palette.secondary.main,
        fontSize: '1.3rem',
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
    price: {
      textShadow: `0 0 5px ${theme.palette.success.main}`,
      fontSize: '1.7rem',
    },
  })
);
