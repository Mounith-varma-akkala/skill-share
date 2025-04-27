"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function AnimatedCard({ children, className, glowColor = "rgba(230, 43, 30, 0.4)" }: AnimatedCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const { left, top, width, height } = card.getBoundingClientRect()

    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    const rotateXValue = (y - 0.5) * 10
    const rotateYValue = (x - 0.5) * -10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
    setGlowPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setScale(1.03)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: "transform 0.2s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x * 100}% ${
            glowPosition.y * 100
          }%, ${glowColor}, transparent 50%)`,
          opacity: scale > 1 ? 0.8 : 0,
          transition: "opacity 0.2s ease-out",
        }}
      />
      {children}
    </motion.div>
  )
}
