import React from 'react';
import { useStyles } from './styles';

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <div className={classes.spinner}>
        <div className={classes.spinnerText}>Loading</div>
        <div
          className={`${classes.spinnerSector} ${classes.spinnerSectorRed}`}
        ></div>
        <div
          className={`${classes.spinnerSector} ${classes.spinnerSectorBlue}`}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
