import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
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
      '& > div': {
        width: '50%',
      },
      '& div:first-of-type': {
        minHeight: '450px',
        marginRight: '35px',
      },
    },
  })
);
