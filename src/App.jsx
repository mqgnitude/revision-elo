import React from 'react'
import Shell from './layout/Shell'
import Overview from './pages/Overview'
import Stats from './pages/Stats'
import Leaderboard from './pages/Leaderboard'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Shell>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Study Motivator</h1>
        <div className="space-y-6">
          <Overview />
          <Stats />
          <Leaderboard />
          <Settings />
        </div>
      </div>
    </Shell>
  )
}
