import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    divider: {
      height: '0.5rem',
      background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.success.main} 50%, ${theme.palette.primary.main} 100%)`,
    },
  })
);
