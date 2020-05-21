import { createStyles, makeStyles, fade } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    search: {
      border: `2px solid ${theme.palette.info.main}`,
      borderRadiusTopright: '15px',
    },
    form: {
      display: 'flex',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.55),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0.1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 20,
      color: theme.palette.primary.main,
    },
    inputRoot: {
      color: theme.palette.primary.main,
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
      },
    },
  })
);
