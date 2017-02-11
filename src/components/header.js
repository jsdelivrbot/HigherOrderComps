import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton () {
    if (this.props.authenticated) {
      return <button className="btn btn-danger" onClick={() => this.props.authenticate(false)}>Sign Out</button>;
    }

    return <button className="btn btn-info" onClick={() => this.props.authenticate(true)}>Sign In</button>
  }

  render () {
    return (
      <nav className="navbar navbar-light">
        <uk className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </uk>
      </nav>

    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps, actions) (Header);
