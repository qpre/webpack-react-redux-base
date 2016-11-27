import React       from 'react';
import { connect } from 'react-redux';

import Counter from '../components/counter';

function IndexLayout() {
  return (
    <div className="index">
      <Counter />
    </div>
  );
}

export default connect(state => state)(IndexLayout);
