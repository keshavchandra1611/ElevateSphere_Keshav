// src/components/Leaderboard.js
import React from "react";

const Leaderboard = () => {
  // Sample leaderboard data
  const contributors = [
    { id: 1, name: "Alice", ideas: 5, votes: 120 },
    { id: 2, name: "Bob", ideas: 4, votes: 100 },
    { id: 3, name: "Carol", ideas: 3, votes: 80 },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <ul className="divide-y divide-gray-700">
        {contributors.map((contributor) => (
          <li key={contributor.id} className="py-4">
            <div className="flex justify-between">
              <div className="text-lg font-semibold">{contributor.name}</div>
              <div className="text-gray-400">
                {contributor.ideas} ideas, {contributor.votes} votes
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
