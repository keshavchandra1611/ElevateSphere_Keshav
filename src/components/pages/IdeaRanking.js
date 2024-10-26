// src/pages/IdeaRanking.js
import React, { useState } from "react";
import IdeaCard from "../components/IdeaCard";
import Leaderboard from "../components/Leaderboard";

const IdeaRanking = () => {
  // Sample ideas for ranking
  const [ideas, setIdeas] = useState([
    { id: 1, title: "AI-based Content Generator", votes: 15 },
    { id: 2, title: "Blockchain for Open Innovation", votes: 25 },
    { id: 3, title: "Collaborative ML Model Training", votes: 10 },
  ]);

  // Function to upvote an idea
  const upvoteIdea = (id) => {
    setIdeas(
      ideas.map((idea) =>
        idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea
      )
    );
  };

  // Function to downvote an idea
  const downvoteIdea = (id) => {
    setIdeas(
      ideas.map((idea) =>
        idea.id === id && idea.votes > 0
          ? { ...idea, votes: idea.votes - 1 }
          : idea
      )
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold">
          Idea Ranking - Open Innovation AI
        </h1>
        <p className="text-gray-400 mt-4">
          Vote and rank ideas to power innovation!
        </p>
      </section>

      {/* Idea Submission Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Submit Your Idea</h2>
          <form className="bg-gray-800 p-6 rounded-lg">
            <input
              type="text"
              placeholder="Enter your innovative idea"
              className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg"
            >
              Submit Idea
            </button>
          </form>
        </div>
      </section>

      {/* Idea Ranking Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ranked Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ideas.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                upvoteIdea={upvoteIdea}
                downvoteIdea={downvoteIdea}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Top Contributors</h2>
          <Leaderboard />
        </div>
      </section>
    </div>
  );
};

export default IdeaRanking;
