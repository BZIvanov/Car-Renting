import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '../';
import { useStyles } from './styles';

const Alert = ({ alertData }) => {
  const classes = useStyles();

  return ReactDOM.createPortal(
    <div className={`${classes.alert} ${classes[alertData.alertType]}`}>
      <Typography variant="h6">{alertData.message}</Typography>
    </div>,
    document.querySelector('#alerts')
  );
};

export default Alert;
