import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ authedUser, users }) => (
  <header>
    <nav className="teal darken-1">
      <div className="container">
        <div className="nav-wrapper">
          <a data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/add">ADD YOUR OWN QUESTION</Link>
            </li>
            <li>
              <Link to="/leaderboard">LEADERBOARD</Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              {authedUser === null ? (
                <Link></Link>
              ) : (
                  <span>
                    <img
                      className="avatar"
                      src={users[authedUser].avatarURL}
                      alt=""
                    />
                    <span className="hide-on-med-and-down">
                      {users[authedUser].name}
                    </span>
                    <Link className="waves-effect waves-light light-blue accent-2 btn" to="/logout">
                      LOGOUT
                    <i className="material-icons right">account_circle</i>
                    </Link>
                  </span>
                )}
            </li>
          </ul>

          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/add">ADD YOUR OWN QUESTION</Link>
            </li>
            <li>
              <Link to="/leaderboard">LEADERBOARD</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header >
);

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(Header);
