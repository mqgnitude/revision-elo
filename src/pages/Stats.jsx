import React from 'react'
import { loadRatings } from '../utils/storage'

export default function Stats() {
  const r = loadRatings()

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Stats</h2>
      <pre className="bg-zinc-800 p-4 rounded-xl overflow-auto max-h-64">{JSON.stringify(r, null, 2)}</pre>
    </div>
  )
}
