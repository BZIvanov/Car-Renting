import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    info: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& span': {
        fontSize: '1.2rem',
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: '15px',
      },
    },
  })
);
