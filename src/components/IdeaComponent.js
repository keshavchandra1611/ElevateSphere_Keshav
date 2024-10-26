import React, { useState } from "react";
import axios from "axios"; // To send requests (can be to an AI backend)
import { FiSend } from "react-icons/fi";
import { format } from "date-fns";

const IdeaComponent = () => {
  const [chats, setChats] = useState([]); // Store the list of conversations
  const [userInput, setUserInput] = useState(""); // User input text
  const [loading, setLoading] = useState(false); // Loading state

  // Function to handle submission of user input
  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newChat = {
      question: userInput,
      answer: "AI-generated response will appear here.", // Temporary response
      date: new Date(),
    };

    setLoading(true);

    try {
      // Simulating a call to an AI API (you can integrate your backend here)
      const response = await axios.post("http://localhost:5000/api/ask", {
        question: userInput,
      });

      newChat.answer = response.data.answer; // Store the response from API
    } catch (error) {
      newChat.answer = "Error generating the response.";
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setChats([newChat, ...chats]); // Add new chat at the top (sorted by date)
      setUserInput(""); // Clear input
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">
        Open Innovation - Problem Solver
      </h1>

      {/* Chatbox: Where chats and responses will be displayed */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg overflow-y-auto">
        <div className="space-y-6">
          {chats.map((chat, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-400">
                  {format(new Date(chat.date), "MMMM d, yyyy h:mm a")}
                </p>
              </div>
              <div className="text-gray-300">
                <strong>User: </strong>
                {chat.question}
              </div>
              <div className="text-green-400 mt-2">
                <strong>AI: </strong>
                {chat.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input box for users */}
      <div className="w-full max-w-4xl mt-6 flex">
        <input
          type="text"
          className="w-full bg-gray-800 p-4 rounded-lg focus:outline-none text-white"
          placeholder="Type your problem..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg ml-4 flex items-center justify-center"
          onClick={handleSendMessage}
          disabled={loading}
        >
          <FiSend className="mr-2" />
          {loading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  )
};

export default IdeaComponent;
