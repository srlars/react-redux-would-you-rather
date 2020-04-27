import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="container content">
      <div className="row">
        <h1 className="center-align">Sorry. This page does not exist!</h1>
        <p className="center-align">
          Click here to return <Link to="/">home</Link>.
        </p>
      </div>
    </div>
  );
};
