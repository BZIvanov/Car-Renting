import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Layout, AppRoutes } from './components/organisms';
import { ScrollToTop } from './components/atoms';
import { autoSignup } from './store/actions/auth';

const App = (props) => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CssBaseline />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(autoSignup()),
  };
};

export default connect(null, mapDispatchToProps)(App);
