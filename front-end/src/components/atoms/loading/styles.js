import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    loading: {
      position: 'absolute',
      top: 'calc(50% - 45px)',
      left: 'calc(50% - 45px)',
    },
    spinner: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90px',
      height: '90px',
      zIndex: 1500,
    },
    spinnerText: {
      animation: '$loadingOpacity 3s ease-in infinite',
      fontSize: '1rem',
      color: theme.palette.primary.main,
    },
    spinnerSector: {
      borderRadius: '50%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      border: '10px solid transparent',
      mixBlendMode: 'overlay',
    },
    spinnerSectorRed: {
      animation: '$rotate 2.5s ease-in infinite',
      borderTop: `10px solid ${theme.palette.primary.main}`,
    },
    spinnerSectorBlue: {
      animation: '$rotate 2s ease-out infinite',
      borderTop: `10px solid ${theme.palette.secondary.main}`,
    },
    '@keyframes loadingOpacity': {
      '0%, 100%': {
        opacity: 1,
      },
      '25%, 75%': {
        opacity: 0.5,
      },
      '50%': {
        opacity: 0.1,
      },
    },
    '@keyframes rotate': {
      from: { transform: 'rotate(0)' },
      to: { transform: 'rotate(360deg)' },
    },
  })
);
