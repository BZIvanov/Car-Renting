import { createStyles, makeStyles } from '@material-ui/core/styles';
import desktopImage from '../../../static/images/home-desktop.jpg';
import tabletImage from '../../../static/images/home-tablet.jpeg';
import mobileImage from '../../../static/images/home-mobile.jpeg';

export const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      backgroundImage: `url(${desktopImage})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      height: 'calc(100vh - 120px)',
      '& h1': {
        marginBottom: '1.5rem',
        textShadow: '0 0 5px black',
      },
      '& h3': {
        textShadow: '0 0 3px black',
      },
      [theme.breakpoints.down('sm')]: {
        backgroundImage: `url(${tabletImage})`,
      },
      [theme.breakpoints.down('xs')]: {
        backgroundImage: `url(${mobileImage})`,
      },
    },
  })
);
