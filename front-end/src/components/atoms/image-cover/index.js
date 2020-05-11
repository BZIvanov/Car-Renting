import React from 'react';
import { useStyles } from './styles';

const ImageCover = (props) => {
  const classes = useStyles(props);

  return <div className={classes.cover} />;
};

export default ImageCover;
