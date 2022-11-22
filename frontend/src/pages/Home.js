import React, { useEffect, useState } from "react";
import Goal from "../components/Goal";
import GoalForm from "../components/GoalForm";

const Home = () => {
  const [goals, setGoals] = useState(null);

  useEffect(() => {
    const fetchGoals = async () => {
      const response = await fetch("/api/goals");
      const json = await response.json();

      if (response.ok) {
        setGoals(json);
      }
    };
    fetchGoals();
  }, []);
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
