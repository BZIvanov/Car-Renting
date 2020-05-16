import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    listItems: {
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        padding: '10px 20px',
        '& h6': {
          display: 'flex',
          alignItems: 'center',
          '& svg': {
            marginRight: '5px',
          },
        },
      },
    },
    activeLink: {
      color: theme.palette.info.light,
    },
    text: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  })
);
