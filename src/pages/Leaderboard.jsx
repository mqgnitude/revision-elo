import React from 'react'
import { loadRatings } from '../utils/storage'

export default function Leaderboard() {
  const r = loadRatings()
  const rows = Object.entries(r)
    .map(([subject, data]) => ({ subject, rating: data.current }))
    .sort((a, b) => b.rating - a.rating)

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <ul className="space-y-2">
        {rows.map((row) => (
          <li key={row.subject} className="p-3 bg-zinc-800 rounded-xl flex justify-between">
            <span>{row.subject}</span>
            <strong>{row.rating}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}
