import React       from 'react';
import { connect } from 'react-redux';

function SecondLayout() {
  return (
    <div className="second">
      Toto
    </div>
  );
}

export default connect(state => state)(SecondLayout);
