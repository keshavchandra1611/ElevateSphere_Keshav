// src/components/IdeaCard.js
import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const IdeaCard = ({ idea, upvoteIdea, downvoteIdea }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => upvoteIdea(idea.id)}
            className="text-green-500 hover:text-green-400"
          >
            <FaThumbsUp size={24} />
          </button>
          <button
            onClick={() => downvoteIdea(idea.id)}
            className="text-red-500 hover:text-red-400"
          >
            <FaThumbsDown size={24} />
          </button>
        </div>
        <span className="text-gray-400">{idea.votes} votes</span>
      </div>
    </div>
  );
};

export default IdeaCard;
