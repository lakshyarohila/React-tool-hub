import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const tools = [
    {
      name: "E-Signature",
      description: "Draw and save your signature",
      path: "/e-signature",
      emoji: "🖊️",
    },
    {
      name: "To-Do List",
      description: "Manage your daily tasks",
      path: "/todo",
      emoji: "📝",
    },
    {
      name: "Stopwatch",
      description: "Track time easily",
      path: "/stopwatch",
      emoji: "⏲️",
    },
    {
      name: "Password Generator",
      description: "Create strong passwords",
      path: "/password-generator",
      emoji: "🔓",
    },
    {
      name: "Drawing Canvas",
      description: "Draw anything freely",
      path: "/drawing-canvas",
      emoji: "🎨",
    },
  ];
  return (
    <div className="min-h-screen  p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-gray-500 rounded-4xl shadow-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <div className="text-3xl mb-4 text-white">{tool.emoji}</div>
              <h2 className="text-xl font-semibold">{tool.name}</h2>
              <p className="text-gray-300 mt-1">{tool.description}</p>
              <Link
                className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 text-center"
                to={tool.path}
              >
                Open Tool
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
