import React, { useEffect, useState } from 'react'

export default function StudyTimer({ subject, onFinish }) {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  function format(s) {
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
  }

  return (
    <div className="p-4 bg-zinc-800 rounded-xl">
      <h3 className="font-semibold">Studying {subject}</h3>
      <p className="text-2xl my-2">{format(seconds)}</p>
      <div className="flex gap-2">
        <button onClick={() => setRunning(r => !r)} className="px-3 py-1 bg-zinc-700 rounded">{running ? 'Pause' : 'Resume'}</button>
        <button onClick={() => onFinish(seconds)} className="px-3 py-1 bg-emerald-600 rounded">Finish</button>
      </div>
    </div>
  )
}
