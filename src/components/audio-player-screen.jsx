import { useState, useEffect } from 'react'
import {
  ChevronDown,
  FileText,
  CheckCircle2,
  Volume2,
  RotateCcw,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Heart,
} from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Slider } from './ui/slider'

export default function AudioPlayerScreen({ story, onBack }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(138)
  const [volume, setVolume] = useState(100)

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false)
            return duration
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, duration])

  return (
    <div className="min-h-screen bg-white pb-6">
      <div className="px-6 py-4 flex items-center justify-between">
        <button onClick={onBack} className="p-2">
          <ChevronDown className="h-6 w-6 text-gray-700" />
        </button>
        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Now Playing</span>
        <div className="flex items-center gap-2">
          <button className="p-2">
            <FileText className="h-5 w-5 text-gray-700" />
          </button>
          <button className="p-2 relative">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            <div className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-emerald-500 rounded-full border-2 border-white" />
          </button>
        </div>
      </div>

      <div className="px-6 mb-6">
        <Card className="bg-gradient-to-br from-emerald-100 to-teal-100 border-0 p-6 shadow-lg">
          <div className="relative">
            <img
              src={story?.image || '/friend.png'}
              alt={story?.title || 'Friendship and Courage'}
              className="w-full aspect-square object-cover rounded-2xl shadow-md"
            />
            <div className="absolute top-4 left-0 right-0">
              <h1
                className="text-2xl font-bold text-center text-yellow-400 drop-shadow-lg px-4"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                {story?.title || 'Friendship and Courage'}
              </h1>
            </div>
          </div>
        </Card>
      </div>

      <div className="px-6 mb-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">{story?.subtitle || 'The Melody of Friendship'}</h2>
            <p className="text-sm text-gray-600">{story?.subtitle ? '' : 'A heartwarming story about friendship and courage'}</p>
          </div>
          <button className="p-2">
            <Heart className="h-6 w-6 text-gray-400 hover:fill-red-500 hover:text-red-500 transition-colors" />
          </button>
        </div>

        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl py-6 mt-4 flex items-center justify-center gap-2">
          <CheckCircle2 className="h-5 w-5" />
          Test Your Understanding
          <span className="ml-2 bg-emerald-600 px-2 py-0.5 rounded-full text-xs">7 Questions</span>
        </Button>
      </div>

      <div className="px-6 mb-4">
        <Slider
          value={[currentTime]}
          max={duration}
          step={1}
          onValueChange={(value) => setCurrentTime(value[0])}
          className="w-full"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-600">{formatTime(currentTime)}</span>
          <span className="text-xs text-gray-600">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="px-6">
        <div className="flex items-center justify-center gap-6">
          <button className="p-3">
            <Volume2 className="h-5 w-5 text-gray-700" />
          </button>
          <button className="p-3">
            <RotateCcw className="h-5 w-5 text-gray-700" />
          </button>
          <button className="p-3">
            <SkipBack className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-emerald-500 hover:bg-emerald-600 rounded-full p-4 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="h-8 w-8 text-white fill-white" />
            ) : (
              <Play className="h-8 w-8 text-white fill-white" />
            )}
          </button>
          <button className="p-3">
            <SkipForward className="h-6 w-6 text-gray-700" />
          </button>
          <button className="p-3">
            <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          <button className="p-3">
            <RotateCcw className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  )
}

