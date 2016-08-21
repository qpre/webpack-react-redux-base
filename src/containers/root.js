import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <Router history={props.history}>
        {props.routes}
      </Router>
    </Provider>
  );
}
