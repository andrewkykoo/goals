import React, { useState } from "react";
import { useGoalsContext } from "../hooks/useGoalsContext";

const GoalForm = () => {
  const { dispatch } = useGoalsContext();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const goal = { subject, description, deadline };

    const response = await fetch("/api/goals", {
      method: "POST",
      body: JSON.stringify(goal),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setSubject("");
      setDescription("");
      setDeadline("");
      setError(null);
      dispatch({ type: "CREATE_GOAL", payload: json });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <label>Subject</label>
      <input
        type="text"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />
      <label>Description</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label>Deadline</label>
      <input
        type="date"
        onChange={(e) => setDeadline(e.target.value)}
        value={deadline}
      />
      <button>Add</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default GoalForm;
