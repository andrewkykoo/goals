import React, { useEffect, useState } from "react";

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
  return <div>{goals && goals.map((goal) => <div>{goal.subject}</div>)}</div>;
};

export default Home;
