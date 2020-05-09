import React from 'react';
import { connect } from 'react-redux';
import { Header, Footer } from '../';
import { Alert } from '../../atoms';
import { useStyles } from './styles';

const Layout = (props) => {
  const { alerts, children } = props;
  const classes = useStyles();

  const alertsToRender =
    alerts.length > 0
      ? alerts.map((alert) => <Alert alertData={alert} key={alert.id} />)
      : null;

  return (
    <div className={classes.content}>
      {alertsToRender}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps)(Layout);
