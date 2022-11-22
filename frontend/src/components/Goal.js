import React from "react";
import { useGoalsContext } from "../hooks/useGoalsContext";

const Goal = ({ goal }) => {
  const { dispatch } = useGoalsContext();

  const handleClick = async () => {
    const response = await fetch("/api/goals/" + goal._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_GOAL", payload: json });
    }
  };
  return (
    <div>
      <h1>{goal.subject}</h1>
      <p>{goal.description}</p>
      <p>
        {new Date(goal.deadline).toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default Goal;
