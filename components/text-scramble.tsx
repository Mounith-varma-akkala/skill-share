"use client"

import { useEffect, useState, useRef } from "react"

interface TextScrambleProps {
  text: string
  className?: string
}

export function TextScramble({ text, className }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("")
  const chars = "!<>-_\\/[]{}—=+*^?#________"
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const frameRef = useRef(0)
  const queueRef = useRef<string[]>([])
  const frameRequestRef = useRef<number | null>(null)

  useEffect(() => {
    queueRef.current = [text]
    update()

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current)
      if (frameRequestRef.current) cancelAnimationFrame(frameRequestRef.current)
    }
  }, [text])

  const update = () => {
    let output = ""
    let complete = 0
    const nextText = queueRef.current[0]

    for (let i = 0, n = text.length; i < n; i++) {
      if (i < frameRef.current) {
        complete++
        output += nextText[i]
      } else {
        output += chars[Math.floor(Math.random() * chars.length)]
      }
    }

    setDisplayText(output)

    if (complete === text.length) {
      if (intervalRef.current) clearTimeout(intervalRef.current)
      return
    }

    if (frameRef.current < text.length) {
      frameRef.current = frameRef.current + 1
    }

    frameRequestRef.current = requestAnimationFrame(update)
  }

  return <span className={className}>{displayText}</span>
}
