"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useTheme } from "next-themes"
import { Sphere, Environment } from "@react-three/drei"
import { Vector3 } from "three"
import "./three-d-background.css"

function Particles({ count = 100, theme }) {
  const mesh = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  // Generate random particles
  const dummy = useRef(new Vector3())
  const particles = useRef([])

  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      position: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10],
      speed: Math.random() * 0.01,
      offset: Math.random() * Math.PI * 2,
    }))
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    particles.current.forEach((particle, i) => {
      const { position, speed, offset } = particle

      // Calculate new position with gentle wave motion
      const x = position[0] + Math.sin(time * speed + offset) * 0.02
      const y = position[1] + Math.cos(time * speed + offset) * 0.02
      const z = position[2]

      dummy.current.set(x, y, z)
      dummy.current.toArray(mesh.current.geometry.attributes.position.array, i * 3)
    })

    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.rotation.y = time * 0.05
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={new Float32Array(count * 3)} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        color={theme === "dark" ? "#a78bfa" : "#7c3aed"}
        transparent
        opacity={0.8}
      />
    </points>
  )
}

function FloatingSpheres({ theme }) {
  const spheres = [
    { position: [-3, 2, -5], size: 0.8, speed: 0.2 },
    { position: [3, -1, -3], size: 0.5, speed: 0.3 },
    { position: [-2, -2, -4], size: 0.7, speed: 0.25 },
    { position: [2, 3, -6], size: 0.6, speed: 0.15 },
  ]

  return spheres.map((sphere, index) => (
    <AnimatedSphere key={index} position={sphere.position} size={sphere.size} speed={sphere.speed} theme={theme} />
  ))
}

function AnimatedSphere({ position, size, speed, theme }) {
  const mesh = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    mesh.current.position.y += Math.sin(t * speed) * 0.002
    mesh.current.rotation.x = t * speed * 0.2
    mesh.current.rotation.z = t * speed * 0.2
  })

  return (
    <Sphere ref={mesh} position={position} args={[size, 16, 16]}>
      <meshStandardMaterial
        color={theme === "dark" ? "#a78bfa" : "#7c3aed"}
        transparent
        opacity={0.1}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

export default function ThreeDBackground() {
  const { theme } = useTheme()

  return (
    <div className="three-d-background">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Particles count={200} theme={theme} />
        <FloatingSpheres theme={theme} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
