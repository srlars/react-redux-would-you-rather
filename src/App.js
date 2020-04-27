import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Add from './components/Add';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
import Question from './components/Question';
import Questions from './components/Questions';
import LoadingBar from 'react-redux-loading';
import './materialize/materialize.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: 'white', height: '5px' }} />
          <Header />

          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Questions} />
            <PrivateRoute
              exact
              path="/questions/:question_id"
              component={Question}
            />
            <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
            <PrivateRoute exact path="/add" component={Add} />
            <Route exact path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const PrivateRoute = connect(mapStateToProps)(
  ({ component: Component, authedUser, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authedUser !== null ? (
          <Component {...props} />
        ) : (
            <Redirect push to="/login" />
          )
      }
    />
  )
);

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
