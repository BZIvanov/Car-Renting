import React from 'react';
import { useStyles } from './styles';

const Alert = ({ alertData }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.alert} ${classes[alertData.alertType]}`}>
      {alertData.message}
    </div>
  );
};

export default Alert;
