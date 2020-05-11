import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    infoGroup: {
      display: 'flex',
      alignItems: 'baseline',
      '& :first-child': {
        marginRight: '15px',
      },
    },
  })
);
