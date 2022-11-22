import React, { useState } from "react";
import { useGoalsContext } from "../hooks/useGoalsContext";

const GoalForm = () => {
  const { dispatch } = useGoalsContext();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

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
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setSubject("");
      setDescription("");
      setDeadline("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_GOAL", payload: json });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <label>Subject</label>
      <input
        className={emptyFields.includes("subject") ? "error" : ""}
        type="text"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />
      <label>Description</label>
      <input
        className={emptyFields.includes("description") ? "error" : ""}
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label>Deadline</label>
      <input
        className={emptyFields.includes("deadline") ? "error" : ""}
        type="date"
        onChange={(e) => setDeadline(e.target.value)}
        value={deadline}
      />
      <button>Add</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default GoalForm;
