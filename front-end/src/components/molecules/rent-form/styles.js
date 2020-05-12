import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px',
      top: '40%',
      left: 'calc(50% - 150px)',
      zIndex: 1400,
      backgroundColor: theme.palette.background.paper,
      '& button': {
        marginTop: '30px',
      },
      '& div.MuiFormControl-root': {
        marginBottom: '15px',
      },
    },
  })
);
