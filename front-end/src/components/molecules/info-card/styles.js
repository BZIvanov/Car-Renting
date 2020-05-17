import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.warning.main,
      padding: '2rem',
      textAlign: 'center',
      width: '33%',
      flexGrow: 1,
      outline: `1px solid ${theme.palette.info.main}`,
      outlineOffset: '-0.5rem',
      [theme.breakpoints.down('sm')]: {
        width: '50%',
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
      '& h5': {
        marginBottom: '2rem',
      },
    },
  })
);
