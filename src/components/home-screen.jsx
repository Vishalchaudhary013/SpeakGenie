import { Heart, Moon, Sparkles, Video, Phone, BookOpen, Bot, ChevronRight } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Avatar } from './ui/avatar'

const stories = [
  {
    id: 1,
    title: 'Choosing the Right Path',
    subtitle: 'A journey of discovery',
    image: '/writePath.png',
  },
  {
    id: 2,
    title: 'The Fountain and Mayor',
    subtitle: 'A tale of leadership',
    image: '/Mayor.png',
  },
  {
    id: 3,
    title: 'The Lens Sap',
    subtitle: 'An adventure story',
    image: '/Lens.webp',
  },
]

const mainActions = [
  { id: 'video-learning', icon: Video, label: 'Video Learning', color: 'bg-blue-100' },
  { id: 'peer-calls', icon: Phone, label: 'Peer Calls', color: 'bg-red-100' },
  { id: 'stories', icon: BookOpen, label: 'Stories', color: 'bg-orange-100' },
  { id: 'ai-calls', icon: Bot, label: 'AI Calls', color: 'bg-purple-100' },
]

const practiceHumans = [
  {
    id: 1,
    title: 'Favorite Animals',
    subtitle: 'Talk about your favorite animals and pets',
    image: '/animals.png',
    badge: 'Be first!',
  },
  {
    id: 2,
    title: 'Favorite Animals',
    subtitle: 'Talk about your favorite animals and pets',
    image: '/animals.png',
  },
]

const practiceAI = [
  {
    id: 1,
    name: 'Talk With Doraemon',
    image: '/doremon.webp',
    color: 'bg-blue-100',
  },
  {
    id: 2,
    name: 'Talk with Spider Man',
    image: '/spiderman.jpg',
    color: 'bg-red-100',
  },
]

export default function HomeScreen({ onNavigateToAudioPlayer, onNavigateToQuizCreator, onNavigateToVideoLearning }) {
  return (
    <div className="pb-20">
      <div className=" z-50 bg-gradient-to-br from-emerald-400 to-emerald-500 p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 bg-pink-400">
              <div className="flex items-center justify-center h-full w-full text-white text-xl">L</div>
            </Avatar>
            <div>
              <div className="text-white/80 text-sm flex items-center gap-2">Good Night</div>
              <div className="text-white font-bold text-xl">Lorenzo</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Moon className="text-white/80 h-4 w-4" />
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <Heart className="h-4 w-4 fill-orange-400 text-orange-400" />
              <span className="text-white font-semibold">30</span>
            </div>
            <div className="bg-pink-500 rounded-full px-3 py-1">
              <span className="text-white font-bold text-sm">PRO</span>
            </div>
          </div>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/25 rounded-3xl p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="bg-white/10 ring-1 ring-white/30 backdrop-blur-sm rounded-full h-12 w-12 flex items-center justify-center">
              <span className="text-white font-bold">L3</span>
            </div>
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="text-white/90 text-sm font-semibold">XP PROGRESS</span>
                <span className="h-1 w-1 rounded-full bg-white/70" />
              </div>

              <div className="h-2 bg-white/15 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: '42%' }} />
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-white/90 text-sm font-semibold">42/100 XP</span>
                <span className="text-white/80 text-xs font-semibold">Next: L4</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button className="h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/25 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </button>
            <span className="text-white font-semibold text-base">242 XP</span>
            <button className="text-white/70">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
          </div>
        </Card>
      </div>

      <div className="px-6 py-6">
        <div className="grid grid-cols-4 gap-4">
          {mainActions.map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-center gap-2"
            >
              <div className={`${action.color} h-16 w-16 rounded-2xl flex items-center justify-center shadow-sm`}>
                <action.icon className="h-7 w-7 text-gray-700" />
              </div>
              <span className="text-xs text-center text-gray-700 leading-tight">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-emerald-500" />
            <h2 className="font-bold text-gray-900">Audio Stories</h2>
          </div>
          <button className="text-cyan-500 text-sm font-semibold flex items-center gap-1">
            Show all
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => onNavigateToAudioPlayer(story)}
              className="flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={story.image || '/placeholder.svg'}
                  alt={story.title}
                  className="h-48 w-36 object-cover rounded-2xl shadow-md"
                />
                {story.subtitle && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent rounded-2xl"></div>
                    <p className="absolute top-2 left-2 right-2 text-xs text-white font-medium drop-shadow-lg">{story.subtitle}</p>
                  </>
                )}
              </div>
              <p className="text-xs text-gray-700 mt-2 w-36 font-semibold">{story.title}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-purple-500" />
            <h2 className="font-bold text-gray-900">Practice with Humans</h2>
          </div>
          <button className="text-cyan-500 text-sm font-semibold flex items-center gap-1">
            Show all
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {practiceHumans.map((item) => (
            <Card key={item.id} className="flex-shrink-0 w-78 h-48 border-0 shadow-md overflow-hidden relative z-0">
              <img
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              {item.badge && (
                <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {item.badge}
                </div>
              )}
              <div className="relative h-full flex flex-col justify-end p-4 space-y-2">
                <h3 className="text-white font-semibold leading-tight drop-shadow-lg">{item.title}</h3>
                <p className="text-sm text-white/90 drop-shadow-md">{item.subtitle}</p>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full">
                  Join & Start Call
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-purple-500" />
            <h2 className="font-bold text-gray-900">Practice with AI</h2>
          </div>
          <button className="text-cyan-500 text-sm font-semibold flex items-center gap-1">
            Show all
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {practiceAI.map((character) => (
            <div key={character.id} className="flex-shrink-0">
              <Card
                className={`${character.color} w-40 border-0 shadow-md p-4`}
              >
                <img
                  src={character.image || '/placeholder.svg'}
                  alt={character.name}
                  className="h-24 w-24 mx-auto object-contain"
                />
              </Card>
              <p className="text-center text-gray-900 font-semibold text-sm mt-2 w-40">{character.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 shadow-lg z-40">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1">
            <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span className="text-xs text-emerald-500 font-semibold">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1" onClick={onNavigateToQuizCreator}>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-gray-500" />
            </div>
            <span className="text-xs text-gray-500">Learn</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <Phone className="h-5 w-5 text-gray-500" />
            </div>
            <span className="text-xs text-gray-500">Call</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xs text-gray-500">Profile</span>
          </button>
        </div>
      </div>
    </div>
  )
}

