import React, { useState } from 'react';
import { ArrowLeft, Lightbulb, Sparkles, Target } from 'lucide-react';

export default function QuizBuilder({ onBack }) {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Medium');

  const topicSuggestions = [
    'My Best Friend',
    'Cricket Basics',
    'Solar System',
    'Healthy Habits',
    'Animals & Birds',
    'School Picnic'
  ];

  const difficulties = [
    {
      level: 'Easy',
      icon: <Lightbulb className="w-5 h-5 lg:w-6 lg:h-6" />,
      description: 'Short sentences & gentle vocabulary.',
      color: 'emerald'
    },
    {
      level: 'Medium',
      icon: <Sparkles className="w-5 h-5 lg:w-6 lg:h-6" />,
      description: 'Everyday situations with detail.',
      color: 'yellow'
    },
    {
      level: 'Hard',
      icon: <Target className="w-5 h-5 lg:w-6 lg:h-6" />,
      description: 'Longer thinking and tricky choices.',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 xl:p-12">
      <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-600 font-medium mb-6 lg:mb-8 hover:text-emerald-700"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 xl:p-10 mb-6 lg:mb-8">
          <div className="text-emerald-500 text-sm lg:text-base font-semibold mb-2">LEARN TAB</div>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">Craft a custom quiz</h1>
          <p className="text-gray-500 mb-4 lg:mb-6 text-base lg:text-lg">
            Pick a topic, choose difficulty, and we will build four fun questions instantly.
          </p>
          <div className="flex items-center gap-4 lg:gap-6 text-sm lg:text-base">
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
              AI Powered
            </span>
            <span className="text-gray-400">4 Questions</span>
            <span className="text-gray-400">Instant play</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 xl:p-10 mb-6 lg:mb-8">
          <div className="text-emerald-500 text-sm lg:text-base font-semibold mb-2">STEP 1</div>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">Choose a topic</h2>
          
          <input
            type="text"
            placeholder='e.g. "My school day" or "Planets in space"'
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full px-4 py-3 lg:px-6 lg:py-4 border border-gray-200 rounded-lg mb-4 lg:mb-6 text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <div className="flex flex-wrap gap-2 lg:gap-3">
            {topicSuggestions.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className="px-4 py-2 lg:px-5 lg:py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm lg:text-base"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 xl:p-10 mb-6 lg:mb-8">
          <div className="text-emerald-500 text-sm lg:text-base font-semibold mb-2">STEP 2</div>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">Pick a challenge level</h2>

          <div className="space-y-3 lg:space-y-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0">
            {difficulties.map((diff) => (
              <button
                key={diff.level}
                onClick={() => setSelectedDifficulty(diff.level)}
                className={`w-full text-left p-4 lg:p-6 rounded-xl transition-all ${
                  selectedDifficulty === diff.level
                    ? diff.color === 'emerald'
                      ? 'bg-emerald-50 border-2 border-emerald-500'
                      : diff.color === 'yellow'
                      ? 'bg-yellow-50 border-2 border-yellow-400'
                      : 'bg-purple-50 border-2 border-purple-500'
                    : 'bg-gray-50 border-2 border-transparent hover:border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-2 lg:mb-3">
                  <span
                    className={`text-lg lg:text-xl font-semibold ${
                      diff.color === 'emerald'
                        ? 'text-emerald-600'
                        : diff.color === 'yellow'
                        ? 'text-yellow-600'
                        : 'text-purple-600'
                    }`}
                  >
                    {diff.level}
                  </span>
                  <span
                    className={
                      diff.color === 'emerald'
                        ? 'text-emerald-600'
                        : diff.color === 'yellow'
                        ? 'text-yellow-600'
                        : 'text-purple-600'
                    }
                  >
                    {diff.icon}
                  </span>
                </div>
                <p className="text-gray-500 text-sm lg:text-base mb-2">{diff.description}</p>
                {selectedDifficulty === diff.level && (
                  <span className="text-emerald-600 text-sm lg:text-base font-semibold">Selected</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl shadow-lg p-6 lg:p-8 xl:p-10 mb-6 lg:mb-8 text-white">
          <div className="text-sm lg:text-base font-semibold mb-2">WHAT YOU'LL GET</div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6">Friendly quiz with instant feedback</h3>
          <ul className="space-y-2 lg:space-y-3">
            <li className="flex items-start gap-2 lg:gap-3 text-sm lg:text-base">
              <span className="mt-1">•</span>
              <span>Bite-sized explanations for every answer.</span>
            </li>
            <li className="flex items-start gap-2 lg:gap-3 text-sm lg:text-base">
              <span className="mt-1">•</span>
              <span>Tone automatically matches the learner profile.</span>
            </li>
          </ul>
        </div>

        <button className="w-full bg-gray-300 text-gray-500 font-semibold py-4 lg:py-5 rounded-2xl text-lg lg:text-xl cursor-not-allowed">
          Generate Quiz
        </button>
      </div>
    </div>
  );
}