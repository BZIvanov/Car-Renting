import { createStyles, makeStyles } from '@material-ui/core/styles';
import image from '../../../static/images/home-image.jpg';

export const useStyles = makeStyles(() =>
  createStyles({
    content: {
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      height: 'calc(100vh - 120px)',
      '& h1': {
        marginBottom: '20px',
        textShadow: '0 0 5px black',
      },
      '& h3': {
        textShadow: '0 0 3px white',
      },
    },
  })
);
