import React, { useState } from 'react'
import { subjects } from '../utils/subjects'
import { loadRatings, applyNewRating, ensureSubject } from '../utils/storage'
import { difficultyToRating, updateElo } from '../utils/elo'
import SubjectCard from '../components/SubjectCard'
import StudyTimer from '../components/StudyTimer'

export default function Overview() {
  const [ratings, setRatings] = useState(loadRatings())
  const [active, setActive] = useState(null)
  const [lastDelta, setLastDelta] = useState({})

  function start(subject) {
    const r = { ...ratings }
    ensureSubject(r, subject)
    setRatings(r)
    setActive(subject)
  }

  function finishStudy(seconds, difficulty = 'Medium') {
    let outcome = 1
    if (seconds < 60) outcome = 0
    else if (seconds < 10 * 60) outcome = 0.7
    else outcome = 1

    const r = loadRatings()
    ensureSubject(r, active)
    const current = r[active].current
    const opponent = difficultyToRating(difficulty)
    const next = updateElo(current, opponent, outcome)
    const newRatings = applyNewRating(r, active, next)
    setRatings(newRatings)
    setLastDelta(d => ({ ...d, [active]: next - current }))
    setActive(null)
  }

  return (
    <div className="flex flex-col gap-4">
      {subjects.map((s) => (
        <SubjectCard
          key={s}
          subject={s}
          rating={(ratings[s] && ratings[s].current) || 800}
          delta={(lastDelta[s] && lastDelta[s]) || 0}
          onStart={() => start(s)}
        />
      ))}

      {active && (
        <div className="mt-4">
          <StudyTimer subject={active} onFinish={(secs) => finishStudy(secs)} />
        </div>
      )}
    </div>
  )
}
