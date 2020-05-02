import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    car: {
      maxWidth: '350px',
    },
    imgContainer: {
      '& img': {
        width: '100%',
      },
    },
    carInfo: {
      padding: '10px 20px',
    },
  })
);
