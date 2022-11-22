import React from "react";

const Goal = ({ goal }) => {
  return (
    <div>
      <h1>{goal.subject}</h1>
      <p>{goal.description}</p>
      <p>{goal.deadline}</p>
    </div>
  );
};

export default Goal;
