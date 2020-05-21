import React from 'react';
import { Typography } from '../';
import { useStyles } from './styles';

const Alert = ({ alertData }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.alert} ${classes[alertData.alertType]}`}>
      <Typography variant="h6">{alertData.message}</Typography>
    </div>
  );
};

export default Alert;
