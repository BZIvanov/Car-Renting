import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    car: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: '350px',
      border: `1px solid ${theme.palette.grey['A400']}`,
      borderRadius: '20px',
      overflow: 'hidden',
    },
    imgContainer: {
      '& img': {
        width: '100%',
      },
    },
    carInfo: {
      padding: '10px 20px',
    },
    generalInfo: {
      display: 'flex',
      '& h6:nth-of-type(2)': {
        marginLeft: '10px',
      },
      '& span': {
        color: theme.palette.primary.dark,
      },
    },
  })
);
