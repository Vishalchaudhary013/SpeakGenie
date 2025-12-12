import { useState } from 'react'
import HomeScreen from './components/home-screen'
import AudioPlayerScreen from './components/audio-player-screen'
import QuizCreatorScreen from './components/quiz-creator-screen'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home')
  const [selectedStory, setSelectedStory] = useState(null)

  const defaultVideoStory = {
    id: 'video-learning',
    title: 'Video Learning',
    subtitle: 'Learn through interactive videos',
    image: '/writePath.png',
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {currentScreen === 'home' && (
        <HomeScreen
          onNavigateToAudioPlayer={(story) => {
            console.log('[App] Navigate to audio-player with story:', story)
            setSelectedStory(story)
            setCurrentScreen('audio-player')
          }}
          onNavigateToQuizCreator={() => setCurrentScreen('quiz-creator')}
          onNavigateToVideoLearning={() => {
            console.log('[App] Navigate to audio-player (Video Learning)')
            setSelectedStory(defaultVideoStory)
            setCurrentScreen('audio-player')
          }}
        />
      )}
      {currentScreen === 'audio-player' && selectedStory && (
        <AudioPlayerScreen story={selectedStory} onBack={() => setCurrentScreen('home')} />
      )}
      {currentScreen === 'quiz-creator' && <QuizCreatorScreen onBack={() => setCurrentScreen('home')} />}
    </div>
  )
}

