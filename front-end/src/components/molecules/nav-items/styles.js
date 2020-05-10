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
        '& a': {
          display: 'flex',
          '& svg': {
            marginRight: '5px',
          },
        },
      },
    },
  })
);
