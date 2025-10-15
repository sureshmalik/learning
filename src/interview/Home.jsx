import React from "react";
import { Link } from "react-router-dom";

function InterviewHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🎯 Interview Preparation Platform
          </h1>
          <p className="text-xl text-gray-600">
            Master your technical interviews with organized concepts and questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Python Card */}
          <Link to="/python">
            <div className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <div className="text-6xl mb-4 text-center">🐍</div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Python</h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📚</span>
                  <span>Concepts: Data Types, OOP, Advanced Topics</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">❓</span>
                  <span>100+ Interview Questions</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>

          {/* React Card */}
          <Link to="/react">
            <div className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <div className="text-6xl mb-4 text-center">⚛️</div>
              <h2 className="text-3xl font-bold text-cyan-600 mb-4 text-center">React</h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📚</span>
                  <span>Concepts: Hooks, State Management, Performance</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">❓</span>
                  <span>100+ Interview Questions</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">💡 Click on any topic to begin your preparation journey</p>
        </div>
      </div>
    </div>
  );
}

export default InterviewHome;
