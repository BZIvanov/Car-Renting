import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cars: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '& > a': {
        margin: '1.3rem',
      },
    },
    pagination: {
      margin: '1.3rem',
    },
  })
);
