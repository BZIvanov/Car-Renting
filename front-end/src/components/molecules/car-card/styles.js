import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    car: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: '310px',
      border: `1px solid ${theme.palette.grey['A400']}`,
      borderTopRightRadius: '1rem',
      borderBottomLeftRadius: '1rem',
      overflow: 'hidden',
      transition: '100ms ease-in-out',
      height: '100%',
      '&:hover': {
        cursor: 'pointer',
        boxShadow: '5px 4px 10px black',
      },
      '&:hover img': {
        transform: 'scale(1.01)',
      },
    },
    imgContainer: {
      '& img': {
        width: '100%',
        transform: 'scale(1)',
        maxHeight: '210px',
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
