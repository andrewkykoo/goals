import React, { useEffect } from "react";
import Goal from "../components/Goal";
import GoalForm from "../components/GoalForm";
import { useGoalsContext } from "../hooks/useGoalsContext";

const Home = () => {
  const { goals, dispatch } = useGoalsContext();

  useEffect(() => {
    const fetchGoals = async () => {
      const response = await fetch("/api/goals");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_GOALS", payload: json });
      }
    };
    fetchGoals();
  }, [dispatch]);
  return (
    <div>
      <div>
        {goals && goals.map((goal) => <Goal goal={goal} key={goal._id} />)}
      </div>
      <GoalForm />
    </div>
  );
};

export default Home;
