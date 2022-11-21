import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const TopicThread = ({ topic }) => {
  return (
    <div>
      <h2>{topic.title}</h2>
      <h3>likes: {topic.likes}</h3>
      <h3>dislikes: {topic.dislikes}</h3>
      <div>
        <CommentForm />
        {topic.comments &&
          topic.comments.map((comment) => <Comment comment={comment} />)}
      </div>
    </div>
  );
};

export default TopicThread;
