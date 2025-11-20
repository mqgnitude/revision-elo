import React from 'react'
import IconArrow from './IconArrow'

export default function SubjectCard({ subject, rating, delta, onStart }) {
  const up = delta >= 0
  return (
    <div className="flex items-center justify-between p-4 bg-zinc-800 rounded-xl shadow-md">
      <div>
        <div className="flex items-center gap-3">
          <img src="/profile.png" alt="profile" className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">{subject}</h3>
            <p className="text-sm text-zinc-400">Study like chess — ELO rating</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-xl font-bold">{rating}</div>
          <div className={`text-sm ${up ? 'text-green-400' : 'text-rose-400'}`}>{up ? '+' : ''}{delta}</div>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={onStart} className="px-3 py-1 bg-indigo-600 rounded-md text-sm">Start</button>
        </div>
      </div>
    </div>
  )
}
