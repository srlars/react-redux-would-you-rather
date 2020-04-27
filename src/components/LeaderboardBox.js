import React from 'react';
import { connect } from 'react-redux';

const LeaderboardBox = ({ name, avatar, answers, questions }) => {
  if (questions === null) {
    return <p>Sorry. This question does not exist!</p>;
  } else {
    return (
      <div className="card">
        <div className="card-content">
          <div className="row">
            <div className="col s12 m4 l3">
              <img src={avatar} alt="" className="avatar" />
            </div>
            <div className="col s12 m6">
              <h2>{name}</h2>
              <p>
                Answered questions: <span>{answers}</span>
              </p>
              <hr />
              <p>
                Created questions: <span>{questions}</span>
              </p>
            </div>
            <div className="col s12 m2 l3">
              <h3>Score</h3>
              <span className="score light-blue accent-2">{answers + questions}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ users }, { id }) {
  const user = users[id];

  return {
    name: user.name,
    avatar: user.avatarURL,
    answers: Object.keys(user.answers).length,
    questions: user.questions.length
  };
}

export default connect(mapStateToProps)(LeaderboardBox);
