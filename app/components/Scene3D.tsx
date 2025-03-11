'use client'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Cube } from './Cube'
import { useEffect, useState } from 'react'

export const Scene3D = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(window.scrollY / scrollHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="h-[400vh] w-full">
      <div className="fixed top-0 left-0 w-full h-screen">
        <Canvas
          camera={{
            position: [2, 2, 2],
            fov: 50,
          }}
        >
          <Environment preset="night" />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} />
          <Cube scrollProgress={scrollProgress} />
        </Canvas>
      </div>
    </div>
  )
} 