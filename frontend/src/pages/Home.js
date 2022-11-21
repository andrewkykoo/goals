import React, { useEffect, useState } from "react";
import TopicThread from "../components/TopicThread";

const Home = () => {
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      const response = await fetch("/api/topics");
      const json = await response.json();

      if (response.ok) {
        setTopics(json);
      }
    };
    fetchTopics();
  }, []);
  return (
    <div>
      {topics &&
        topics.map((topic) => <TopicThread key={topic._id} topic={topic} />)}
    </div>
  );
};

export default Home;
