import React       from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { replace } from 'react-router-redux';

function Navbar(props) {
  return (
    <ul className="navbar">
      <li><a onClick={() => props.dispatch(replace('/'))}>link to index</a></li>
      <li><Link to="/second">link to second</Link></li>
    </ul>
  );
}

export default connect(state => state)(Navbar);
