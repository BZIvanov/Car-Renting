import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    listItems: {
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      color: theme.palette.primary.main,
      '& li': {
        listStyle: 'none',
        padding: '10px 20px',
        '& h6': {
          display: 'flex',
          alignItems: 'center',
          '& svg': {
            marginRight: '0.5rem',
          },
        },
      },
    },
    activeLink: {
      color: theme.palette.secondary.main,
    },
    text: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  })
);
