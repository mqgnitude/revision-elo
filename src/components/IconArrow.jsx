import React from 'react'

export default function IconArrow({ up = true, className = '' }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={up ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
