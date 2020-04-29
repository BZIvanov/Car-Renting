import { createStyles, makeStyles } from '@material-ui/core/styles';
import image from '../../../static/images/home-image.jpg';

export const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      height: 'calc(100vh - 120px)',
    },
    overlay: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '20px',
      zIndex: 100,
      backgroundColor: 'rgba(0,0,0,0.5)',
      height: 'calc(100vh - 120px)',
      marginLeft: '50%',
      '& h1': {
        marginBottom: '20px',
        textShadow: '0 0 5px black',
      },
      '& h3': {
        textShadow: '0 0 3px white',
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: '0',
        alignItems: 'center',
        paddingLeft: '0',
      },
    },
  })
);
