import React from 'react';
import { connect } from 'react-redux';
import { default as Navbar } from '../components/navbar';

import '../styles/main.scss';

function Application(props) {
  return (
    <div className="application">
      <Navbar />
      {props.children}
    </div>
  );
}

export default connect(state => state)(Application);
