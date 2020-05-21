import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    filters: {
      borderRight: `2px solid ${theme.palette.info.main}`,
      padding: '3rem 1rem',
      '& > h2': {
        textAlign: 'center',
        paddingBottom: '1.5rem',
      },
    },
  })
);
